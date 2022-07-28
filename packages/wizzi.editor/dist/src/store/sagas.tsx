/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\store\sagas.tsx.ittf
    utc time: Sun, 24 Jul 2022 11:56:37 GMT
*/
import {all, fork} from 'redux-saga/effects';
import packiSagas from '../features/packi/sagas';
import wizziSagas from '../features/wizzi/sagas';

export const createRootSaga = () => {

    return function* rootSaga() {
        
            yield all([
                    fork(packiSagas), 
                    fork(wizziSagas)
                ]);
        };
}
;
