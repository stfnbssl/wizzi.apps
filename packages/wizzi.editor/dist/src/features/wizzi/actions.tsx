/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\wizzi\actions.tsx.ittf
    utc time: Fri, 16 Feb 2024 22:02:11 GMT
*/
import {deprecated} from "typesafe-actions";
const {
    createStandardAction
 } = deprecated;
import {ResponsePayload} from '../../store';
import {PackiFiles} from '../packi';
import {GeneratedArtifact} from './types';
const NO_ERROR = '@@wizzi/NO_ERROR';
const GENERATE_ARTIFACT_REQUEST = '@@wizzi/GENERATE_ARTIFACT_REQUEST';
const GENERATE_ARTIFACT_SUCCESS = '@@wizzi/GENERATE_ARTIFACT_SUCCESS';
const GENERATE_ARTIFACT_ERROR = '@@wizzi/GENERATE_ARTIFACT_ERROR';
const MTREE_DEBUG_INFO_REQUEST = '@@wizzi/MTREE_DEBUG_INFO_REQUEST';
const MTREE_DEBUG_INFO_SUCCESS = '@@wizzi/MTREE_DEBUG_INFO_SUCCESS';
const MTREE_DEBUG_INFO_ERROR = '@@wizzi/MTREE_DEBUG_INFO_ERROR';
const MTREE_REQUEST = '@@wizzi/MTREE_REQUEST';
const MTREE_SUCCESS = '@@wizzi/MTREE_SUCCESS';
const MTREE_ERROR = '@@wizzi/MTREE_ERROR';
const EXECUTE_JOB_REQUEST = '@@wizzi/EXECUTE_JOB_REQUEST';
const EXECUTE_JOB_SUCCESS = '@@wizzi/EXECUTE_JOB_SUCCESS';
const EXECUTE_JOB_ERROR = '@@wizzi/EXECUTE_JOB_ERROR';
const EXECUTE_WIZZI_META_FOLDER_REQUEST = '@@wizzi/EXECUTE_WIZZI_META_FOLDER_REQUEST';
const EXECUTE_WIZZI_META_FOLDER_SUCCESS = '@@wizzi/EXECUTE_WIZZI_META_FOLDER_SUCCESS';
const EXECUTE_WIZZI_META_FOLDER_ERROR = '@@wizzi/EXECUTE_WIZZI_META_FOLDER_ERROR';
const EXECUTE_SAVE_LOCALFOLDER_REQUEST = '@@wizzi/EXECUTE_SAVE_LOCALFOLDER_REQUEST';
const EXECUTE_SAVE_LOCALFOLDER_SUCCESS = '@@wizzi/EXECUTE_SAVE_LOCALFOLDER_SUCCESS';
const EXECUTE_SAVE_LOCALFOLDER_ERROR = '@@wizzi/EXECUTE_SAVE_LOCALFOLDER_ERROR';
const WIZZIFY_REQUEST = '@@wizzi/WIZZIFY_REQUEST';
const WIZZIFY_SUCCESS = '@@wizzi/WIZZIFY_SUCCESS';
const WIZZIFY_ERROR = '@@wizzi/WIZZIFY_ERROR';
const CODE_AST_REQUEST = '@@wizzi/CODE_AST_REQUEST';
const CODE_AST_SUCCESS = '@@wizzi/CODE_AST_SUCCESS';
const CODE_AST_ERROR = '@@wizzi/CODE_AST_ERROR';
const CHANGE_SELECTED_FILE = '@@wizzi/CHANGE_SELECTED_FILE';

export interface ArtifactRequestPayload {
    filePath: string;
    files: PackiFiles;
    productionKind: string;
    productionName: string;
}

export interface ArtifactResponsePayload extends ResponsePayload {
    generatedArtifact: GeneratedArtifact;
}

export interface MTreeDebugInfoResponsePayload extends ResponsePayload {
    mTreeBuildupScript: string;
}

export interface MTreeResponsePayload extends ResponsePayload {
    mTreeIttf: string;
}

