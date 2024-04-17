/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\reducer.tsx.ittf
    utc time: Thu, 11 Apr 2024 13:23:20 GMT
*/
import {Reducer} from 'redux';
import {ActionType, getType} from 'typesafe-actions';
import {Packi} from './types';
import * as packiActions from './actions';
import {mixPreviousAndGeneratedPackiFiles} from '../file/convertFileStructure';
export interface PackiState {
    loading: boolean;
    errors?: string;
    generatedArtifactContent?: string;
    generatedIttfDocuments?: string;
}
const initialState: PackiState = {
    loading: false, 
    errors: undefined, 
    generatedArtifactContent: undefined, 
    generatedIttfDocuments: undefined, 
    clonedGithubRepoOwnerName: undefined, 
    clonedGithubRepoName: undefined, 
    clonedGithubRepoFiles: undefined
 };
export type PackiAction = ActionType<typeof packiActions>;
const reducer: Reducer<PackiState, PackiAction> = (state = initialState, action) => {

    switch (action.type) {
        case getType(packiActions.githubCloneRequest): {
            console.log("packiActions.githubCloneRequest", __filename);
            return {
                    ...state, 
                    loading: true, 
                    clonedGithubRepoOwner: undefined, 
                    clonedGithubRepoName: undefined, 
                    clonedGithubRepoFiles: undefined, 
                    error: undefined
                 };
        }
        case getType(packiActions.githubCloneSuccess): {
            console.log("packiActions.githubCloneSuccess", Object.keys(action.payload));
            if (action.payload.error || action.payload.err) {
                return {
                        ...state, 
                        loading: false, 
                        error: (action.payload.error || action.payload.err)
                     };
            }
            else {
                return {
                        ...state, 
                        loading: false, 
                        clonedGithubRepoOwner: action.payload.owner, 
                        clonedGithubRepoName: action.payload.name, 
                        clonedGithubRepoFiles: action.payload.files, 
                        clonedGithubRepoFilesCommitHistory: action.payload.commitHistory
                     };
            }
        }
        case getType(packiActions.githubCloneError): {
            console.log("[31m%s[0m", "packiActions.githubCloneError", action);
            return {
                    ...state, 
                    loading: false, 
                    error: action.payload
                 };
        }
        case getType(packiActions.executeJobSuccess): {
            console.log("packiActions.executeJobSuccess", Object.keys(action.payload));
            const newPacki = {
                ...state.currentPacki, 
                files: mixPreviousAndGeneratedPackiFiles(action.payload.previousArtifacts, action.payload.generatedArtifacts)
             };
            if (!action.payload.error) {
                return {
                        ...state, 
                        currentPacki: {
                            ...state.currentPacki, 
                            files: mixPreviousAndGeneratedPackiFiles(action.payload.previousArtifacts, action.payload.generatedArtifacts)
                        } as Packi
                     };
            }
            else {
                return state;
            }
        }
        default: {
            return state;
        }
    }
    switch (action.type) {
        case getType(packiActions.executeWizziMetaFolderSuccess): {
            console.log("packiActions.executeWizziMetaFolderSuccess", Object.keys(action.payload));
            const newPacki = {
                ...state.currentPacki, 
                files: mixPreviousAndGeneratedPackiFiles(action.payload.previousArtifacts, action.payload.generatedArtifacts)
             };
            if (!action.payload.error) {
                return {
                        ...state, 
                        currentPacki: {
                            ...state.currentPacki, 
                            files: mixPreviousAndGeneratedPackiFiles(action.payload.previousArtifacts, action.payload.generatedArtifacts)
                        } as Packi
                     };
            }
            else {
                return state;
            }
        }
        default: {
            return state;
        }
    }
}
;
export default reducer;
