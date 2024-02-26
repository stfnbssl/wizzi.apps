/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\sagas.tsx.ittf
    utc time: Thu, 22 Feb 2024 17:41:44 GMT
*/
import {all, fork, put, takeEvery, call} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';
import {config} from '../config';
import {packiActions} from '../packi';
import {callApi} from '../../utils/api';
//
function* handleGithubCloneRequest(action: ReturnType<typeof packiActions.githubCloneRequest>):  any {

    try {
        console.log('sagas.handleGithubCloneRequest.action', action, __filename);
        const res = yield call(callApi, 'get', config.API_URL, 'github/repo/clone/' + encodeURIComponent(action.payload.owner) + '/' + encodeURIComponent(action.payload.name) + '/' + encodeURIComponent(action.payload.branch));
        yield put(packiActions.githubCloneSuccess(res));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(packiActions.githubCloneError(err.stack!));
        }
        else {
            yield put(packiActions.githubCloneError('An unknown error occured.'));
        }
    } 
}
//
//
function* packiRequest() {

    yield takeEvery(getType(packiActions.githubCloneRequest), handleGithubCloneRequest);
}
//
function* packiSaga() {

    yield all([
            fork(packiRequest)
        ]);
}
//
export default packiSaga;
