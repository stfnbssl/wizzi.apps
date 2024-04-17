/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\actions.tsx.ittf
    utc time: Thu, 11 Apr 2024 13:23:20 GMT
*/
import {deprecated} from "typesafe-actions";
const {
    createStandardAction
 } = deprecated;
import {ResponsePayload} from '../../store';
import {PackiFiles} from './types';
const NO_ERROR = '@@packi/NO_ERROR';
const GITHUB_CLONE_REQUEST = '@@packi/GITHUB_CLONE_REQUEST';
const GITHUB_CLONE_SUCCESS = '@@packi/GITHUB_CLONE_SUCCESS';
const GITHUB_CLONE_ERROR = '@@packi/GITHUB_CLONE_ERROR';
const EXECUTE_JOB_SUCCESS = '@@packi/EXECUTE_JOB_SUCCESS';
const EXECUTE_WIZZI_META_FOLDER_SUCCESS = '@@packi/EXECUTE_WIZZI_META_FOLDER_SUCCESS';

export interface GithubCloneRequestPayload {
    owner: string;
    name: string;
    branch: string;
}

export interface GithubCloneResponsePayload {
    clonedGithubRepoOwner: string;
    clonedGithubRepoName: string;
    clonedGithubRepoFiles: PackiFiles;
}

export interface JobResponsePayload extends ResponsePayload {
    generatedArtifacts: PackiFiles;
    previousArtifacts: PackiFiles;
}
export interface WizziMetaFolderResponsePayload extends ResponsePayload {
    generatedIttfDocuments: PackiFiles;
}
export const githubCloneRequest = createStandardAction(GITHUB_CLONE_REQUEST)<GithubCloneRequestPayload>();
export const githubCloneSuccess = createStandardAction(GITHUB_CLONE_SUCCESS)<GithubCloneResponsePayload>();
export const githubCloneError = createStandardAction(GITHUB_CLONE_ERROR)<string>();
export const executeJobSuccess = createStandardAction(EXECUTE_JOB_SUCCESS)<JobResponsePayload>();
export const executeWizziMetaFolderSuccess = createStandardAction(EXECUTE_WIZZI_META_FOLDER_SUCCESS)<WizziMetaFolderResponsePayload>();
export const NoError = createStandardAction(NO_ERROR)<string>();
