/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\wizzi\sagas.tsx.ittf
    utc time: Thu, 22 Feb 2024 17:41:44 GMT
*/
import {all, fork, put, takeEvery, call} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';
import {config} from '../config';
import * as wizziActions from './actions';
import {packiActions} from '../packi';
import {callApi} from '../../utils/api';
import {packiFilterIttf} from '../file/convertFileStructure';
//
function* handleGenerateArtifactRequest(action: ReturnType<typeof wizziActions.generateArtifactRequest>):  any {

    try {
        console.log('sagas.handleGenerateArtifactRequest.action', action, __filename);
        const res = yield call(callApi, 'post', config.API_URL, 'wizzi/production/artifact', {
                contextItems: [
                    
                ], 
                ittfDocument: {
                    source: "packi", 
                    mainIttf: action.payload.filePath, 
                    packiFiles: action.payload.files
                 }
             });
        yield put(wizziActions.generateArtifactSuccess(res));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(wizziActions.generateArtifactError(err.stack!));
        }
        else {
            yield put(wizziActions.generateArtifactError('An unknown error occured.'));
        }
    } 
}
//
function* handleMTreeBuildupScriptRequest(action: ReturnType<typeof wizziActions.mTreeBuildupScriptRequest>):  any {

    try {
        console.log('sagas.handleMTreeBuildupScriptRequest.action', action, __filename);
        const res = yield call(callApi, 'post', config.API_URL, 'wizzi/production/mtreescript', {
                contextItems: [
                    
                ], 
                ittfDocument: {
                    source: "packi", 
                    mainIttf: action.payload.filePath, 
                    packiFiles: action.payload.files
                 }
             });
        yield put(wizziActions.mTreeBuildupScriptSuccess(res));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(wizziActions.generateArtifactError(err.stack!));
        }
        else {
            yield put(wizziActions.generateArtifactError('An unknown error occured.'));
        }
    } 
}
//
function* handleMTreeRequest(action: ReturnType<typeof wizziActions.mTreeRequest>):  any {

    try {
        console.log('sagas.handleMTreeRequest.action', action, __filename);
        const res = yield call(callApi, 'post', config.API_URL, 'wizzi/production/mtree', {
                contextItems: [
                    
                ], 
                ittfDocument: {
                    source: "packi", 
                    mainIttf: action.payload.filePath, 
                    packiFiles: action.payload.files
                 }
             });
        yield put(wizziActions.mTreeSuccess(res));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(wizziActions.generateArtifactError(err.stack!));
        }
        else {
            yield put(wizziActions.generateArtifactError('An unknown error occured.'));
        }
    } 
}
//
function* handleWizzifyRequest(action: ReturnType<typeof wizziActions.wizzifyRequest>):  any {

    try {
        console.log('sagas.handleWizzifyRequest.action', action, __filename);
        const filesRequest = {};
        filesRequest[action.payload.filePath] = {
            type: 'CODE', 
            contents: action.payload.fileContent
         };
        const res = yield call(callApi, 'post', config.API_URL, 'production/generations/wizzify', {
                packiFiles: filesRequest
             });
        if (res.wizzifiedPackiFiles && res.wizzifiedPackiFiles[action.payload.filePath + '.ittf']) {
            yield put(wizziActions.wizzifySuccess({
                    wizzifiedIttfContent: res.wizzifiedPackiFiles[action.payload.filePath + '.ittf'].contents
                 }));
        }
        else {
            yield put(wizziActions.wizzifySuccess(res));
        }
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(wizziActions.wizzifyError(err.stack!));
        }
        else {
            yield put(wizziActions.wizzifyError('An unknown error occured.'));
        }
    } 
}
//
function* handleCodeASTRequest(action: ReturnType<typeof wizziActions.codeASTRequest>):  any {

    try {
        console.log('sagas.handleCodeASTRequest.action', action, __filename);
        const filesRequest = {};
        filesRequest[action.payload.filePath] = {
            type: 'CODE', 
            contents: action.payload.fileContent
         };
        const res = yield call(callApi, 'post', config.API_URL, 'production/generations/codeast', {
                packiFiles: filesRequest
             });
        if (res.codeASTPackiFiles && res.codeASTPackiFiles[action.payload.filePath + '.ast']) {
            yield put(wizziActions.codeASTSuccess({
                    codeASTContent: res.codeASTPackiFiles[action.payload.filePath + '.ast'].contents
                 }));
        }
        else {
            yield put(wizziActions.codeASTSuccess(res));
        }
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(wizziActions.codeASTError(err.stack!));
        }
        else {
            yield put(wizziActions.codeASTError('An unknown error occured.'));
        }
    } 
}
//
function* handleExecuteJobRequest(action: ReturnType<typeof wizziActions.executeJobRequest>):  any {

    try {
        console.log('sagas.handleExecuteJobRequest.action', action, __filename);
        const res = yield call(callApi, 'post', config.API_URL, 'production/generations/job/' + encodeURIComponent(action.payload.filePath), {
                packiFiles: action.payload.files, 
                productionKind: action.payload.productionKind, 
                productionName: action.payload.productionName
             });
        yield put(wizziActions.executeJobSuccess(res));
        yield put(packiActions.executeJobSuccess({
                generatedArtifacts: res.generatedArtifacts, 
                previousArtifacts: action.payload.files
             }));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(wizziActions.executeJobError(err.stack!));
        }
        else {
            yield put(wizziActions.executeJobError('An unknown error occured.'));
        }
    } 
}
//
function* handleExecuteWizziMetaFolderRequest(action: ReturnType<typeof wizziActions.executeWizziMetaFolderRequest>):  any {

    try {
        console.log('sagas.handleExecuteWizziMetaFolderRequest.action', action, __filename);
        const pk = action.payload.productionKind.toLowerCase();
        const res = yield call(callApi, 'get', config.API_URL, 'production/' + pk + '/meta/' + encodeURIComponent(action.payload.productionId));
        yield put(wizziActions.executeWizziMetaFolderSuccess(res));
        yield put(packiActions.executeWizziMetaFolderSuccess({
                generatedIttfDocuments: res.generatedIttfDocuments
             }));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(wizziActions.executeWizziMetaFolderError(err.stack!));
        }
        else {
            yield put(wizziActions.executeWizziMetaFolderError('An unknown error occured.'));
        }
    } 
}
//
function* handleChangeSelectedFile(action: ReturnType<typeof wizziActions.changeSelectedFile>):  any {

    try {
        console.log('sagas.handleChangeSelectedFile.action', action, __filename);
        yield put(wizziActions.changeSelectedFile({
                oldFilePath: action.payload.oldFilePath, 
                newFilePath: action.payload.newFilePath
             }));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(wizziActions.NoError(err.stack!));
        }
        else {
            yield put(wizziActions.NoError('An unknown error occured.'));
        }
    } 
}
//
function* wizziRequest() {

    yield takeEvery(getType(wizziActions.generateArtifactRequest), handleGenerateArtifactRequest);
    yield takeEvery(getType(wizziActions.mTreeBuildupScriptRequest), handleMTreeBuildupScriptRequest);
    yield takeEvery(getType(wizziActions.mTreeRequest), handleMTreeRequest);
    yield takeEvery(getType(wizziActions.wizzifyRequest), handleWizzifyRequest);
    yield takeEvery(getType(wizziActions.codeASTRequest), handleCodeASTRequest);
    yield takeEvery(getType(wizziActions.executeJobRequest), handleExecuteJobRequest);
    yield takeEvery(getType(wizziActions.executeWizziMetaFolderRequest), handleExecuteWizziMetaFolderRequest);
    yield takeEvery(getType(wizziActions.changeSelectedFile), handleChangeSelectedFile);
}
//
function* wizziSaga() {

    yield all([
            fork(wizziRequest)
        ]);
}
//
export default wizziSaga;
