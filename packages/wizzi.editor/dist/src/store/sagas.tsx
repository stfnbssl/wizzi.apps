/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\store\sagas.tsx.ittf
    utc time: Thu, 11 Apr 2024 13:23:20 GMT
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
