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
import { api } from './baseApi';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _text: string;
  builds_source_type: 'cli'|'gui'|'pr';
  date: string;
  fix_state_enum: 'fixed'|'not-fixed'|'unknown';
  jsonb: Record<any, any> | any[];
  numeric: number;
  organization_user_role: string;
  severity_enum: string;
  timestamp: string;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type PresignedUrlResponse = {
  __typename?: 'PresignedUrlResponse';
  bucket: Scalars['String'];
  error: Scalars['Boolean'];
  error_message?: Maybe<Scalars['String']>;
  headers: Scalars['String'];
  key: Scalars['String'];
  url: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
};

/** columns and relationships of "builds" */
export type Builds = {
  __typename?: 'builds';
  build_number?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamp'];
  existing_github_review_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  findings: Array<Findings>;
  /** An aggregate relationship */
  findings_aggregate: Findings_Aggregate;
  git_branch?: Maybe<Scalars['String']>;
  git_hash?: Maybe<Scalars['String']>;
  git_remote?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  manifests: Array<Manifests>;
  /** An object relationship */
  project?: Maybe<Projects>;
  project_id?: Maybe<Scalars['uuid']>;
  pull_request_id?: Maybe<Scalars['String']>;
  s3_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  scans: Array<Scans>;
  /** An aggregate relationship */
  scans_aggregate: Scans_Aggregate;
  source_type: Scalars['builds_source_type'];
};


/** columns and relationships of "builds" */
export type BuildsFindingsArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};


/** columns and relationships of "builds" */
export type BuildsFindings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};


/** columns and relationships of "builds" */
export type BuildsManifestsArgs = {
  distinct_on?: InputMaybe<Array<Manifests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Manifests_Order_By>>;
  where?: InputMaybe<Manifests_Bool_Exp>;
};


/** columns and relationships of "builds" */
export type BuildsScansArgs = {
  distinct_on?: InputMaybe<Array<Scans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scans_Order_By>>;
  where?: InputMaybe<Scans_Bool_Exp>;
};


/** columns and relationships of "builds" */
export type BuildsScans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scans_Order_By>>;
  where?: InputMaybe<Scans_Bool_Exp>;
};

/** order by aggregate values of table "builds" */
export type Builds_Aggregate_Order_By = {
  avg?: InputMaybe<Builds_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Builds_Max_Order_By>;
  min?: InputMaybe<Builds_Min_Order_By>;
  stddev?: InputMaybe<Builds_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Builds_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Builds_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Builds_Sum_Order_By>;
  var_pop?: InputMaybe<Builds_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Builds_Var_Samp_Order_By>;
  variance?: InputMaybe<Builds_Variance_Order_By>;
};

