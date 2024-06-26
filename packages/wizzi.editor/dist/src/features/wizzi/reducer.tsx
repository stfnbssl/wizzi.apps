/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\wizzi\reducer.tsx.ittf
    utc time: Thu, 11 Apr 2024 13:23:20 GMT
*/
import {Reducer} from 'redux';
import {ActionType, getType} from 'typesafe-actions';
import {getEventServiceInstance} from '../../services';
import {PackiFiles} from '../packi';
import {GeneratedArtifact} from './types';
import * as wizziActions from './actions';

export interface WizziState {
    loading: boolean;
    error?: any;
    generatedArtifact?: GeneratedArtifact;
    mTreeBuildUpScript?: string;
    mTreeIttf?: any;
    jobGeneratedArtifacts?: PackiFiles;
    wizziMetaFolderIttfDocuments?: PackiFiles;
    wizzifiedIttfContent?: string;
    codeASTContent?: string;
}

const initialState: WizziState = {
    loading: false, 
    error: undefined, 
    errorFilePath: undefined, 
    generatedArtifact: undefined, 
    mTreeBuildUpScript: undefined, 
    mTreeIttf: undefined, 
    jobGeneratedArtifacts: undefined, 
    wizziMetaFolderIttfDocuments: undefined, 
    wizzifiedIttfContent: undefined, 
    codeASTContent: undefined
 };

export type WizziAction = ActionType<typeof wizziActions>;

const reducer: Reducer<WizziState, WizziAction> = (state = initialState, action) => {

    switch (action.type) {
        case getType(wizziActions.generateArtifactRequest): {
            console.log("wizziActions.generateArtifactRequest", __filename);
            return {
                    ...state, 
                    loading: true, 
                    generatedArtifact: undefined, 
                    wizzifiedIttfContent: undefined, 
                    codeASTContent: undefined, 
                    error: undefined, 
                    requestFilePath: action.payload.filePath
                 };
        }
        case getType(wizziActions.generateArtifactSuccess): {
            console.log("wizziActions.generateArtifactSuccess", Object.keys(action.payload));
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
                        generatedArtifact: action.payload
                     };
            }
        }
        case getType(wizziActions.generateArtifactError): {
            console.log("[31m%s[0m", "wizziActions.generateArtifactError", action.payload);
            return {
                    ...state, 
                    loading: false, 
                    error: action.payload
                 };
        }
        case getType(wizziActions.mTreeBuildUpScriptRequest): {
            console.log("wizziActions.mTreeBuildUpScriptRequest", __filename);
            return {
                    ...state, 
                    loading: true, 
                    mTreeBuildUpScript: undefined, 
                    error: undefined, 
                    requestFilePath: action.payload.filePath
                 };
        }
        case getType(wizziActions.mTreeBuildUpScriptSuccess): {
            console.log("wizziActions.mTreeBuildUpScriptSuccess", Object.keys(action.payload));
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
                        ...action.payload
                     };
            }
        }
        case getType(wizziActions.mTreeBuildUpScriptError): {
            console.log("[31m%s[0m", "wizziActions.mTreeBuildUpScriptError", action);
            return {
                    ...state, 
                    loading: false, 
                    error: action.payload
                 };
        }
        case getType(wizziActions.mTreeRequest): {
            console.log("wizziActions.mTreeRequest", __filename);
            return {
                    ...state, 
                    loading: true, 
                    mTreeIttf: undefined, 
                    error: undefined, 
                    requestFilePath: action.payload.filePath
                 };
        }
        case getType(wizziActions.mTreeSuccess): {
            console.log("wizziActions.mTreeSuccess", Object.keys(action.payload));
            action.payload.mTreeIttf = action.payload.mTree;
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
                        ...action.payload
                     };
            }
        }
        case getType(wizziActions.mTreeError): {
            console.log("[31m%s[0m", "wizziActions.mTreeError", action);
            return {
                    ...state, 
                    loading: false, 
                    error: action.payload
                 };
        }
        case getType(wizziActions.executeJobRequest): {
            console.log("wizziActions.executeJobRequest", __filename);
            return {
                    ...state, 
                    loading: true, 
                    jobGeneratedArtifacts: undefined, 
                    error: undefined, 
                    requestFilePath: '*'
                 };
        }
        case getType(wizziActions.executeJobSuccess): {
            console.log("wizziActions.executeJobSuccess", Object.keys(action.payload));
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
                        jobGeneratedArtifacts: action.payload.generatedArtifacts
                     };
            }
        }
        case getType(wizziActions.executeJobError): {
            console.log("[31m%s[0m", "wizziActions.executeJobError", action.payload);
            return {
                    ...state, 
                    loading: false, 
                    error: action.payload
                 };
        }
        case getType(wizziActions.executeWizziMetaFolderRequest): {
            console.log("wizziActions.executeWizziMetaFolderRequest", __filename);
            return {
                    ...state, 
                    loading: true, 
                    wizziMetaFolderIttfDocuments: undefined, 
                    error: undefined, 
                    requestFilePath: '*'
                 };
        }
        case getType(wizziActions.executeWizziMetaFolderSuccess): {
            console.log("wizziActions.executeWizziMetaFolderSuccess", Object.keys(action.payload));
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
                        wizziMetaFolderIttfDocuments: action.payload
                     };
            }
        }
        case getType(wizziActions.executeWizziMetaFolderError): {
            console.log("[31m%s[0m", "wizziActions.executeWizziMetaFolderError", action.payload);
            return {
                    ...state, 
                    loading: false, 
                    error: action.payload
                 };
        }
        case getType(wizziActions.wizzifyRequest): {
            console.log("wizziActions.wizzifyRequest", __filename);
            return {
                    ...state, 
                    loading: true, 
                    wizzifiedIttfContent: undefined, 
                    generatedArtifact: undefined, 
                    error: undefined, 
                    requestFilePath: action.payload.filePath
                 };
        }
        case getType(wizziActions.wizzifySuccess): {
            console.log("wizziActions.wizzifySuccess", Object.keys(action.payload));
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
                        ...action.payload
                     };
            }
        }
        case getType(wizziActions.wizzifyError): {
            console.log("[31m%s[0m", "wizziActions.wizzifyError", action);
            return {
                    ...state, 
                    loading: false, 
                    error: action.payload
                 };
        }
        case getType(wizziActions.codeASTRequest): {
            console.log("wizziActions.codeASTRequest", __filename);
            return {
                    ...state, 
                    loading: true, 
                    codeASTContent: undefined, 
                    wizzifiedIttfContent: undefined, 
                    generatedArtifact: undefined, 
                    error: undefined, 
                    requestFilePath: action.payload.filePath
                 };
        }
        case getType(wizziActions.codeASTSuccess): {
            console.log("wizziActions.codeASTSuccess", Object.keys(action.payload));
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
                        ...action.payload
                     };
            }
        }
        case getType(wizziActions.codeASTError): {
            console.log("[31m%s[0m", "wizziActions.codeASTError", action);
            return {
                    ...state, 
                    loading: false, 
                    error: action.payload
                 };
        }
        case getType(wizziActions.changeSelectedFile): {
            console.log("wizziActions.changeSelectedFile", Object.keys(action.payload));
            return {
                    ...state, 
                    loading: false, 
                    error: undefined, 
                    generatedArtifact: undefined, 
                    mTreeBuildUpScript: undefined, 
                    mTreeIttf: undefined, 
                    jobGeneratedArtifacts: undefined, 
                    wizziMetaFolderIttfDocuments: undefined, 
                    wizzifiedIttfContent: undefined
                 };
        }
        default: {
            return state;
        }
    }
}
;

export default reducer;