export interface JobRequestPayload {
    files: PackiFiles;
    productionKind: string;
    productionName: string;
}

export interface JobResponsePayload extends ResponsePayload {
    generatedArtifacts: PackiFiles;
}

export interface WizziMetaFolderRequestPayload {
    productionKind: string;
    productionId: string;
}

export interface WizziSaveLocalFolderRequestPayload {
    folderPath: string;
    files: PackiFiles;
}

export interface WizziMetaFolderResponsePayload extends ResponsePayload {
    generatedIttfDocuments: PackiFiles;
}

export interface WizzifyRequestPayload {
    filePath: string;
    fileContent: string;
}

export interface WizzifyResponsePayload extends ResponsePayload {
    ittfContent: string;
}

export interface CodeASTRequestPayload {
    filePath: string;
    fileContent: string;
}

export interface CodeASTResponsePayload extends ResponsePayload {
    ittfContent: string;
}

export interface ChangeSelectedFilePayload {
    oldFilePath: string;
    newFilePath: string;
}

export const generateArtifactRequest = createStandardAction(GENERATE_ARTIFACT_REQUEST)<ArtifactRequestPayload>();
export const generateArtifactSuccess = createStandardAction(GENERATE_ARTIFACT_SUCCESS)<ArtifactResponsePayload>();
export const generateArtifactError = createStandardAction(GENERATE_ARTIFACT_ERROR)<string>();

export const mTreeBuildupScriptRequest = createStandardAction(MTREE_DEBUG_INFO_REQUEST)<ArtifactRequestPayload>();
export const mTreeBuildupScriptSuccess = createStandardAction(MTREE_DEBUG_INFO_SUCCESS)<MTreeDebugInfoResponsePayload>();
export const mTreeBuildupScriptError = createStandardAction(MTREE_DEBUG_INFO_ERROR)<string>();

export const mTreeRequest = createStandardAction(MTREE_REQUEST)<ArtifactRequestPayload>();
export const mTreeSuccess = createStandardAction(MTREE_SUCCESS)<MTreeResponsePayload>();
export const mTreeError = createStandardAction(MTREE_ERROR)<string>();

export const executeJobRequest = createStandardAction(EXECUTE_JOB_REQUEST)<JobRequestPayload>();
export const executeJobSuccess = createStandardAction(EXECUTE_JOB_SUCCESS)<JobResponsePayload>();
export const executeJobError = createStandardAction(EXECUTE_JOB_ERROR)<string>();

export const executeWizziMetaFolderRequest = createStandardAction(EXECUTE_WIZZI_META_FOLDER_REQUEST)<WizziMetaFolderRequestPayload>();
export const executeSaveLocalFolder = createStandardAction(EXECUTE_SAVE_LOCALFOLDER_REQUEST)<WizziSaveLocalFolderRequestPayload>();
export const executeWizziMetaFolderSuccess = createStandardAction(EXECUTE_WIZZI_META_FOLDER_SUCCESS)<WizziMetaFolderResponsePayload>();
export const executeWizziMetaFolderError = createStandardAction(EXECUTE_WIZZI_META_FOLDER_ERROR)<string>();

export const wizzifyRequest = createStandardAction(WIZZIFY_REQUEST)<WizzifyRequestPayload>();
export const wizzifySuccess = createStandardAction(WIZZIFY_SUCCESS)<WizzifyResponsePayload>();
export const wizzifyError = createStandardAction(WIZZIFY_ERROR)<string>();

export const codeASTRequest = createStandardAction(CODE_AST_REQUEST)<CodeASTRequestPayload>();
export const codeASTSuccess = createStandardAction(CODE_AST_SUCCESS)<CodeASTResponsePayload>();
export const codeASTError = createStandardAction(CODE_AST_ERROR)<string>();
export const changeSelectedFile = createStandardAction(CHANGE_SELECTED_FILE)<ChangeSelectedFilePayload>();
export const NoError = createStandardAction(NO_ERROR)<string>();
