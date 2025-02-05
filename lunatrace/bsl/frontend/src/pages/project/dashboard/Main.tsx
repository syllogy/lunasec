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
import React from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { AiFillGithub, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiGitCommit, BiLinkExternal, BiUnlink } from 'react-icons/bi';

import { GithubTraits, ProjectInfo, SetActiveTab } from '../types';

import { ManifestDrop } from './ManifestDrop';
import { ScanTypesExplanation } from './ScanTypesExplanation';

interface ProjectDashboardMainProps {
  project: ProjectInfo;
  setActiveTab: SetActiveTab;
}

export const ProjectDashboardMain: React.FunctionComponent<ProjectDashboardMainProps> = ({ project, setActiveTab }) => {
  const renderGithubInfo = () => {
    if (!project.github_repository) {
      return (
        <p className="text-center">
          <BiUnlink size="1rem" className="me-1 mb-1" />
          Not linked to a GitHub Repository
        </p>
      );
    }
    return (
      <a href={project.github_repository.traits.html_url || ''}>
        <p className="text-center">
          <AiFillGithub size="1rem" className="me-1 mb-1" />
          Imported from GitHub
        </p>
      </a>
    ); // const github_traits: GithubTraits = project.github_repository.traits;
    // return (
    //
    // );
  };
  console.log('project info is ', project);
  return (
    <>
      {renderGithubInfo()}
      {/*Github URL Github Name short github description blurb most recent several builds, master first probably*/}
      <Accordion flush={false} defaultActiveKey={project.builds.length > 0 ? '' : '0'}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {' '}
            <AiOutlineInfoCircle className="me-2" size="1rem" />{' '}
            {project.builds.length > 0
              ? 'How to take more snapshots'
              : 'How to take your first snapshot and start seeing vulnerabilities'}
          </Accordion.Header>
          <Accordion.Body>
            <ScanTypesExplanation project={project} setActiveTab={setActiveTab} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      <ManifestDrop project_id={project.id} />
    </>
  );
};