/** order by avg() on columns of table "builds" */
export type Builds_Avg_Order_By = {
  build_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "builds". All fields are combined with a logical 'AND'. */
export type Builds_Bool_Exp = {
  _and?: InputMaybe<Array<Builds_Bool_Exp>>;
  _not?: InputMaybe<Builds_Bool_Exp>;
  _or?: InputMaybe<Array<Builds_Bool_Exp>>;
  build_number?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  existing_github_review_id?: InputMaybe<String_Comparison_Exp>;
  findings?: InputMaybe<Findings_Bool_Exp>;
  git_branch?: InputMaybe<String_Comparison_Exp>;
  git_hash?: InputMaybe<String_Comparison_Exp>;
  git_remote?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  manifests?: InputMaybe<Manifests_Bool_Exp>;
  project?: InputMaybe<Projects_Bool_Exp>;
  project_id?: InputMaybe<Uuid_Comparison_Exp>;
  pull_request_id?: InputMaybe<String_Comparison_Exp>;
  s3_url?: InputMaybe<String_Comparison_Exp>;
  scans?: InputMaybe<Scans_Bool_Exp>;
  source_type?: InputMaybe<Builds_Source_Type_Comparison_Exp>;
};

/** order by max() on columns of table "builds" */
export type Builds_Max_Order_By = {
  build_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  existing_github_review_id?: InputMaybe<Order_By>;
  git_branch?: InputMaybe<Order_By>;
  git_hash?: InputMaybe<Order_By>;
  git_remote?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  pull_request_id?: InputMaybe<Order_By>;
  s3_url?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "builds" */
export type Builds_Min_Order_By = {
  build_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  existing_github_review_id?: InputMaybe<Order_By>;
  git_branch?: InputMaybe<Order_By>;
  git_hash?: InputMaybe<Order_By>;
  git_remote?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  pull_request_id?: InputMaybe<Order_By>;
  s3_url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "builds" */
export type Builds_Mutation_Response = {
  __typename?: 'builds_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Builds>;
};

/** Ordering options when selecting data from "builds". */
export type Builds_Order_By = {
  build_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  existing_github_review_id?: InputMaybe<Order_By>;
  findings_aggregate?: InputMaybe<Findings_Aggregate_Order_By>;
  git_branch?: InputMaybe<Order_By>;
  git_hash?: InputMaybe<Order_By>;
  git_remote?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manifests_aggregate?: InputMaybe<Manifests_Aggregate_Order_By>;
  project?: InputMaybe<Projects_Order_By>;
  project_id?: InputMaybe<Order_By>;
  pull_request_id?: InputMaybe<Order_By>;
  s3_url?: InputMaybe<Order_By>;
  scans_aggregate?: InputMaybe<Scans_Aggregate_Order_By>;
  source_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: builds */
export type Builds_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "builds" */
export enum Builds_Select_Column {
  /** column name */
  BuildNumber = 'build_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExistingGithubReviewId = 'existing_github_review_id',
  /** column name */
  GitBranch = 'git_branch',
  /** column name */
  GitHash = 'git_hash',
  /** column name */
  GitRemote = 'git_remote',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  PullRequestId = 'pull_request_id',
  /** column name */
  S3Url = 's3_url',
  /** column name */
  SourceType = 'source_type'
}

/** input type for updating data in table "builds" */
export type Builds_Set_Input = {
  s3_url?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "builds_source_type". All fields are combined with logical 'AND'. */
export type Builds_Source_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['builds_source_type']>;
  _gt?: InputMaybe<Scalars['builds_source_type']>;
  _gte?: InputMaybe<Scalars['builds_source_type']>;
  _in?: InputMaybe<Array<Scalars['builds_source_type']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['builds_source_type']>;
  _lte?: InputMaybe<Scalars['builds_source_type']>;
  _neq?: InputMaybe<Scalars['builds_source_type']>;
  _nin?: InputMaybe<Array<Scalars['builds_source_type']>>;
};

/** order by stddev() on columns of table "builds" */
export type Builds_Stddev_Order_By = {
  build_number?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "builds" */
export type Builds_Stddev_Pop_Order_By = {
  build_number?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "builds" */
export type Builds_Stddev_Samp_Order_By = {
  build_number?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "builds" */
export type Builds_Sum_Order_By = {
  build_number?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "builds" */
export type Builds_Var_Pop_Order_By = {
  build_number?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "builds" */
export type Builds_Var_Samp_Order_By = {
  build_number?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "builds" */
export type Builds_Variance_Order_By = {
  build_number?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "findings" */
export type Findings = {
  __typename?: 'findings';
  /** An object relationship */
  build: Builds;
  build_id: Scalars['uuid'];
  created_at: Scalars['timestamp'];
  dedupe_slug: Scalars['String'];
  fix_state: Scalars['fix_state_enum'];
  fix_versions?: Maybe<Scalars['_text']>;
  id: Scalars['uuid'];
  language: Scalars['String'];
  locations: Scalars['_text'];
  matcher: Scalars['String'];
  package_name: Scalars['String'];
  /** An object relationship */
  package_version?: Maybe<Package_Versions>;
  package_version_id?: Maybe<Scalars['uuid']>;
  purl: Scalars['String'];
  /** An object relationship */
  scan: Scans;
  scan_id: Scalars['uuid'];
  severity: Scalars['severity_enum'];
  type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  version: Scalars['String'];
  version_matcher: Scalars['String'];
  virtual_path?: Maybe<Scalars['String']>;
  /** An object relationship */
  vulnerability: Vulnerabilities;
  vulnerability_id: Scalars['uuid'];
  /** An object relationship */
  vulnerability_package?: Maybe<Vulnerability_Packages>;
  vulnerability_package_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "findings" */
export type Findings_Aggregate = {
  __typename?: 'findings_aggregate';
  aggregate?: Maybe<Findings_Aggregate_Fields>;
  nodes: Array<Findings>;
};

/** aggregate fields of "findings" */
export type Findings_Aggregate_Fields = {
  __typename?: 'findings_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Findings_Max_Fields>;
  min?: Maybe<Findings_Min_Fields>;
};


/** aggregate fields of "findings" */
export type Findings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Findings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "findings" */
export type Findings_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Findings_Max_Order_By>;
  min?: InputMaybe<Findings_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "findings". All fields are combined with a logical 'AND'. */
export type Findings_Bool_Exp = {
  _and?: InputMaybe<Array<Findings_Bool_Exp>>;
  _not?: InputMaybe<Findings_Bool_Exp>;
  _or?: InputMaybe<Array<Findings_Bool_Exp>>;
  build?: InputMaybe<Builds_Bool_Exp>;
  build_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  dedupe_slug?: InputMaybe<String_Comparison_Exp>;
  fix_state?: InputMaybe<Fix_State_Enum_Comparison_Exp>;
  fix_versions?: InputMaybe<_Text_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  locations?: InputMaybe<_Text_Comparison_Exp>;
  matcher?: InputMaybe<String_Comparison_Exp>;
  package_name?: InputMaybe<String_Comparison_Exp>;
  package_version?: InputMaybe<Package_Versions_Bool_Exp>;
  package_version_id?: InputMaybe<Uuid_Comparison_Exp>;
  purl?: InputMaybe<String_Comparison_Exp>;
  scan?: InputMaybe<Scans_Bool_Exp>;
  scan_id?: InputMaybe<Uuid_Comparison_Exp>;
  severity?: InputMaybe<Severity_Enum_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
  version_matcher?: InputMaybe<String_Comparison_Exp>;
  virtual_path?: InputMaybe<String_Comparison_Exp>;
  vulnerability?: InputMaybe<Vulnerabilities_Bool_Exp>;
  vulnerability_id?: InputMaybe<Uuid_Comparison_Exp>;
  vulnerability_package?: InputMaybe<Vulnerability_Packages_Bool_Exp>;
  vulnerability_package_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Findings_Max_Fields = {
  __typename?: 'findings_max_fields';
  build_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  dedupe_slug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  language?: Maybe<Scalars['String']>;
  matcher?: Maybe<Scalars['String']>;
  package_name?: Maybe<Scalars['String']>;
  package_version_id?: Maybe<Scalars['uuid']>;
  purl?: Maybe<Scalars['String']>;
  scan_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  version?: Maybe<Scalars['String']>;
  version_matcher?: Maybe<Scalars['String']>;
  virtual_path?: Maybe<Scalars['String']>;
  vulnerability_id?: Maybe<Scalars['uuid']>;
  vulnerability_package_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "findings" */
export type Findings_Max_Order_By = {
  build_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dedupe_slug?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  matcher?: InputMaybe<Order_By>;
  package_name?: InputMaybe<Order_By>;
  package_version_id?: InputMaybe<Order_By>;
  purl?: InputMaybe<Order_By>;
  scan_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  version_matcher?: InputMaybe<Order_By>;
  virtual_path?: InputMaybe<Order_By>;
  vulnerability_id?: InputMaybe<Order_By>;
  vulnerability_package_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Findings_Min_Fields = {
  __typename?: 'findings_min_fields';
  build_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  dedupe_slug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  language?: Maybe<Scalars['String']>;
  matcher?: Maybe<Scalars['String']>;
  package_name?: Maybe<Scalars['String']>;
  package_version_id?: Maybe<Scalars['uuid']>;
  purl?: Maybe<Scalars['String']>;
  scan_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  version?: Maybe<Scalars['String']>;
  version_matcher?: Maybe<Scalars['String']>;
  virtual_path?: Maybe<Scalars['String']>;
  vulnerability_id?: Maybe<Scalars['uuid']>;
  vulnerability_package_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "findings" */
export type Findings_Min_Order_By = {
  build_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dedupe_slug?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  matcher?: InputMaybe<Order_By>;
  package_name?: InputMaybe<Order_By>;
  package_version_id?: InputMaybe<Order_By>;
  purl?: InputMaybe<Order_By>;
  scan_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  version_matcher?: InputMaybe<Order_By>;
  virtual_path?: InputMaybe<Order_By>;
  vulnerability_id?: InputMaybe<Order_By>;
  vulnerability_package_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "findings". */
export type Findings_Order_By = {
  build?: InputMaybe<Builds_Order_By>;
  build_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dedupe_slug?: InputMaybe<Order_By>;
  fix_state?: InputMaybe<Order_By>;
  fix_versions?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  locations?: InputMaybe<Order_By>;
  matcher?: InputMaybe<Order_By>;
  package_name?: InputMaybe<Order_By>;
  package_version?: InputMaybe<Package_Versions_Order_By>;
  package_version_id?: InputMaybe<Order_By>;
  purl?: InputMaybe<Order_By>;
  scan?: InputMaybe<Scans_Order_By>;
  scan_id?: InputMaybe<Order_By>;
  severity?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  version_matcher?: InputMaybe<Order_By>;
  virtual_path?: InputMaybe<Order_By>;
  vulnerability?: InputMaybe<Vulnerabilities_Order_By>;
  vulnerability_id?: InputMaybe<Order_By>;
  vulnerability_package?: InputMaybe<Vulnerability_Packages_Order_By>;
  vulnerability_package_id?: InputMaybe<Order_By>;
};

/** select columns of table "findings" */
export enum Findings_Select_Column {
  /** column name */
  BuildId = 'build_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DedupeSlug = 'dedupe_slug',
  /** column name */
  FixState = 'fix_state',
  /** column name */
  FixVersions = 'fix_versions',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  Locations = 'locations',
  /** column name */
  Matcher = 'matcher',
  /** column name */
  PackageName = 'package_name',
  /** column name */
  PackageVersionId = 'package_version_id',
  /** column name */
  Purl = 'purl',
  /** column name */
  ScanId = 'scan_id',
  /** column name */
  Severity = 'severity',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Version = 'version',
  /** column name */
  VersionMatcher = 'version_matcher',
  /** column name */
  VirtualPath = 'virtual_path',
  /** column name */
  VulnerabilityId = 'vulnerability_id',
  /** column name */
  VulnerabilityPackageId = 'vulnerability_package_id'
}

/** Boolean expression to compare columns of type "fix_state_enum". All fields are combined with logical 'AND'. */
export type Fix_State_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['fix_state_enum']>;
  _gt?: InputMaybe<Scalars['fix_state_enum']>;
  _gte?: InputMaybe<Scalars['fix_state_enum']>;
  _in?: InputMaybe<Array<Scalars['fix_state_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['fix_state_enum']>;
  _lte?: InputMaybe<Scalars['fix_state_enum']>;
  _neq?: InputMaybe<Scalars['fix_state_enum']>;
  _nin?: InputMaybe<Array<Scalars['fix_state_enum']>>;
};

/**
 * Metadata about a github repository and where to find it.
 *
 *
 * columns and relationships of "github_repositories"
 *
 */
export type Github_Repositories = {
  __typename?: 'github_repositories';
  git_url: Scalars['String'];
  github_id?: Maybe<Scalars['Int']>;
  github_node_id?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['uuid'];
  traits: Scalars['jsonb'];
};


/**
 * Metadata about a github repository and where to find it.
 *
 *
 * columns and relationships of "github_repositories"
 *
 */
export type Github_RepositoriesTraitsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "github_repositories" */
export type Github_Repositories_Aggregate_Order_By = {
  avg?: InputMaybe<Github_Repositories_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Github_Repositories_Max_Order_By>;
  min?: InputMaybe<Github_Repositories_Min_Order_By>;
  stddev?: InputMaybe<Github_Repositories_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Github_Repositories_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Github_Repositories_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Github_Repositories_Sum_Order_By>;
  var_pop?: InputMaybe<Github_Repositories_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Github_Repositories_Var_Samp_Order_By>;
  variance?: InputMaybe<Github_Repositories_Variance_Order_By>;
};

/** order by avg() on columns of table "github_repositories" */
export type Github_Repositories_Avg_Order_By = {
  github_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "github_repositories". All fields are combined with a logical 'AND'. */
export type Github_Repositories_Bool_Exp = {
  _and?: InputMaybe<Array<Github_Repositories_Bool_Exp>>;
  _not?: InputMaybe<Github_Repositories_Bool_Exp>;
  _or?: InputMaybe<Array<Github_Repositories_Bool_Exp>>;
  git_url?: InputMaybe<String_Comparison_Exp>;
  github_id?: InputMaybe<Int_Comparison_Exp>;
  github_node_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  project?: InputMaybe<Projects_Bool_Exp>;
  project_id?: InputMaybe<Uuid_Comparison_Exp>;
  traits?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** order by max() on columns of table "github_repositories" */
export type Github_Repositories_Max_Order_By = {
  git_url?: InputMaybe<Order_By>;
  github_id?: InputMaybe<Order_By>;
  github_node_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "github_repositories" */
export type Github_Repositories_Min_Order_By = {
  git_url?: InputMaybe<Order_By>;
  github_id?: InputMaybe<Order_By>;
  github_node_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "github_repositories". */
export type Github_Repositories_Order_By = {
  git_url?: InputMaybe<Order_By>;
  github_id?: InputMaybe<Order_By>;
  github_node_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Order_By>;
  project_id?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
};

/** select columns of table "github_repositories" */
export enum Github_Repositories_Select_Column {
  /** column name */
  GitUrl = 'git_url',
  /** column name */
  GithubId = 'github_id',
  /** column name */
  GithubNodeId = 'github_node_id',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Traits = 'traits'
}

/** order by stddev() on columns of table "github_repositories" */
export type Github_Repositories_Stddev_Order_By = {
  github_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "github_repositories" */
export type Github_Repositories_Stddev_Pop_Order_By = {
  github_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "github_repositories" */
export type Github_Repositories_Stddev_Samp_Order_By = {
  github_id?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "github_repositories" */
export type Github_Repositories_Sum_Order_By = {
  github_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "github_repositories" */
export type Github_Repositories_Var_Pop_Order_By = {
  github_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "github_repositories" */
export type Github_Repositories_Var_Samp_Order_By = {
  github_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "github_repositories" */
export type Github_Repositories_Variance_Order_By = {
  github_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "identities" */
export type Identities = {
  __typename?: 'identities';
  /** An array relationship */
  organization_users: Array<Organization_User>;
  traits: Scalars['jsonb'];
};


/** columns and relationships of "identities" */
export type IdentitiesOrganization_UsersArgs = {
  distinct_on?: InputMaybe<Array<Organization_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_User_Order_By>>;
  where?: InputMaybe<Organization_User_Bool_Exp>;
};


/** columns and relationships of "identities" */
export type IdentitiesTraitsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "identities". All fields are combined with a logical 'AND'. */
export type Identities_Bool_Exp = {
  _and?: InputMaybe<Array<Identities_Bool_Exp>>;
  _not?: InputMaybe<Identities_Bool_Exp>;
  _or?: InputMaybe<Array<Identities_Bool_Exp>>;
  organization_users?: InputMaybe<Organization_User_Bool_Exp>;
  traits?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "identities". */
export type Identities_Order_By = {
  organization_users_aggregate?: InputMaybe<Organization_User_Aggregate_Order_By>;
  traits?: InputMaybe<Order_By>;
};

/** select columns of table "identities" */
export enum Identities_Select_Column {
  /** column name */
  Traits = 'traits'
}

/** columns and relationships of "ignored_vulnerabilities" */
export type Ignored_Vulnerabilities = {
  __typename?: 'ignored_vulnerabilities';
  /** An object relationship */
  creator?: Maybe<Identities>;
  creator_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  locations: Scalars['jsonb'];
  note: Scalars['String'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['uuid'];
  /** An object relationship */
  vulnerability: Vulnerabilities;
  vulnerability_id: Scalars['uuid'];
};


/** columns and relationships of "ignored_vulnerabilities" */
export type Ignored_VulnerabilitiesLocationsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "ignored_vulnerabilities" */
export type Ignored_Vulnerabilities_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ignored_Vulnerabilities_Max_Order_By>;
  min?: InputMaybe<Ignored_Vulnerabilities_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Ignored_Vulnerabilities_Append_Input = {
  locations?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "ignored_vulnerabilities" */
export type Ignored_Vulnerabilities_Arr_Rel_Insert_Input = {
  data: Array<Ignored_Vulnerabilities_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Ignored_Vulnerabilities_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ignored_vulnerabilities". All fields are combined with a logical 'AND'. */
export type Ignored_Vulnerabilities_Bool_Exp = {
  _and?: InputMaybe<Array<Ignored_Vulnerabilities_Bool_Exp>>;
  _not?: InputMaybe<Ignored_Vulnerabilities_Bool_Exp>;
  _or?: InputMaybe<Array<Ignored_Vulnerabilities_Bool_Exp>>;
  creator?: InputMaybe<Identities_Bool_Exp>;
  creator_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  locations?: InputMaybe<Jsonb_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  project?: InputMaybe<Projects_Bool_Exp>;
  project_id?: InputMaybe<Uuid_Comparison_Exp>;
  vulnerability?: InputMaybe<Vulnerabilities_Bool_Exp>;
  vulnerability_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "ignored_vulnerabilities" */
export enum Ignored_Vulnerabilities_Constraint {
  /** unique or primary key constraint */
  IgnoredVulnerabilitiesPkey = 'ignored_vulnerabilities_pkey',
  /** unique or primary key constraint */
  IgnoredVulnerabilitiesProjectIdVulnerabilityIdKey = 'ignored_vulnerabilities_project_id_vulnerability_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Ignored_Vulnerabilities_Delete_At_Path_Input = {
  locations?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Ignored_Vulnerabilities_Delete_Elem_Input = {
  locations?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Ignored_Vulnerabilities_Delete_Key_Input = {
  locations?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "ignored_vulnerabilities" */
export type Ignored_Vulnerabilities_Insert_Input = {
  locations?: InputMaybe<Scalars['jsonb']>;
  note?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: InputMaybe<Scalars['uuid']>;
  vulnerability_id?: InputMaybe<Scalars['uuid']>;
};

/** order by max() on columns of table "ignored_vulnerabilities" */
export type Ignored_Vulnerabilities_Max_Order_By = {
  creator_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  vulnerability_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "ignored_vulnerabilities" */
export type Ignored_Vulnerabilities_Min_Order_By = {
  creator_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  vulnerability_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ignored_vulnerabilities" */
export type Ignored_Vulnerabilities_Mutation_Response = {
  __typename?: 'ignored_vulnerabilities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ignored_Vulnerabilities>;
};

/** on_conflict condition type for table "ignored_vulnerabilities" */
export type Ignored_Vulnerabilities_On_Conflict = {
  constraint: Ignored_Vulnerabilities_Constraint;
  update_columns?: Array<Ignored_Vulnerabilities_Update_Column>;
  where?: InputMaybe<Ignored_Vulnerabilities_Bool_Exp>;
};

/** Ordering options when selecting data from "ignored_vulnerabilities". */
export type Ignored_Vulnerabilities_Order_By = {
  creator?: InputMaybe<Identities_Order_By>;
  creator_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locations?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Order_By>;
  project_id?: InputMaybe<Order_By>;
  vulnerability?: InputMaybe<Vulnerabilities_Order_By>;
  vulnerability_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ignored_vulnerabilities */
export type Ignored_Vulnerabilities_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Ignored_Vulnerabilities_Prepend_Input = {
  locations?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "ignored_vulnerabilities" */
export enum Ignored_Vulnerabilities_Select_Column {
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  Id = 'id',
  /** column name */
  Locations = 'locations',
  /** column name */
  Note = 'note',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  VulnerabilityId = 'vulnerability_id'
}

/** input type for updating data in table "ignored_vulnerabilities" */
export type Ignored_Vulnerabilities_Set_Input = {
  locations?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "ignored_vulnerabilities" */
export enum Ignored_Vulnerabilities_Update_Column {
  /** column name */
  Locations = 'locations'
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "manifests" */
export type Manifests = {
  __typename?: 'manifests';
  /** An object relationship */
  build?: Maybe<Builds>;
  build_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamp'];
  filename: Scalars['String'];
  id: Scalars['uuid'];
  message?: Maybe<Scalars['String']>;
  /** An object relationship */
  project: Projects;
  project_id: Scalars['uuid'];
  s3_key: Scalars['String'];
  s3_url: Scalars['String'];
  status?: Maybe<Scalars['String']>;
};

/** order by aggregate values of table "manifests" */
export type Manifests_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Manifests_Max_Order_By>;
  min?: InputMaybe<Manifests_Min_Order_By>;
};

/** input type for inserting array relation for remote table "manifests" */
export type Manifests_Arr_Rel_Insert_Input = {
  data: Array<Manifests_Insert_Input>;
};

/** Boolean expression to filter rows from the table "manifests". All fields are combined with a logical 'AND'. */
export type Manifests_Bool_Exp = {
  _and?: InputMaybe<Array<Manifests_Bool_Exp>>;
  _not?: InputMaybe<Manifests_Bool_Exp>;
  _or?: InputMaybe<Array<Manifests_Bool_Exp>>;
  build?: InputMaybe<Builds_Bool_Exp>;
  build_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  filename?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  project?: InputMaybe<Projects_Bool_Exp>;
  project_id?: InputMaybe<Uuid_Comparison_Exp>;
  s3_key?: InputMaybe<String_Comparison_Exp>;
  s3_url?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "manifests" */
export type Manifests_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  filename?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  project?: InputMaybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: InputMaybe<Scalars['uuid']>;
  s3_key?: InputMaybe<Scalars['String']>;
  s3_url?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "manifests" */
export type Manifests_Max_Order_By = {
  build_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  s3_key?: InputMaybe<Order_By>;
  s3_url?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "manifests" */
export type Manifests_Min_Order_By = {
  build_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  s3_key?: InputMaybe<Order_By>;
  s3_url?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "manifests" */
export type Manifests_Mutation_Response = {
  __typename?: 'manifests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Manifests>;
};

/** Ordering options when selecting data from "manifests". */
export type Manifests_Order_By = {
  build?: InputMaybe<Builds_Order_By>;
  build_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Order_By>;
  project_id?: InputMaybe<Order_By>;
  s3_key?: InputMaybe<Order_By>;
  s3_url?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** select columns of table "manifests" */
export enum Manifests_Select_Column {
  /** column name */
  BuildId = 'build_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  S3Key = 's3_key',
  /** column name */
  S3Url = 's3_url',
  /** column name */
  Status = 'status'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "builds" */
  delete_builds?: Maybe<Builds_Mutation_Response>;
  /** delete single row from the table: "builds" */
  delete_builds_by_pk?: Maybe<Builds>;
  /** delete data from the table: "ignored_vulnerabilities" */
  delete_ignored_vulnerabilities?: Maybe<Ignored_Vulnerabilities_Mutation_Response>;
  /** delete single row from the table: "ignored_vulnerabilities" */
  delete_ignored_vulnerabilities_by_pk?: Maybe<Ignored_Vulnerabilities>;
  /** delete data from the table: "project_access_tokens" */
  delete_project_access_tokens?: Maybe<Project_Access_Tokens_Mutation_Response>;
  /** delete single row from the table: "project_access_tokens" */
  delete_project_access_tokens_by_pk?: Maybe<Project_Access_Tokens>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete single row from the table: "projects" */
  delete_projects_by_pk?: Maybe<Projects>;
  /** insert data into the table: "ignored_vulnerabilities" */
  insert_ignored_vulnerabilities?: Maybe<Ignored_Vulnerabilities_Mutation_Response>;
  /** insert a single row into the table: "ignored_vulnerabilities" */
  insert_ignored_vulnerabilities_one?: Maybe<Ignored_Vulnerabilities>;
  /** insert data into the table: "manifests" */
  insert_manifests?: Maybe<Manifests_Mutation_Response>;
  /** insert a single row into the table: "manifests" */
  insert_manifests_one?: Maybe<Manifests>;
  /** insert data into the table: "organization_user" */
  insert_organization_user?: Maybe<Organization_User_Mutation_Response>;
  /** insert a single row into the table: "organization_user" */
  insert_organization_user_one?: Maybe<Organization_User>;
  /** insert data into the table: "organizations" */
  insert_organizations?: Maybe<Organizations_Mutation_Response>;
  /** insert a single row into the table: "organizations" */
  insert_organizations_one?: Maybe<Organizations>;
  /** insert data into the table: "project_access_tokens" */
  insert_project_access_tokens?: Maybe<Project_Access_Tokens_Mutation_Response>;
  /** insert a single row into the table: "project_access_tokens" */
  insert_project_access_tokens_one?: Maybe<Project_Access_Tokens>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
  /** get s3 presigned url for manifest upload, used only by the frontend */
  presignManifestUpload?: Maybe<PresignedUrlResponse>;
  /** update data of the table: "builds" */
  update_builds?: Maybe<Builds_Mutation_Response>;
  /** update single row of the table: "builds" */
  update_builds_by_pk?: Maybe<Builds>;
  /** update data of the table: "ignored_vulnerabilities" */
  update_ignored_vulnerabilities?: Maybe<Ignored_Vulnerabilities_Mutation_Response>;
  /** update single row of the table: "ignored_vulnerabilities" */
  update_ignored_vulnerabilities_by_pk?: Maybe<Ignored_Vulnerabilities>;
  /** update data of the table: "organization_user" */
  update_organization_user?: Maybe<Organization_User_Mutation_Response>;
  /** update single row of the table: "organization_user" */
  update_organization_user_by_pk?: Maybe<Organization_User>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update single row of the table: "projects" */
  update_projects_by_pk?: Maybe<Projects>;
};


/** mutation root */
export type Mutation_RootDelete_BuildsArgs = {
  where: Builds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Builds_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Ignored_VulnerabilitiesArgs = {
  where: Ignored_Vulnerabilities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ignored_Vulnerabilities_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Project_Access_TokensArgs = {
  where: Project_Access_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_Access_Tokens_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectsArgs = {
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Projects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Ignored_VulnerabilitiesArgs = {
  objects: Array<Ignored_Vulnerabilities_Insert_Input>;
  on_conflict?: InputMaybe<Ignored_Vulnerabilities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ignored_Vulnerabilities_OneArgs = {
  object: Ignored_Vulnerabilities_Insert_Input;
  on_conflict?: InputMaybe<Ignored_Vulnerabilities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ManifestsArgs = {
  objects: Array<Manifests_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Manifests_OneArgs = {
  object: Manifests_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Organization_UserArgs = {
  objects: Array<Organization_User_Insert_Input>;
  on_conflict?: InputMaybe<Organization_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_User_OneArgs = {
  object: Organization_User_Insert_Input;
  on_conflict?: InputMaybe<Organization_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Organizations_OneArgs = {
  object: Organizations_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Project_Access_TokensArgs = {
  objects: Array<Project_Access_Tokens_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Project_Access_Tokens_OneArgs = {
  object: Project_Access_Tokens_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_ProjectsArgs = {
  objects: Array<Projects_Insert_Input>;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Projects_OneArgs = {
  object: Projects_Insert_Input;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootPresignManifestUploadArgs = {
  project_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootUpdate_BuildsArgs = {
  _set?: InputMaybe<Builds_Set_Input>;
  where: Builds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Builds_By_PkArgs = {
  _set?: InputMaybe<Builds_Set_Input>;
  pk_columns: Builds_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ignored_VulnerabilitiesArgs = {
  _append?: InputMaybe<Ignored_Vulnerabilities_Append_Input>;
  _delete_at_path?: InputMaybe<Ignored_Vulnerabilities_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Ignored_Vulnerabilities_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Ignored_Vulnerabilities_Delete_Key_Input>;
  _prepend?: InputMaybe<Ignored_Vulnerabilities_Prepend_Input>;
  _set?: InputMaybe<Ignored_Vulnerabilities_Set_Input>;
  where: Ignored_Vulnerabilities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ignored_Vulnerabilities_By_PkArgs = {
  _append?: InputMaybe<Ignored_Vulnerabilities_Append_Input>;
  _delete_at_path?: InputMaybe<Ignored_Vulnerabilities_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Ignored_Vulnerabilities_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Ignored_Vulnerabilities_Delete_Key_Input>;
  _prepend?: InputMaybe<Ignored_Vulnerabilities_Prepend_Input>;
  _set?: InputMaybe<Ignored_Vulnerabilities_Set_Input>;
  pk_columns: Ignored_Vulnerabilities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_UserArgs = {
  _set?: InputMaybe<Organization_User_Set_Input>;
  where: Organization_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_User_By_PkArgs = {
  _set?: InputMaybe<Organization_User_Set_Input>;
  pk_columns: Organization_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectsArgs = {
  _set?: InputMaybe<Projects_Set_Input>;
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_By_PkArgs = {
  _set?: InputMaybe<Projects_Set_Input>;
  pk_columns: Projects_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/**
 * join table
 *
 *
 * columns and relationships of "organization_user"
 *
 */
export type Organization_User = {
  __typename?: 'organization_user';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  organization: Organizations;
  organization_id: Scalars['uuid'];
  role: Scalars['organization_user_role'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Identities;
  user_id: Scalars['uuid'];
};

/** order by aggregate values of table "organization_user" */
export type Organization_User_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Organization_User_Max_Order_By>;
  min?: InputMaybe<Organization_User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "organization_user" */
export type Organization_User_Arr_Rel_Insert_Input = {
  data: Array<Organization_User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "organization_user". All fields are combined with a logical 'AND'. */
export type Organization_User_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_User_Bool_Exp>>;
  _not?: InputMaybe<Organization_User_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  organization?: InputMaybe<Organizations_Bool_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<Organization_User_Role_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Identities_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_user" */
export enum Organization_User_Constraint {
  /** unique or primary key constraint */
  OrganizationUserPkey = 'organization_user_pkey',
  /** unique or primary key constraint */
  OrganizationUserUserIdOrganizationIdKey = 'organization_user_user_id_organization_id_key'
}

/** input type for inserting data into table "organization_user" */
export type Organization_User_Insert_Input = {
  organization?: InputMaybe<Organizations_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['organization_user_role']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** order by max() on columns of table "organization_user" */
export type Organization_User_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "organization_user" */
export type Organization_User_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "organization_user" */
export type Organization_User_Mutation_Response = {
  __typename?: 'organization_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_User>;
};

/** on_conflict condition type for table "organization_user" */
export type Organization_User_On_Conflict = {
  constraint: Organization_User_Constraint;
  update_columns?: Array<Organization_User_Update_Column>;
  where?: InputMaybe<Organization_User_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_user". */
export type Organization_User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organizations_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Identities_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_user */
export type Organization_User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "organization_user_role". All fields are combined with logical 'AND'. */
export type Organization_User_Role_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['organization_user_role']>;
  _gt?: InputMaybe<Scalars['organization_user_role']>;
  _gte?: InputMaybe<Scalars['organization_user_role']>;
  _in?: InputMaybe<Array<Scalars['organization_user_role']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['organization_user_role']>;
  _lte?: InputMaybe<Scalars['organization_user_role']>;
  _neq?: InputMaybe<Scalars['organization_user_role']>;
  _nin?: InputMaybe<Array<Scalars['organization_user_role']>>;
};

/** select columns of table "organization_user" */
export enum Organization_User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "organization_user" */
export type Organization_User_Set_Input = {
  role?: InputMaybe<Scalars['organization_user_role']>;
};

/** update columns of table "organization_user" */
export enum Organization_User_Update_Column {
  /** column name */
  Role = 'role'
}

/** columns and relationships of "organizations" */
export type Organizations = {
  __typename?: 'organizations';
  createdAt: Scalars['timestamp'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  organization_users: Array<Organization_User>;
  /** An array relationship */
  projects: Array<Projects>;
  settings_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "organizations" */
export type OrganizationsOrganization_UsersArgs = {
  distinct_on?: InputMaybe<Array<Organization_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_User_Order_By>>;
  where?: InputMaybe<Organization_User_Bool_Exp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: InputMaybe<Array<Organizations_Bool_Exp>>;
  _not?: InputMaybe<Organizations_Bool_Exp>;
  _or?: InputMaybe<Array<Organizations_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organization_users?: InputMaybe<Organization_User_Bool_Exp>;
  projects?: InputMaybe<Projects_Bool_Exp>;
  settings_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "organizations" */
export type Organizations_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
  organization_users?: InputMaybe<Organization_User_Arr_Rel_Insert_Input>;
  projects?: InputMaybe<Projects_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "organizations" */
export type Organizations_Mutation_Response = {
  __typename?: 'organizations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type Organizations_Obj_Rel_Insert_Input = {
  data: Organizations_Insert_Input;
};

/** Ordering options when selecting data from "organizations". */
export type Organizations_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization_users_aggregate?: InputMaybe<Organization_User_Aggregate_Order_By>;
  projects_aggregate?: InputMaybe<Projects_Aggregate_Order_By>;
  settings_id?: InputMaybe<Order_By>;
};

/** select columns of table "organizations" */
export enum Organizations_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SettingsId = 'settings_id'
}

/** columns and relationships of "package_versions" */
export type Package_Versions = {
  __typename?: 'package_versions';
  cpes: Scalars['_text'];
  /** An array relationship */
  findings: Array<Findings>;
  /** An aggregate relationship */
  findings_aggregate: Findings_Aggregate;
  fix_state: Scalars['String'];
  fixed_in_versions: Scalars['_text'];
  id: Scalars['uuid'];
  pkg_slug: Scalars['String'];
  slug: Scalars['String'];
  version_constraint: Scalars['String'];
  version_format: Scalars['String'];
  /** An object relationship */
  vulnerability_package: Vulnerability_Packages;
};


/** columns and relationships of "package_versions" */
export type Package_VersionsFindingsArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};


/** columns and relationships of "package_versions" */
export type Package_VersionsFindings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};

/** order by aggregate values of table "package_versions" */
export type Package_Versions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Package_Versions_Max_Order_By>;
  min?: InputMaybe<Package_Versions_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "package_versions". All fields are combined with a logical 'AND'. */
export type Package_Versions_Bool_Exp = {
  _and?: InputMaybe<Array<Package_Versions_Bool_Exp>>;
  _not?: InputMaybe<Package_Versions_Bool_Exp>;
  _or?: InputMaybe<Array<Package_Versions_Bool_Exp>>;
  cpes?: InputMaybe<_Text_Comparison_Exp>;
  findings?: InputMaybe<Findings_Bool_Exp>;
  fix_state?: InputMaybe<String_Comparison_Exp>;
  fixed_in_versions?: InputMaybe<_Text_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  pkg_slug?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  version_constraint?: InputMaybe<String_Comparison_Exp>;
  version_format?: InputMaybe<String_Comparison_Exp>;
  vulnerability_package?: InputMaybe<Vulnerability_Packages_Bool_Exp>;
};

/** order by max() on columns of table "package_versions" */
export type Package_Versions_Max_Order_By = {
  fix_state?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pkg_slug?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  version_constraint?: InputMaybe<Order_By>;
  version_format?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "package_versions" */
export type Package_Versions_Min_Order_By = {
  fix_state?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pkg_slug?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  version_constraint?: InputMaybe<Order_By>;
  version_format?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "package_versions". */
export type Package_Versions_Order_By = {
  cpes?: InputMaybe<Order_By>;
  findings_aggregate?: InputMaybe<Findings_Aggregate_Order_By>;
  fix_state?: InputMaybe<Order_By>;
  fixed_in_versions?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pkg_slug?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  version_constraint?: InputMaybe<Order_By>;
  version_format?: InputMaybe<Order_By>;
  vulnerability_package?: InputMaybe<Vulnerability_Packages_Order_By>;
};

/** select columns of table "package_versions" */
export enum Package_Versions_Select_Column {
  /** column name */
  Cpes = 'cpes',
  /** column name */
  FixState = 'fix_state',
  /** column name */
  FixedInVersions = 'fixed_in_versions',
  /** column name */
  Id = 'id',
  /** column name */
  PkgSlug = 'pkg_slug',
  /** column name */
  Slug = 'slug',
  /** column name */
  VersionConstraint = 'version_constraint',
  /** column name */
  VersionFormat = 'version_format'
}

/** columns and relationships of "project_access_tokens" */
export type Project_Access_Tokens = {
  __typename?: 'project_access_tokens';
  created_at: Scalars['timestamp'];
  /** An object relationship */
  created_by_user?: Maybe<Identities>;
  created_by_user_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  last_used?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  project: Projects;
  project_uuid: Scalars['uuid'];
};

/** order by aggregate values of table "project_access_tokens" */
export type Project_Access_Tokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Project_Access_Tokens_Max_Order_By>;
  min?: InputMaybe<Project_Access_Tokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "project_access_tokens" */
export type Project_Access_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Project_Access_Tokens_Insert_Input>;
};

/** Boolean expression to filter rows from the table "project_access_tokens". All fields are combined with a logical 'AND'. */
export type Project_Access_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Access_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Project_Access_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Access_Tokens_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by_user?: InputMaybe<Identities_Bool_Exp>;
  created_by_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_used?: InputMaybe<Timestamp_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  project?: InputMaybe<Projects_Bool_Exp>;
  project_uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "project_access_tokens" */
export type Project_Access_Tokens_Insert_Input = {
  access_token?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<Projects_Obj_Rel_Insert_Input>;
  project_uuid?: InputMaybe<Scalars['uuid']>;
};

/** order by max() on columns of table "project_access_tokens" */
export type Project_Access_Tokens_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_uuid?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "project_access_tokens" */
export type Project_Access_Tokens_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "project_access_tokens" */
export type Project_Access_Tokens_Mutation_Response = {
  __typename?: 'project_access_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project_Access_Tokens>;
};

/** Ordering options when selecting data from "project_access_tokens". */
export type Project_Access_Tokens_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by_user?: InputMaybe<Identities_Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Order_By>;
  project_uuid?: InputMaybe<Order_By>;
};

/** select columns of table "project_access_tokens" */
export enum Project_Access_Tokens_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastUsed = 'last_used',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectUuid = 'project_uuid'
}

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'projects';
  /** An array relationship */
  builds: Array<Builds>;
  created_at: Scalars['timestamp'];
  /** fetch data from the table: "github_repositories" */
  github_repositories: Array<Github_Repositories>;
  /** An object relationship */
  github_repository?: Maybe<Github_Repositories>;
  id: Scalars['uuid'];
  /** An array relationship */
  ignored_vulnerabilities: Array<Ignored_Vulnerabilities>;
  /** An array relationship */
  manifests: Array<Manifests>;
  name: Scalars['String'];
  /** An object relationship */
  organization?: Maybe<Organizations>;
  organization_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  project_access_tokens: Array<Project_Access_Tokens>;
  repo?: Maybe<Scalars['String']>;
  /** An array relationship */
  reports: Array<Project_Access_Tokens>;
  settings_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "projects" */
export type ProjectsBuildsArgs = {
  distinct_on?: InputMaybe<Array<Builds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Builds_Order_By>>;
  where?: InputMaybe<Builds_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsGithub_RepositoriesArgs = {
  distinct_on?: InputMaybe<Array<Github_Repositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Github_Repositories_Order_By>>;
  where?: InputMaybe<Github_Repositories_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsIgnored_VulnerabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Ignored_Vulnerabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ignored_Vulnerabilities_Order_By>>;
  where?: InputMaybe<Ignored_Vulnerabilities_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsManifestsArgs = {
  distinct_on?: InputMaybe<Array<Manifests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Manifests_Order_By>>;
  where?: InputMaybe<Manifests_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsProject_Access_TokensArgs = {
  distinct_on?: InputMaybe<Array<Project_Access_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Access_Tokens_Order_By>>;
  where?: InputMaybe<Project_Access_Tokens_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsReportsArgs = {
  distinct_on?: InputMaybe<Array<Project_Access_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Access_Tokens_Order_By>>;
  where?: InputMaybe<Project_Access_Tokens_Bool_Exp>;
};

/** order by aggregate values of table "projects" */
export type Projects_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Projects_Max_Order_By>;
  min?: InputMaybe<Projects_Min_Order_By>;
};

/** input type for inserting array relation for remote table "projects" */
export type Projects_Arr_Rel_Insert_Input = {
  data: Array<Projects_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: InputMaybe<Array<Projects_Bool_Exp>>;
  _not?: InputMaybe<Projects_Bool_Exp>;
  _or?: InputMaybe<Array<Projects_Bool_Exp>>;
  builds?: InputMaybe<Builds_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  github_repositories?: InputMaybe<Github_Repositories_Bool_Exp>;
  github_repository?: InputMaybe<Github_Repositories_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ignored_vulnerabilities?: InputMaybe<Ignored_Vulnerabilities_Bool_Exp>;
  manifests?: InputMaybe<Manifests_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<Organizations_Bool_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  project_access_tokens?: InputMaybe<Project_Access_Tokens_Bool_Exp>;
  repo?: InputMaybe<String_Comparison_Exp>;
  reports?: InputMaybe<Project_Access_Tokens_Bool_Exp>;
  settings_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint */
  ProjectsNameOrganizationIdKey = 'projects_name_organization_id_key',
  /** unique or primary key constraint */
  ProjectsPkey = 'projects_pkey'
}

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  ignored_vulnerabilities?: InputMaybe<Ignored_Vulnerabilities_Arr_Rel_Insert_Input>;
  manifests?: InputMaybe<Manifests_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Organizations_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['uuid']>;
  project_access_tokens?: InputMaybe<Project_Access_Tokens_Arr_Rel_Insert_Input>;
  repo?: InputMaybe<Scalars['String']>;
  reports?: InputMaybe<Project_Access_Tokens_Arr_Rel_Insert_Input>;
};

/** order by max() on columns of table "projects" */
export type Projects_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  repo?: InputMaybe<Order_By>;
  settings_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "projects" */
export type Projects_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  repo?: InputMaybe<Order_By>;
  settings_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "projects" */
export type Projects_Mutation_Response = {
  __typename?: 'projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Projects>;
};

/** input type for inserting object relation for remote table "projects" */
export type Projects_Obj_Rel_Insert_Input = {
  data: Projects_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};

/** on_conflict condition type for table "projects" */
export type Projects_On_Conflict = {
  constraint: Projects_Constraint;
  update_columns?: Array<Projects_Update_Column>;
  where?: InputMaybe<Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "projects". */
export type Projects_Order_By = {
  builds_aggregate?: InputMaybe<Builds_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  github_repositories_aggregate?: InputMaybe<Github_Repositories_Aggregate_Order_By>;
  github_repository?: InputMaybe<Github_Repositories_Order_By>;
  id?: InputMaybe<Order_By>;
  ignored_vulnerabilities_aggregate?: InputMaybe<Ignored_Vulnerabilities_Aggregate_Order_By>;
  manifests_aggregate?: InputMaybe<Manifests_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organizations_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  project_access_tokens_aggregate?: InputMaybe<Project_Access_Tokens_Aggregate_Order_By>;
  repo?: InputMaybe<Order_By>;
  reports_aggregate?: InputMaybe<Project_Access_Tokens_Aggregate_Order_By>;
  settings_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: projects */
export type Projects_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Repo = 'repo',
  /** column name */
  SettingsId = 'settings_id'
}

/** input type for updating data in table "projects" */
export type Projects_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
  repo?: InputMaybe<Scalars['String']>;
};

/** update columns of table "projects" */
export enum Projects_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Repo = 'repo'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  builds: Array<Builds>;
  /** fetch data from the table: "builds" using primary key columns */
  builds_by_pk?: Maybe<Builds>;
  /** An array relationship */
  findings: Array<Findings>;
  /** An aggregate relationship */
  findings_aggregate: Findings_Aggregate;
  /** fetch data from the table: "findings" using primary key columns */
  findings_by_pk?: Maybe<Findings>;
  /** fetch data from the table: "github_repositories" */
  github_repositories: Array<Github_Repositories>;
  /** fetch data from the table: "github_repositories" using primary key columns */
  github_repositories_by_pk?: Maybe<Github_Repositories>;
  /** fetch data from the table: "identities" */
  identities: Array<Identities>;
  /** An array relationship */
  ignored_vulnerabilities: Array<Ignored_Vulnerabilities>;
  /** fetch data from the table: "ignored_vulnerabilities" using primary key columns */
  ignored_vulnerabilities_by_pk?: Maybe<Ignored_Vulnerabilities>;
  /** An array relationship */
  manifests: Array<Manifests>;
  /** fetch data from the table: "manifests" using primary key columns */
  manifests_by_pk?: Maybe<Manifests>;
  /** fetch data from the table: "organization_user" */
  organization_user: Array<Organization_User>;
  /** fetch data from the table: "organization_user" using primary key columns */
  organization_user_by_pk?: Maybe<Organization_User>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** An array relationship */
  package_versions: Array<Package_Versions>;
  /** fetch data from the table: "package_versions" using primary key columns */
  package_versions_by_pk?: Maybe<Package_Versions>;
  /** An array relationship */
  project_access_tokens: Array<Project_Access_Tokens>;
  /** fetch data from the table: "project_access_tokens" using primary key columns */
  project_access_tokens_by_pk?: Maybe<Project_Access_Tokens>;
  /** An array relationship */
  projects: Array<Projects>;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** An array relationship */
  related_vulnerabilities: Array<Related_Vulnerabilities>;
  /** fetch data from the table: "related_vulnerabilities" using primary key columns */
  related_vulnerabilities_by_pk?: Maybe<Related_Vulnerabilities>;
  /** An array relationship */
  scans: Array<Scans>;
  /** An aggregate relationship */
  scans_aggregate: Scans_Aggregate;
  /** fetch data from the table: "scans" using primary key columns */
  scans_by_pk?: Maybe<Scans>;
  /** fetch data from the table: "vulnerabilities" */
  vulnerabilities: Array<Vulnerabilities>;
  /** fetch data from the table: "vulnerabilities" using primary key columns */
  vulnerabilities_by_pk?: Maybe<Vulnerabilities>;
  /** An array relationship */
  vulnerability_packages: Array<Vulnerability_Packages>;
  /** fetch data from the table: "vulnerability_packages" using primary key columns */
  vulnerability_packages_by_pk?: Maybe<Vulnerability_Packages>;
};


export type Query_RootBuildsArgs = {
  distinct_on?: InputMaybe<Array<Builds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Builds_Order_By>>;
  where?: InputMaybe<Builds_Bool_Exp>;
};


export type Query_RootBuilds_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFindingsArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};


export type Query_RootFindings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};


export type Query_RootFindings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGithub_RepositoriesArgs = {
  distinct_on?: InputMaybe<Array<Github_Repositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Github_Repositories_Order_By>>;
  where?: InputMaybe<Github_Repositories_Bool_Exp>;
};


export type Query_RootGithub_Repositories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootIdentitiesArgs = {
  distinct_on?: InputMaybe<Array<Identities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Identities_Order_By>>;
  where?: InputMaybe<Identities_Bool_Exp>;
};


export type Query_RootIgnored_VulnerabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Ignored_Vulnerabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ignored_Vulnerabilities_Order_By>>;
  where?: InputMaybe<Ignored_Vulnerabilities_Bool_Exp>;
};


export type Query_RootIgnored_Vulnerabilities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootManifestsArgs = {
  distinct_on?: InputMaybe<Array<Manifests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Manifests_Order_By>>;
  where?: InputMaybe<Manifests_Bool_Exp>;
};


export type Query_RootManifests_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrganization_UserArgs = {
  distinct_on?: InputMaybe<Array<Organization_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_User_Order_By>>;
  where?: InputMaybe<Organization_User_Bool_Exp>;
};


export type Query_RootOrganization_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPackage_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Package_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Package_Versions_Order_By>>;
  where?: InputMaybe<Package_Versions_Bool_Exp>;
};


export type Query_RootPackage_Versions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProject_Access_TokensArgs = {
  distinct_on?: InputMaybe<Array<Project_Access_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Access_Tokens_Order_By>>;
  where?: InputMaybe<Project_Access_Tokens_Bool_Exp>;
};


export type Query_RootProject_Access_Tokens_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRelated_VulnerabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Related_Vulnerabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Related_Vulnerabilities_Order_By>>;
  where?: InputMaybe<Related_Vulnerabilities_Bool_Exp>;
};


export type Query_RootRelated_Vulnerabilities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootScansArgs = {
  distinct_on?: InputMaybe<Array<Scans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scans_Order_By>>;
  where?: InputMaybe<Scans_Bool_Exp>;
};


export type Query_RootScans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scans_Order_By>>;
  where?: InputMaybe<Scans_Bool_Exp>;
};


export type Query_RootScans_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVulnerabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Vulnerabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vulnerabilities_Order_By>>;
  where?: InputMaybe<Vulnerabilities_Bool_Exp>;
};


export type Query_RootVulnerabilities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVulnerability_PackagesArgs = {
  distinct_on?: InputMaybe<Array<Vulnerability_Packages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vulnerability_Packages_Order_By>>;
  where?: InputMaybe<Vulnerability_Packages_Bool_Exp>;
};


export type Query_RootVulnerability_Packages_By_PkArgs = {
  id: Scalars['uuid'];
};

/**
 * join table for adding holding additional vulns on a finding
 *
 *
 * columns and relationships of "related_vulnerabilities"
 *
 */
export type Related_Vulnerabilities = {
  __typename?: 'related_vulnerabilities';
  id: Scalars['uuid'];
  /** An object relationship */
  parent: Vulnerabilities;
  related_vulnerability_slug: Scalars['String'];
  /** An object relationship */
  vulnerability: Vulnerabilities;
  /** An object relationship */
  vulnerabilityByVulnerabilitySlug: Vulnerabilities;
  vulnerability_slug: Scalars['String'];
};

/** order by aggregate values of table "related_vulnerabilities" */
export type Related_Vulnerabilities_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Related_Vulnerabilities_Max_Order_By>;
  min?: InputMaybe<Related_Vulnerabilities_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "related_vulnerabilities". All fields are combined with a logical 'AND'. */
export type Related_Vulnerabilities_Bool_Exp = {
  _and?: InputMaybe<Array<Related_Vulnerabilities_Bool_Exp>>;
  _not?: InputMaybe<Related_Vulnerabilities_Bool_Exp>;
  _or?: InputMaybe<Array<Related_Vulnerabilities_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  parent?: InputMaybe<Vulnerabilities_Bool_Exp>;
  related_vulnerability_slug?: InputMaybe<String_Comparison_Exp>;
  vulnerability?: InputMaybe<Vulnerabilities_Bool_Exp>;
  vulnerabilityByVulnerabilitySlug?: InputMaybe<Vulnerabilities_Bool_Exp>;
  vulnerability_slug?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "related_vulnerabilities" */
export type Related_Vulnerabilities_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  related_vulnerability_slug?: InputMaybe<Order_By>;
  vulnerability_slug?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "related_vulnerabilities" */
export type Related_Vulnerabilities_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  related_vulnerability_slug?: InputMaybe<Order_By>;
  vulnerability_slug?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "related_vulnerabilities". */
export type Related_Vulnerabilities_Order_By = {
  id?: InputMaybe<Order_By>;
  parent?: InputMaybe<Vulnerabilities_Order_By>;
  related_vulnerability_slug?: InputMaybe<Order_By>;
  vulnerability?: InputMaybe<Vulnerabilities_Order_By>;
  vulnerabilityByVulnerabilitySlug?: InputMaybe<Vulnerabilities_Order_By>;
  vulnerability_slug?: InputMaybe<Order_By>;
};

/** select columns of table "related_vulnerabilities" */
export enum Related_Vulnerabilities_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RelatedVulnerabilitySlug = 'related_vulnerability_slug',
  /** column name */
  VulnerabilitySlug = 'vulnerability_slug'
}

/**
 * An individual time a scan was run on a build
 *
 *
 * columns and relationships of "scans"
 *
 */
export type Scans = {
  __typename?: 'scans';
  /** An object relationship */
  build: Builds;
  build_id: Scalars['uuid'];
  created_at: Scalars['timestamp'];
  db_date: Scalars['date'];
  distro_name: Scalars['String'];
  distro_version: Scalars['String'];
  /** An array relationship */
  findings: Array<Findings>;
  /** An aggregate relationship */
  findings_aggregate: Findings_Aggregate;
  grype_version: Scalars['String'];
  id: Scalars['uuid'];
  scan_number?: Maybe<Scalars['Int']>;
  source_type: Scalars['String'];
  target: Scalars['String'];
};


/**
 * An individual time a scan was run on a build
 *
 *
 * columns and relationships of "scans"
 *
 */
export type ScansFindingsArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};


/**
 * An individual time a scan was run on a build
 *
 *
 * columns and relationships of "scans"
 *
 */
export type ScansFindings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};

/** aggregated selection of "scans" */
export type Scans_Aggregate = {
  __typename?: 'scans_aggregate';
  aggregate?: Maybe<Scans_Aggregate_Fields>;
  nodes: Array<Scans>;
};

/** aggregate fields of "scans" */
export type Scans_Aggregate_Fields = {
  __typename?: 'scans_aggregate_fields';
  avg?: Maybe<Scans_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Scans_Max_Fields>;
  min?: Maybe<Scans_Min_Fields>;
  stddev?: Maybe<Scans_Stddev_Fields>;
  stddev_pop?: Maybe<Scans_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Scans_Stddev_Samp_Fields>;
  sum?: Maybe<Scans_Sum_Fields>;
  var_pop?: Maybe<Scans_Var_Pop_Fields>;
  var_samp?: Maybe<Scans_Var_Samp_Fields>;
  variance?: Maybe<Scans_Variance_Fields>;
};


/** aggregate fields of "scans" */
export type Scans_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Scans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "scans" */
export type Scans_Aggregate_Order_By = {
  avg?: InputMaybe<Scans_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Scans_Max_Order_By>;
  min?: InputMaybe<Scans_Min_Order_By>;
  stddev?: InputMaybe<Scans_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Scans_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Scans_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Scans_Sum_Order_By>;
  var_pop?: InputMaybe<Scans_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Scans_Var_Samp_Order_By>;
  variance?: InputMaybe<Scans_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Scans_Avg_Fields = {
  __typename?: 'scans_avg_fields';
  scan_number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "scans" */
export type Scans_Avg_Order_By = {
  scan_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "scans". All fields are combined with a logical 'AND'. */
export type Scans_Bool_Exp = {
  _and?: InputMaybe<Array<Scans_Bool_Exp>>;
  _not?: InputMaybe<Scans_Bool_Exp>;
  _or?: InputMaybe<Array<Scans_Bool_Exp>>;
  build?: InputMaybe<Builds_Bool_Exp>;
  build_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  db_date?: InputMaybe<Date_Comparison_Exp>;
  distro_name?: InputMaybe<String_Comparison_Exp>;
  distro_version?: InputMaybe<String_Comparison_Exp>;
  findings?: InputMaybe<Findings_Bool_Exp>;
  grype_version?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  scan_number?: InputMaybe<Int_Comparison_Exp>;
  source_type?: InputMaybe<String_Comparison_Exp>;
  target?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Scans_Max_Fields = {
  __typename?: 'scans_max_fields';
  build_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  db_date?: Maybe<Scalars['date']>;
  distro_name?: Maybe<Scalars['String']>;
  distro_version?: Maybe<Scalars['String']>;
  grype_version?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  scan_number?: Maybe<Scalars['Int']>;
  source_type?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "scans" */
export type Scans_Max_Order_By = {
  build_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  db_date?: InputMaybe<Order_By>;
  distro_name?: InputMaybe<Order_By>;
  distro_version?: InputMaybe<Order_By>;
  grype_version?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scan_number?: InputMaybe<Order_By>;
  source_type?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Scans_Min_Fields = {
  __typename?: 'scans_min_fields';
  build_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  db_date?: Maybe<Scalars['date']>;
  distro_name?: Maybe<Scalars['String']>;
  distro_version?: Maybe<Scalars['String']>;
  grype_version?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  scan_number?: Maybe<Scalars['Int']>;
  source_type?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "scans" */
export type Scans_Min_Order_By = {
  build_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  db_date?: InputMaybe<Order_By>;
  distro_name?: InputMaybe<Order_By>;
  distro_version?: InputMaybe<Order_By>;
  grype_version?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scan_number?: InputMaybe<Order_By>;
  source_type?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "scans". */
export type Scans_Order_By = {
  build?: InputMaybe<Builds_Order_By>;
  build_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  db_date?: InputMaybe<Order_By>;
  distro_name?: InputMaybe<Order_By>;
  distro_version?: InputMaybe<Order_By>;
  findings_aggregate?: InputMaybe<Findings_Aggregate_Order_By>;
  grype_version?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scan_number?: InputMaybe<Order_By>;
  source_type?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
};

/** select columns of table "scans" */
export enum Scans_Select_Column {
  /** column name */
  BuildId = 'build_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DbDate = 'db_date',
  /** column name */
  DistroName = 'distro_name',
  /** column name */
  DistroVersion = 'distro_version',
  /** column name */
  GrypeVersion = 'grype_version',
  /** column name */
  Id = 'id',
  /** column name */
  ScanNumber = 'scan_number',
  /** column name */
  SourceType = 'source_type',
  /** column name */
  Target = 'target'
}

/** aggregate stddev on columns */
export type Scans_Stddev_Fields = {
  __typename?: 'scans_stddev_fields';
  scan_number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "scans" */
export type Scans_Stddev_Order_By = {
  scan_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Scans_Stddev_Pop_Fields = {
  __typename?: 'scans_stddev_pop_fields';
  scan_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "scans" */
export type Scans_Stddev_Pop_Order_By = {
  scan_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Scans_Stddev_Samp_Fields = {
  __typename?: 'scans_stddev_samp_fields';
  scan_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "scans" */
export type Scans_Stddev_Samp_Order_By = {
  scan_number?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Scans_Sum_Fields = {
  __typename?: 'scans_sum_fields';
  scan_number?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "scans" */
export type Scans_Sum_Order_By = {
  scan_number?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Scans_Var_Pop_Fields = {
  __typename?: 'scans_var_pop_fields';
  scan_number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "scans" */
export type Scans_Var_Pop_Order_By = {
  scan_number?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Scans_Var_Samp_Fields = {
  __typename?: 'scans_var_samp_fields';
  scan_number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "scans" */
export type Scans_Var_Samp_Order_By = {
  scan_number?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Scans_Variance_Fields = {
  __typename?: 'scans_variance_fields';
  scan_number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "scans" */
export type Scans_Variance_Order_By = {
  scan_number?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "severity_enum". All fields are combined with logical 'AND'. */
export type Severity_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['severity_enum']>;
  _gt?: InputMaybe<Scalars['severity_enum']>;
  _gte?: InputMaybe<Scalars['severity_enum']>;
  _in?: InputMaybe<Array<Scalars['severity_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['severity_enum']>;
  _lte?: InputMaybe<Scalars['severity_enum']>;
  _neq?: InputMaybe<Scalars['severity_enum']>;
  _nin?: InputMaybe<Array<Scalars['severity_enum']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  builds: Array<Builds>;
  /** fetch data from the table: "builds" using primary key columns */
  builds_by_pk?: Maybe<Builds>;
  /** An array relationship */
  findings: Array<Findings>;
  /** An aggregate relationship */
  findings_aggregate: Findings_Aggregate;
  /** fetch data from the table: "findings" using primary key columns */
  findings_by_pk?: Maybe<Findings>;
  /** fetch data from the table: "github_repositories" */
  github_repositories: Array<Github_Repositories>;
  /** fetch data from the table: "github_repositories" using primary key columns */
  github_repositories_by_pk?: Maybe<Github_Repositories>;
  /** fetch data from the table: "identities" */
  identities: Array<Identities>;
  /** An array relationship */
  ignored_vulnerabilities: Array<Ignored_Vulnerabilities>;
  /** fetch data from the table: "ignored_vulnerabilities" using primary key columns */
  ignored_vulnerabilities_by_pk?: Maybe<Ignored_Vulnerabilities>;
  /** An array relationship */
  manifests: Array<Manifests>;
  /** fetch data from the table: "manifests" using primary key columns */
  manifests_by_pk?: Maybe<Manifests>;
  /** fetch data from the table: "organization_user" */
  organization_user: Array<Organization_User>;
  /** fetch data from the table: "organization_user" using primary key columns */
  organization_user_by_pk?: Maybe<Organization_User>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** An array relationship */
  package_versions: Array<Package_Versions>;
  /** fetch data from the table: "package_versions" using primary key columns */
  package_versions_by_pk?: Maybe<Package_Versions>;
  /** An array relationship */
  project_access_tokens: Array<Project_Access_Tokens>;
  /** fetch data from the table: "project_access_tokens" using primary key columns */
  project_access_tokens_by_pk?: Maybe<Project_Access_Tokens>;
  /** An array relationship */
  projects: Array<Projects>;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** An array relationship */
  related_vulnerabilities: Array<Related_Vulnerabilities>;
  /** fetch data from the table: "related_vulnerabilities" using primary key columns */
  related_vulnerabilities_by_pk?: Maybe<Related_Vulnerabilities>;
  /** An array relationship */
  scans: Array<Scans>;
  /** An aggregate relationship */
  scans_aggregate: Scans_Aggregate;
  /** fetch data from the table: "scans" using primary key columns */
  scans_by_pk?: Maybe<Scans>;
  /** fetch data from the table: "vulnerabilities" */
  vulnerabilities: Array<Vulnerabilities>;
  /** fetch data from the table: "vulnerabilities" using primary key columns */
  vulnerabilities_by_pk?: Maybe<Vulnerabilities>;
  /** An array relationship */
  vulnerability_packages: Array<Vulnerability_Packages>;
  /** fetch data from the table: "vulnerability_packages" using primary key columns */
  vulnerability_packages_by_pk?: Maybe<Vulnerability_Packages>;
};


export type Subscription_RootBuildsArgs = {
  distinct_on?: InputMaybe<Array<Builds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Builds_Order_By>>;
  where?: InputMaybe<Builds_Bool_Exp>;
};


export type Subscription_RootBuilds_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFindingsArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};


export type Subscription_RootFindings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};


export type Subscription_RootFindings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGithub_RepositoriesArgs = {
  distinct_on?: InputMaybe<Array<Github_Repositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Github_Repositories_Order_By>>;
  where?: InputMaybe<Github_Repositories_Bool_Exp>;
};


export type Subscription_RootGithub_Repositories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootIdentitiesArgs = {
  distinct_on?: InputMaybe<Array<Identities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Identities_Order_By>>;
  where?: InputMaybe<Identities_Bool_Exp>;
};


export type Subscription_RootIgnored_VulnerabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Ignored_Vulnerabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ignored_Vulnerabilities_Order_By>>;
  where?: InputMaybe<Ignored_Vulnerabilities_Bool_Exp>;
};


export type Subscription_RootIgnored_Vulnerabilities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootManifestsArgs = {
  distinct_on?: InputMaybe<Array<Manifests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Manifests_Order_By>>;
  where?: InputMaybe<Manifests_Bool_Exp>;
};


export type Subscription_RootManifests_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrganization_UserArgs = {
  distinct_on?: InputMaybe<Array<Organization_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_User_Order_By>>;
  where?: InputMaybe<Organization_User_Bool_Exp>;
};


export type Subscription_RootOrganization_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPackage_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Package_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Package_Versions_Order_By>>;
  where?: InputMaybe<Package_Versions_Bool_Exp>;
};


export type Subscription_RootPackage_Versions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProject_Access_TokensArgs = {
  distinct_on?: InputMaybe<Array<Project_Access_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Access_Tokens_Order_By>>;
  where?: InputMaybe<Project_Access_Tokens_Bool_Exp>;
};


export type Subscription_RootProject_Access_Tokens_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRelated_VulnerabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Related_Vulnerabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Related_Vulnerabilities_Order_By>>;
  where?: InputMaybe<Related_Vulnerabilities_Bool_Exp>;
};


export type Subscription_RootRelated_Vulnerabilities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootScansArgs = {
  distinct_on?: InputMaybe<Array<Scans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scans_Order_By>>;
  where?: InputMaybe<Scans_Bool_Exp>;
};


export type Subscription_RootScans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scans_Order_By>>;
  where?: InputMaybe<Scans_Bool_Exp>;
};


export type Subscription_RootScans_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVulnerabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Vulnerabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vulnerabilities_Order_By>>;
  where?: InputMaybe<Vulnerabilities_Bool_Exp>;
};


export type Subscription_RootVulnerabilities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVulnerability_PackagesArgs = {
  distinct_on?: InputMaybe<Array<Vulnerability_Packages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vulnerability_Packages_Order_By>>;
  where?: InputMaybe<Vulnerability_Packages_Bool_Exp>;
};


export type Subscription_RootVulnerability_Packages_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "vulnerabilities" */
export type Vulnerabilities = {
  __typename?: 'vulnerabilities';
  created_at: Scalars['timestamp'];
  cvss_exploitability_score?: Maybe<Scalars['numeric']>;
  cvss_impact_score?: Maybe<Scalars['numeric']>;
  cvss_inferred?: Maybe<Scalars['Boolean']>;
  cvss_score?: Maybe<Scalars['numeric']>;
  cvss_version?: Maybe<Scalars['String']>;
  data_source: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  findings: Array<Findings>;
  /** An aggregate relationship */
  findings_aggregate: Findings_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  ignored_vulnerabilities: Array<Ignored_Vulnerabilities>;
  name: Scalars['String'];
  namespace: Scalars['String'];
  record_source?: Maybe<Scalars['String']>;
  /** An array relationship */
  related_vulnerabilities: Array<Related_Vulnerabilities>;
  /** An array relationship */
  reverse_related_vulnerabilities: Array<Related_Vulnerabilities>;
  severity: Scalars['severity_enum'];
  slug: Scalars['String'];
  topic_id?: Maybe<Scalars['uuid']>;
  urls?: Maybe<Scalars['_text']>;
  /** An array relationship */
  vulnerability_packages: Array<Vulnerability_Packages>;
};


/** columns and relationships of "vulnerabilities" */
export type VulnerabilitiesFindingsArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};


/** columns and relationships of "vulnerabilities" */
export type VulnerabilitiesFindings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};


/** columns and relationships of "vulnerabilities" */
export type VulnerabilitiesIgnored_VulnerabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Ignored_Vulnerabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ignored_Vulnerabilities_Order_By>>;
  where?: InputMaybe<Ignored_Vulnerabilities_Bool_Exp>;
};


/** columns and relationships of "vulnerabilities" */
export type VulnerabilitiesRelated_VulnerabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Related_Vulnerabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Related_Vulnerabilities_Order_By>>;
  where?: InputMaybe<Related_Vulnerabilities_Bool_Exp>;
};


/** columns and relationships of "vulnerabilities" */
export type VulnerabilitiesReverse_Related_VulnerabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Related_Vulnerabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Related_Vulnerabilities_Order_By>>;
  where?: InputMaybe<Related_Vulnerabilities_Bool_Exp>;
};


/** columns and relationships of "vulnerabilities" */
export type VulnerabilitiesVulnerability_PackagesArgs = {
  distinct_on?: InputMaybe<Array<Vulnerability_Packages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vulnerability_Packages_Order_By>>;
  where?: InputMaybe<Vulnerability_Packages_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "vulnerabilities". All fields are combined with a logical 'AND'. */
export type Vulnerabilities_Bool_Exp = {
  _and?: InputMaybe<Array<Vulnerabilities_Bool_Exp>>;
  _not?: InputMaybe<Vulnerabilities_Bool_Exp>;
  _or?: InputMaybe<Array<Vulnerabilities_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  cvss_exploitability_score?: InputMaybe<Numeric_Comparison_Exp>;
  cvss_impact_score?: InputMaybe<Numeric_Comparison_Exp>;
  cvss_inferred?: InputMaybe<Boolean_Comparison_Exp>;
  cvss_score?: InputMaybe<Numeric_Comparison_Exp>;
  cvss_version?: InputMaybe<String_Comparison_Exp>;
  data_source?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  findings?: InputMaybe<Findings_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ignored_vulnerabilities?: InputMaybe<Ignored_Vulnerabilities_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  namespace?: InputMaybe<String_Comparison_Exp>;
  record_source?: InputMaybe<String_Comparison_Exp>;
  related_vulnerabilities?: InputMaybe<Related_Vulnerabilities_Bool_Exp>;
  reverse_related_vulnerabilities?: InputMaybe<Related_Vulnerabilities_Bool_Exp>;
  severity?: InputMaybe<Severity_Enum_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  topic_id?: InputMaybe<Uuid_Comparison_Exp>;
  urls?: InputMaybe<_Text_Comparison_Exp>;
  vulnerability_packages?: InputMaybe<Vulnerability_Packages_Bool_Exp>;
};

/** Ordering options when selecting data from "vulnerabilities". */
export type Vulnerabilities_Order_By = {
  created_at?: InputMaybe<Order_By>;
  cvss_exploitability_score?: InputMaybe<Order_By>;
  cvss_impact_score?: InputMaybe<Order_By>;
  cvss_inferred?: InputMaybe<Order_By>;
  cvss_score?: InputMaybe<Order_By>;
  cvss_version?: InputMaybe<Order_By>;
  data_source?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  findings_aggregate?: InputMaybe<Findings_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  ignored_vulnerabilities_aggregate?: InputMaybe<Ignored_Vulnerabilities_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  namespace?: InputMaybe<Order_By>;
  record_source?: InputMaybe<Order_By>;
  related_vulnerabilities_aggregate?: InputMaybe<Related_Vulnerabilities_Aggregate_Order_By>;
  reverse_related_vulnerabilities_aggregate?: InputMaybe<Related_Vulnerabilities_Aggregate_Order_By>;
  severity?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  topic_id?: InputMaybe<Order_By>;
  urls?: InputMaybe<Order_By>;
  vulnerability_packages_aggregate?: InputMaybe<Vulnerability_Packages_Aggregate_Order_By>;
};

/** select columns of table "vulnerabilities" */
export enum Vulnerabilities_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CvssExploitabilityScore = 'cvss_exploitability_score',
  /** column name */
  CvssImpactScore = 'cvss_impact_score',
  /** column name */
  CvssInferred = 'cvss_inferred',
  /** column name */
  CvssScore = 'cvss_score',
  /** column name */
  CvssVersion = 'cvss_version',
  /** column name */
  DataSource = 'data_source',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Namespace = 'namespace',
  /** column name */
  RecordSource = 'record_source',
  /** column name */
  Severity = 'severity',
  /** column name */
  Slug = 'slug',
  /** column name */
  TopicId = 'topic_id',
  /** column name */
  Urls = 'urls'
}

/**
 * All of the package vulnerabilities belonging to a given vulnerability
 *
 *
 * columns and relationships of "vulnerability_packages"
 *
 */
export type Vulnerability_Packages = {
  __typename?: 'vulnerability_packages';
  advisories: Scalars['String'];
  /** An array relationship */
  findings: Array<Findings>;
  /** An aggregate relationship */
  findings_aggregate: Findings_Aggregate;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  package_versions: Array<Package_Versions>;
  slug: Scalars['String'];
  vuln_slug: Scalars['String'];
  /** An object relationship */
  vulnerability: Vulnerabilities;
};


/**
 * All of the package vulnerabilities belonging to a given vulnerability
 *
 *
 * columns and relationships of "vulnerability_packages"
 *
 */
export type Vulnerability_PackagesFindingsArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};


/**
 * All of the package vulnerabilities belonging to a given vulnerability
 *
 *
 * columns and relationships of "vulnerability_packages"
 *
 */
export type Vulnerability_PackagesFindings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Findings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Findings_Order_By>>;
  where?: InputMaybe<Findings_Bool_Exp>;
};


/**
 * All of the package vulnerabilities belonging to a given vulnerability
 *
 *
 * columns and relationships of "vulnerability_packages"
 *
 */
export type Vulnerability_PackagesPackage_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Package_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Package_Versions_Order_By>>;
  where?: InputMaybe<Package_Versions_Bool_Exp>;
};

/** order by aggregate values of table "vulnerability_packages" */
export type Vulnerability_Packages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vulnerability_Packages_Max_Order_By>;
  min?: InputMaybe<Vulnerability_Packages_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "vulnerability_packages". All fields are combined with a logical 'AND'. */
export type Vulnerability_Packages_Bool_Exp = {
  _and?: InputMaybe<Array<Vulnerability_Packages_Bool_Exp>>;
  _not?: InputMaybe<Vulnerability_Packages_Bool_Exp>;
  _or?: InputMaybe<Array<Vulnerability_Packages_Bool_Exp>>;
  advisories?: InputMaybe<String_Comparison_Exp>;
  findings?: InputMaybe<Findings_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  package_versions?: InputMaybe<Package_Versions_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  vuln_slug?: InputMaybe<String_Comparison_Exp>;
  vulnerability?: InputMaybe<Vulnerabilities_Bool_Exp>;
};

/** order by max() on columns of table "vulnerability_packages" */
export type Vulnerability_Packages_Max_Order_By = {
  advisories?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  vuln_slug?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "vulnerability_packages" */
export type Vulnerability_Packages_Min_Order_By = {
  advisories?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  vuln_slug?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vulnerability_packages". */
export type Vulnerability_Packages_Order_By = {
  advisories?: InputMaybe<Order_By>;
  findings_aggregate?: InputMaybe<Findings_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  package_versions_aggregate?: InputMaybe<Package_Versions_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  vuln_slug?: InputMaybe<Order_By>;
  vulnerability?: InputMaybe<Vulnerabilities_Order_By>;
};

/** select columns of table "vulnerability_packages" */
export enum Vulnerability_Packages_Select_Column {
  /** column name */
  Advisories = 'advisories',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  VulnSlug = 'vuln_slug'
}

export type DeleteProjectAccessTokenMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteProjectAccessTokenMutation = { __typename?: 'mutation_root', delete_project_access_tokens_by_pk?: { __typename?: 'project_access_tokens', id: any } | null };

export type GetBuildDetailsQueryVariables = Exact<{
  build_id: Scalars['uuid'];
  project_id: Scalars['uuid'];
}>;


export type GetBuildDetailsQuery = { __typename?: 'query_root', builds_by_pk?: { __typename?: 'builds', build_number?: number | null, created_at: any, git_branch?: string | null, git_hash?: string | null, git_remote?: string | null, id: any, source_type: any, project_id?: any | null, s3_url?: string | null, project?: { __typename?: 'projects', name: string, ignored_vulnerabilities: Array<{ __typename?: 'ignored_vulnerabilities', id: any, creator_id?: any | null, locations: any, note: string, project_id: any, vulnerability_id: any }> } | null, scans: Array<{ __typename?: 'scans', created_at: any, db_date: any, distro_name: string, distro_version: string, grype_version: string, id: any, scan_number?: number | null, source_type: string, target: string }>, scans_aggregate: { __typename?: 'scans_aggregate', aggregate?: { __typename?: 'scans_aggregate_fields', count: number } | null }, findings: Array<{ __typename?: 'findings', fix_state: any, fix_versions?: any | null, package_name: string, created_at: any, id: any, language: string, locations: any, matcher: string, package_version_id?: any | null, purl: string, severity: any, type: string, version: string, updated_at: any, version_matcher: string, virtual_path?: string | null, vulnerability_id: any, vulnerability_package_id?: any | null, vulnerability: { __typename?: 'vulnerabilities', id: any, slug: string, description?: string | null, cvss_score?: any | null, cvss_inferred?: boolean | null, name: string, namespace: string, data_source: string, ignored_vulnerabilities: Array<{ __typename?: 'ignored_vulnerabilities', creator_id?: any | null, id: any, locations: any, note: string, project_id: any, vulnerability_id: any }> } }> } | null };

export type GetManifestQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
}>;


export type GetManifestQuery = { __typename?: 'query_root', manifests_by_pk?: { __typename?: 'manifests', build_id?: any | null, project_id: any, status?: string | null, message?: string | null } | null };

export type GetProjectQueryVariables = Exact<{
  project_id: Scalars['uuid'];
}>;


export type GetProjectQuery = { __typename?: 'query_root', projects_by_pk?: { __typename?: 'projects', created_at: any, id: any, name: string, organization_id?: any | null, repo?: string | null, settings_id?: any | null, organization?: { __typename?: 'organizations', name: string } | null, github_repository?: { __typename?: 'github_repositories', git_url: string, github_id?: number | null, traits: any } | null, project_access_tokens: Array<{ __typename?: 'project_access_tokens', id: any, project_uuid: any, name?: string | null, created_at: any, last_used?: any | null, created_by_user?: { __typename?: 'identities', traits: any } | null }>, builds: Array<{ __typename?: 'builds', id: any, created_at: any, build_number?: number | null, project_id?: any | null, source_type: any, git_branch?: string | null, git_hash?: string | null, git_remote?: string | null, findings: Array<{ __typename?: 'findings', fix_state: any, fix_versions?: any | null, package_name: string, created_at: any, id: any, language: string, locations: any, matcher: string, package_version_id?: any | null, purl: string, severity: any, type: string, version: string, updated_at: any, version_matcher: string, virtual_path?: string | null, vulnerability_id: any, vulnerability_package_id?: any | null, vulnerability: { __typename?: 'vulnerabilities', id: any, slug: string, description?: string | null, cvss_score?: any | null, cvss_inferred?: boolean | null, name: string, namespace: string, data_source: string, ignored_vulnerabilities: Array<{ __typename?: 'ignored_vulnerabilities', creator_id?: any | null, id: any, locations: any, note: string, project_id: any, vulnerability_id: any }> } }>, scans_aggregate: { __typename?: 'scans_aggregate', aggregate?: { __typename?: 'scans_aggregate_fields', count: number } | null }, scans: Array<{ __typename?: 'scans', created_at: any, scan_number?: number | null }> }> } | null };

export type SampleVulnerabilitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type SampleVulnerabilitiesQuery = { __typename?: 'query_root', vulnerabilities: Array<{ __typename?: 'vulnerabilities', id: any, name: string, namespace: string, record_source?: string | null, severity: any, cvss_score?: any | null, cvss_inferred?: boolean | null, created_at: any, description?: string | null, slug: string, data_source: string, vulnerability_packages: Array<{ __typename?: 'vulnerability_packages', name?: string | null, id: any, slug: string }> }> };

export type GetSidebarInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSidebarInfoQuery = { __typename?: 'query_root', projects: Array<{ __typename?: 'projects', name: string, id: any, created_at: any, builds: Array<{ __typename?: 'builds', id: any, build_number?: number | null }> }>, organizations: Array<{ __typename?: 'organizations', name: string, id: any, createdAt: any, projects: Array<{ __typename?: 'projects', name: string, id: any, created_at: any, github_repository?: { __typename?: 'github_repositories', id: any } | null, builds: Array<{ __typename?: 'builds', id: any, build_number?: number | null }> }> }> };

export type SearchVulnerabilitiesQueryVariables = Exact<{
  search: Scalars['String'];
  namespace?: InputMaybe<String_Comparison_Exp>;
  order_by?: InputMaybe<Array<Vulnerabilities_Order_By> | Vulnerabilities_Order_By>;
  limit: Scalars['Int'];
}>;


export type SearchVulnerabilitiesQuery = { __typename?: 'query_root', vulnerabilities: Array<{ __typename?: 'vulnerabilities', id: any, namespace: string, name: string, created_at: any, cvss_exploitability_score?: any | null, cvss_impact_score?: any | null, cvss_inferred?: boolean | null, cvss_score?: any | null, cvss_version?: string | null, data_source: string, description?: string | null, record_source?: string | null, severity: any, slug: string, topic_id?: any | null, urls?: any | null, related_vulnerabilities: Array<{ __typename?: 'related_vulnerabilities', vulnerability: { __typename?: 'vulnerabilities', id: any, name: string, namespace: string } }>, vulnerability_packages: Array<{ __typename?: 'vulnerability_packages', name?: string | null, id: any, slug: string }> }> };

export type GetVulnerabilityDetailsQueryVariables = Exact<{
  vulnerability_id?: InputMaybe<Scalars['uuid']>;
}>;


export type GetVulnerabilityDetailsQuery = { __typename?: 'query_root', vulnerabilities: Array<{ __typename?: 'vulnerabilities', created_at: any, cvss_exploitability_score?: any | null, cvss_impact_score?: any | null, cvss_inferred?: boolean | null, cvss_score?: any | null, cvss_version?: string | null, data_source: string, description?: string | null, id: any, name: string, namespace: string, record_source?: string | null, severity: any, slug: string, topic_id?: any | null, urls?: any | null, related_vulnerabilities: Array<{ __typename?: 'related_vulnerabilities', vulnerability: { __typename?: 'vulnerabilities', name: string, namespace: string, description?: string | null, severity: any, cvss_score?: any | null, cvss_inferred?: boolean | null, id: any } }>, vulnerability_packages: Array<{ __typename?: 'vulnerability_packages', advisories: string, id: any, name?: string | null, package_versions: Array<{ __typename?: 'package_versions', cpes: any, fix_state: string, fixed_in_versions: any, id: any, version_constraint: string, version_format: string }> }> }> };

export type InsertProjectAccessTokenMutationVariables = Exact<{
  access_token: Scalars['uuid'];
  name: Scalars['String'];
  project_uuid: Scalars['uuid'];
}>;


export type InsertProjectAccessTokenMutation = { __typename?: 'mutation_root', insert_project_access_tokens_one?: { __typename?: 'project_access_tokens', id: any } | null };

export type InsertIgnoredVulnerabilitiesMutationVariables = Exact<{
  objects: Array<Ignored_Vulnerabilities_Insert_Input> | Ignored_Vulnerabilities_Insert_Input;
}>;


export type InsertIgnoredVulnerabilitiesMutation = { __typename?: 'mutation_root', insert_ignored_vulnerabilities?: { __typename?: 'ignored_vulnerabilities_mutation_response', affected_rows: number } | null };

export type InsertManifestMutationVariables = Exact<{
  s3_url: Scalars['String'];
  project_id: Scalars['uuid'];
  filename: Scalars['String'];
  key: Scalars['String'];
}>;


export type InsertManifestMutation = { __typename?: 'mutation_root', insert_manifests_one?: { __typename?: 'manifests', id: any } | null };

export type InsertProjectMutationVariables = Exact<{
  name: Scalars['String'];
  organization_id: Scalars['uuid'];
}>;


export type InsertProjectMutation = { __typename?: 'mutation_root', insert_projects_one?: { __typename?: 'projects', id: any } | null };

export type PresignManifestUrlMutationVariables = Exact<{
  project_id: Scalars['uuid'];
}>;


export type PresignManifestUrlMutation = { __typename?: 'mutation_root', presignManifestUpload?: { __typename?: 'PresignedUrlResponse', url: string, headers: string, key: string, bucket: string, error: boolean, error_message?: string | null } | null };


export const DeleteProjectAccessTokenDocument = `
    mutation DeleteProjectAccessToken($id: uuid!) {
  delete_project_access_tokens_by_pk(id: $id) {
    id
  }
}
    `;
export const GetBuildDetailsDocument = `
    query GetBuildDetails($build_id: uuid!, $project_id: uuid!) {
  builds_by_pk(id: $build_id) {
    build_number
    created_at
    git_branch
    git_hash
    git_remote
    id
    source_type
    project_id
    project {
      name
      ignored_vulnerabilities {
        id
        creator_id
        locations
        note
        project_id
        vulnerability_id
      }
    }
    s3_url
    scans(order_by: {created_at: asc}) {
      created_at
      db_date
      distro_name
      distro_version
      grype_version
      id
      scan_number
      source_type
      target
    }
    scans_aggregate {
      aggregate {
        count
      }
    }
    findings {
      fix_state
      fix_versions
      package_name
      created_at
      id
      language
      locations
      matcher
      package_version_id
      purl
      severity
      type
      version
      updated_at
      version_matcher
      virtual_path
      vulnerability_id
      vulnerability_package_id
      vulnerability {
        id
        slug
        description
        cvss_score
        cvss_inferred
        name
        namespace
        data_source
        ignored_vulnerabilities(where: {project_id: {_eq: $project_id}}) {
          creator_id
          id
          locations
          note
          project_id
          vulnerability_id
        }
      }
    }
  }
}
    `;
export const GetManifestDocument = `
    query GetManifest($id: uuid = "") {
  manifests_by_pk(id: $id) {
    build_id
    project_id
    status
    message
  }
}
    `;
export const GetProjectDocument = `
    query GetProject($project_id: uuid!) {
  projects_by_pk(id: $project_id) {
    created_at
    id
    name
    organization_id
    repo
    settings_id
    organization {
      name
    }
    github_repository {
      git_url
      github_id
      traits
    }
    project_access_tokens {
      id
      project_uuid
      name
      created_at
      last_used
      created_by_user {
        traits
      }
    }
    builds(order_by: {created_at: desc}) {
      id
      created_at
      build_number
      project_id
      source_type
      findings {
        fix_state
        fix_versions
        package_name
        created_at
        id
        language
        locations
        matcher
        package_version_id
        purl
        severity
        type
        version
        updated_at
        version_matcher
        virtual_path
        vulnerability_id
        vulnerability_package_id
        vulnerability {
          id
          slug
          description
          cvss_score
          cvss_inferred
          name
          namespace
          data_source
          ignored_vulnerabilities(where: {project_id: {_eq: $project_id}}) {
            creator_id
            id
            locations
            note
            project_id
            vulnerability_id
          }
        }
      }
      scans_aggregate {
        aggregate {
          count
        }
      }
      scans(limit: 1, order_by: {created_at: desc}) {
        created_at
        scan_number
      }
      git_branch
      git_hash
      git_remote
    }
  }
}
    `;
export const SampleVulnerabilitiesDocument = `
    query SampleVulnerabilities {
  vulnerabilities(limit: 15) {
    id
    name
    namespace
    record_source
    severity
    cvss_score
    cvss_inferred
    created_at
    description
    slug
    data_source
    vulnerability_packages {
      name
      id
      slug
    }
  }
}
    `;
export const GetSidebarInfoDocument = `
    query GetSidebarInfo {
  projects(order_by: {name: asc}) {
    name
    id
    created_at
    builds {
      id
      build_number
    }
  }
  organizations(order_by: {projects_aggregate: {count: asc}}) {
    name
    id
    createdAt
    projects(order_by: {name: asc}) {
      name
      id
      created_at
      github_repository {
        id
      }
      builds {
        id
        build_number
      }
    }
  }
}
    `;
export const SearchVulnerabilitiesDocument = `
    query SearchVulnerabilities($search: String!, $namespace: String_comparison_exp = {_ilike: ""}, $order_by: [vulnerabilities_order_by!] = {}, $limit: Int!) {
  vulnerabilities(
    where: {_or: [{name: {_ilike: $search}}, {description: {_ilike: $search}}, {vulnerability_packages: {name: {_ilike: $search}}}], namespace: $namespace}
    order_by: $order_by
    limit: $limit
  ) {
    id
    namespace
    name
    created_at
    cvss_exploitability_score
    cvss_impact_score
    cvss_inferred
    cvss_score
    cvss_version
    data_source
    description
    record_source
    severity
    slug
    topic_id
    urls
    related_vulnerabilities {
      vulnerability {
        id
        name
        namespace
      }
    }
    vulnerability_packages {
      name
      id
      slug
    }
  }
}
    `;
export const GetVulnerabilityDetailsDocument = `
    query GetVulnerabilityDetails($vulnerability_id: uuid) {
  vulnerabilities(where: {id: {_eq: $vulnerability_id}}) {
    created_at
    cvss_exploitability_score
    cvss_impact_score
    cvss_inferred
    cvss_score
    cvss_version
    data_source
    description
    id
    name
    namespace
    record_source
    severity
    slug
    topic_id
    urls
    related_vulnerabilities {
      vulnerability {
        name
        namespace
        description
        severity
        cvss_score
        cvss_inferred
        id
      }
    }
    vulnerability_packages {
      advisories
      id
      name
      package_versions {
        cpes
        fix_state
        fixed_in_versions
        id
        version_constraint
        version_format
      }
    }
  }
}
    `;
export const InsertProjectAccessTokenDocument = `
    mutation InsertProjectAccessToken($access_token: uuid!, $name: String!, $project_uuid: uuid!) {
  insert_project_access_tokens_one(
    object: {access_token: $access_token, name: $name, project_uuid: $project_uuid}
  ) {
    id
  }
}
    `;
export const InsertIgnoredVulnerabilitiesDocument = `
    mutation InsertIgnoredVulnerabilities($objects: [ignored_vulnerabilities_insert_input!]!) {
  insert_ignored_vulnerabilities(
    objects: $objects
    on_conflict: {constraint: ignored_vulnerabilities_project_id_vulnerability_id_key, update_columns: locations}
  ) {
    affected_rows
  }
}
    `;
export const InsertManifestDocument = `
    mutation insertManifest($s3_url: String!, $project_id: uuid!, $filename: String!, $key: String!) {
  insert_manifests_one(
    object: {filename: $filename, s3_url: $s3_url, project_id: $project_id, s3_key: $key}
  ) {
    id
  }
}
    `;
export const InsertProjectDocument = `
    mutation InsertProject($name: String!, $organization_id: uuid!) {
  insert_projects_one(object: {name: $name, organization_id: $organization_id}) {
    id
  }
}
    `;
export const PresignManifestUrlDocument = `
    mutation presignManifestUrl($project_id: uuid!) {
  presignManifestUpload(project_id: $project_id) {
    url
    headers
    key
    bucket
    error
    error_message
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    DeleteProjectAccessToken: build.mutation<DeleteProjectAccessTokenMutation, DeleteProjectAccessTokenMutationVariables>({
      query: (variables) => ({ document: DeleteProjectAccessTokenDocument, variables })
    }),
    GetBuildDetails: build.query<GetBuildDetailsQuery, GetBuildDetailsQueryVariables>({
      query: (variables) => ({ document: GetBuildDetailsDocument, variables })
    }),
    GetManifest: build.query<GetManifestQuery, GetManifestQueryVariables | void>({
      query: (variables) => ({ document: GetManifestDocument, variables })
    }),
    GetProject: build.query<GetProjectQuery, GetProjectQueryVariables>({
      query: (variables) => ({ document: GetProjectDocument, variables })
    }),
    SampleVulnerabilities: build.query<SampleVulnerabilitiesQuery, SampleVulnerabilitiesQueryVariables | void>({
      query: (variables) => ({ document: SampleVulnerabilitiesDocument, variables })
    }),
    GetSidebarInfo: build.query<GetSidebarInfoQuery, GetSidebarInfoQueryVariables | void>({
      query: (variables) => ({ document: GetSidebarInfoDocument, variables })
    }),
    SearchVulnerabilities: build.query<SearchVulnerabilitiesQuery, SearchVulnerabilitiesQueryVariables>({
      query: (variables) => ({ document: SearchVulnerabilitiesDocument, variables })
    }),
    GetVulnerabilityDetails: build.query<GetVulnerabilityDetailsQuery, GetVulnerabilityDetailsQueryVariables | void>({
      query: (variables) => ({ document: GetVulnerabilityDetailsDocument, variables })
    }),
    InsertProjectAccessToken: build.mutation<InsertProjectAccessTokenMutation, InsertProjectAccessTokenMutationVariables>({
      query: (variables) => ({ document: InsertProjectAccessTokenDocument, variables })
    }),
    InsertIgnoredVulnerabilities: build.mutation<InsertIgnoredVulnerabilitiesMutation, InsertIgnoredVulnerabilitiesMutationVariables>({
      query: (variables) => ({ document: InsertIgnoredVulnerabilitiesDocument, variables })
    }),
    insertManifest: build.mutation<InsertManifestMutation, InsertManifestMutationVariables>({
      query: (variables) => ({ document: InsertManifestDocument, variables })
    }),
    InsertProject: build.mutation<InsertProjectMutation, InsertProjectMutationVariables>({
      query: (variables) => ({ document: InsertProjectDocument, variables })
    }),
    presignManifestUrl: build.mutation<PresignManifestUrlMutation, PresignManifestUrlMutationVariables>({
      query: (variables) => ({ document: PresignManifestUrlDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };


