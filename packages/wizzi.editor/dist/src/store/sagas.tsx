/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\store\sagas.tsx.ittf
*/
import {all, fork} from 'redux-saga/effects';
import wizziSagas from '../features/wizzi/sagas';
import packiSagas from '../features/packi/sagas';

export const createRootSaga = () => {

    return function* rootSaga() {
        
            yield all([
                    fork(wizziSagas), 
                    fork(packiSagas)
                ]);
        };
}
;
