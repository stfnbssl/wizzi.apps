/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.webapp\packages\wizzi.editor\.wizzi\src\store\sagas.tsx.ittf
    utc time: Tue, 28 Jun 2022 14:08:24 GMT
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
