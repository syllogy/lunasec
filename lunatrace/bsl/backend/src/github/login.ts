/*
 * Copyright by LunaSec (owned by Refinery Labs, Inc)
 *
 * Licensed under the Business Source License v1.1 
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 * https://github.com/lunasec-io/lunasec/blob/master/licenses/BSL-LunaTrace.txt
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { Request, Response } from 'express';

import {hasura} from "../hasura-api";
import {getGithubAccessTokenFromKratos} from "../kratos";
import {MaybeError} from "../types/util";
import {errorResponse, logError} from "../utils/errors";
import {normalizeGithubId} from "../utils/github";
import {log} from "../utils/log";
import {catchError, threwError, Try} from "../utils/try";

import {getGithubGraphqlClient} from "./auth";

async function upsertAuthenticatedGithubUser(userId: string): Promise<MaybeError<null>> {
  const kratosResponse = await getGithubAccessTokenFromKratos(userId);
  if (kratosResponse.error) {
    return {
      error: true,
      msg: kratosResponse.message
    }
  }

  const github = getGithubGraphqlClient(kratosResponse.token);

  const viewerId = await catchError(
    async () => await github.GetViewerId()
  );

  if (threwError(viewerId) || viewerId === null) {
    logError(viewerId === null ? new Error('viewerId is null') : viewerId);
    return {
      error: true,
      msg: 'cannot get github user id'
    };
  }

  const githubUserId = viewerId.viewer.id;
  const normalizedGithubId = normalizeGithubId(githubUserId);

  const resp = await catchError(async () => await hasura.UpsertUserFromId({
    user: {
      kratos_id: userId,
      github_id: normalizedGithubId,
      github_node_id: githubUserId
    }
  }))

  if (threwError(resp)) {
    logError(resp);
    return {
      error: true,
      msg: 'cannot upsert hasura user'
    }
  }
  return {
    error: false,
    res: null
  }
}

/*
Example contents of req.body.ctx.identity:
{
  created_at: '2022-04-11T21:05:48.361617Z',
  id: '3518f0cf-ffaa-4f0e-a261-19138d19388a',
  recovery_addresses: [
    {
      created_at: '2022-04-11T21:05:48.366247Z',
      id: 'fb5c2d11-d6ad-458c-9869-081b6131b20c',
      updated_at: '2022-04-11T21:05:48.366247Z',
      value: 'email@example.com',
      via: 'email'
    }
  ],
  schema_id: 'user_v1',
  schema_url: 'http://localhost:4455/api/kratos/schemas/dXNlcl92MQ',
  state: 'active',
  state_changed_at: '2022-04-11T21:05:48.355113Z',
  traits: {
    email: 'email@example.com',
    githubId: '1069294',
    name: 'Example',
    picture: 'https://avatars.githubusercontent.com/u/1069294?v=4',
    profileUrl: 'https://github.com/breadchris'
  },
  updated_at: '2022-04-11T21:05:48.361617Z',
  verifiable_addresses: [
    {
      created_at: '2022-04-11T21:05:48.363827Z',
      id: '86552883-d7b3-4fe2-9c51-3de65429954e',
      status: 'sent',
      updated_at: '2022-04-11T21:05:48.363827Z',
      value: 'email@example.com',
      verified: false,
      via: 'email'
    }
  ]
}
 */

export async function githubLogin(req: Request, res: Response): Promise<void> {
  // todo: fix this unsafe property access
  const userId: string = req.body.ctx.identity.id as string;

  const githubId: string = req.body.ctx.identity.traits.githubId;

  log.info(`[user: ${userId}, githubId: ${githubId}] Github login webhook started`);

  if (!githubId) {
    // if there is no github id, then call the github api to get the user's github id
    await upsertAuthenticatedGithubUser(userId);
  } else {
    const resp = await catchError(async () => await hasura.UpsertUserFromId({
      user: {
        kratos_id: userId,
        github_id: githubId
      }
    }))

    if (threwError(resp)) {
      logError(resp);
      res.status(500).send(errorResponse('unable to locate user account in database'))
    }
  }

  res.send({
    error: false,
    message: 'Github login callback completed successfully',
  });
}
