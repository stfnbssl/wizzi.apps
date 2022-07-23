/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\reducer.tsx.ittf
    utc time: Sat, 23 Jul 2022 13:15:35 GMT
*/
import {Reducer} from 'redux';
import {ActionType, getType} from 'typesafe-actions';
import {Packi} from './types';
import * as packiActions from './actions';
import {mixPreviousAndGeneratedPackiFiles} from '../file/convertFileStructure';
export interface PackiState {
    loading: boolean;
    errors?: string;
    packiNames?: string[];
    packiTemplateNames?: string[];
    generatedArtifactContent?: string;
}
const initialState: PackiState = {
    loading: false, 
    errors: undefined, 
    packiNames: undefined, 
    packiTemplateNames: undefined, 
    generatedArtifactContent: undefined
 };
export type PackiAction = ActionType<typeof packiActions>;
const reducer: Reducer<PackiState, PackiAction> = (state = initialState, action) => {

    switch (action.type) {
        case getType(packiActions.fetchPackiListRequest): {
            console.log("packiActions.fetchPackiListRequest", __filename);
            return {
                    ...state, 
                    loading: true
                 };
        }
        case getType(packiActions.fetchPackiListSuccess): {
            console.log("packiActions.fetchPackiListSuccess", action, __filename);
            return {
                    ...state, 
                    loading: false, 
                    packiNames: action.payload.packiNames
                 };
        }
        case getType(packiActions.fetchPackiListError): {
            console.log("packiActions.fetchPackiListError", action, __filename);
            return {
                    ...state, 
                    loading: false, 
                    errors: action.payload
                 };
        }
        case getType(packiActions.initPackiRequest): {
            console.log("packiActions.initPackiRequest", __filename);
            return {
                    ...state, 
                    loading: true
                 };
        }
        case getType(packiActions.initPackiSuccess): {
            console.log("packiActions.initPackiSuccess", __filename);
            return {
                    ...state, 
                    loading: false
                 };
        }
        case getType(packiActions.initPackiError): {
            console.log("packiActions.initPackiRequest", __filename);
            return {
                    ...state, 
                    loading: false
                 };
        }
        case getType(packiActions.savePackiSuccess): {
            console.log("packiActions.savePackiSuccess", action, __filename);
            return {
                    ...state, 
                    currentPacki: {
                        id: action.payload.id, 
                        files: action.payload.packiEntryFiles
                     }
                 };
        }
        case getType(packiActions.fetchPackiTemplateListRequest): {
            console.log("packiActions.fetchPackiTemplateListRequest", __filename);
            return {
                    ...state, 
                    loading: true
                 };
        }
        case getType(packiActions.fetchPackiTemplateListSuccess): {
            console.log("packiActions.fetchPackiTemplateListSuccess", action, __filename);
            return {
                    ...state, 
                    loading: false, 
                    packiTemplateNames: action.payload.packiNames
                 };
        }
        case getType(packiActions.fetchPackiTemplateListError): {
            console.log("packiActions.fetchPackiTemplateListError", action, __filename);
            return {
                    ...state, 
                    loading: false, 
                    errors: action.payload
                 };
        }
        case getType(packiActions.executeJobSuccess): {
            console.log("packiActions.executeJobSuccess", action, __filename);
            const newPacki = {
                ...state.currentPacki, 
                files: mixPreviousAndGeneratedPackiFiles(action.payload.previousArtifacts, action.payload.generatedArtifacts)
             };
            console.log("packiActions.executeJobSuccess.newPacki", newPacki, __filename);
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
