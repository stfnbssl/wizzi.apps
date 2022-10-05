/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\wizzi\reducer.tsx.ittf
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
    mTreeBuildupScript?: string;
    mTreeIttf?: any;
    jobGeneratedArtifacts?: PackiFiles;
    wizziMetaFolderIttfDocuments?: PackiFiles;
    wizzifiedIttfContent?: string;
    codeASTContent?: string;
}

const initialState: WizziState = {
    loading: false, 
    error: undefined, 
    generatedArtifact: undefined, 
    mTreeBuildupScript: undefined, 
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
                    error: undefined
                 };
        }
        case getType(wizziActions.generateArtifactSuccess): {
            console.log("wizziActions.generateArtifactSuccess", action, __filename);
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
                        generatedArtifact: action.payload.generatedArtifact
                     };
            }
        }
        case getType(wizziActions.generateArtifactError): {
            console.log("wizziActions.generateArtifactError", action, __filename);
            return {
                    ...state, 
                    loading: false, 
                    error: action.payload
                 };
        }
        case getType(wizziActions.mTreeBuildupScriptRequest): {
            console.log("wizziActions.mTreeBuildupScriptRequest", __filename);
            return {
                    ...state, 
                    loading: true, 
                    mTreeBuildupScript: undefined, 
                    error: undefined
                 };
        }
        case getType(wizziActions.mTreeBuildupScriptSuccess): {
            console.log("wizziActions.mTreeBuildupScriptSuccess", action, __filename);
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
        case getType(wizziActions.mTreeBuildupScriptError): {
            console.log("wizziActions.mTreeBuildupScriptError", action, __filename);
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
                    error: undefined
                 };
        }
        case getType(wizziActions.mTreeSuccess): {
            console.log("wizziActions.mTreeSuccess", action, __filename);
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
            console.log("wizziActions.mTreeError", action, __filename);
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
                    error: undefined
                 };
        }
        case getType(wizziActions.executeJobSuccess): {
            console.log("wizziActions.executeJobSuccess", action, __filename);
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
            console.log("wizziActions.executeJobError", action, __filename);
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
                    error: undefined
                 };
        }
        case getType(wizziActions.executeWizziMetaFolderSuccess): {
            console.log("wizziActions.executeWizziMetaFolderSuccess", action, __filename);
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
            console.log("wizziActions.executeWizziMetaFolderError", action, __filename);
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
                    error: undefined
                 };
        }
        case getType(wizziActions.wizzifySuccess): {
            console.log("wizziActions.wizzifySuccess", action, __filename);
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
            console.log("wizziActions.wizzifyError", action, __filename);
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
                    error: undefined
                 };
        }
        case getType(wizziActions.codeASTSuccess): {
            console.log("wizziActions.codeASTSuccess", action, __filename);
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
            console.log("wizziActions.codeASTError", action, __filename);
            return {
                    ...state, 
                    loading: false, 
                    error: action.payload
                 };
        }
        case getType(wizziActions.changeSelectedFile): {
            console.log("wizziActions.changeSelectedFile", action, __filename);
            return {
                    ...state, 
                    loading: false, 
                    error: undefined, 
                    generatedArtifact: undefined, 
                    mTreeBuildupScript: undefined, 
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
