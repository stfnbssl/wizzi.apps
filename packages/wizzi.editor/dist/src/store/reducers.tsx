/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.webapp\packages\wizzi.editor\.wizzi\src\store\reducers.tsx.ittf
    utc time: Tue, 28 Jun 2022 14:08:24 GMT
*/
import {combineReducers} from 'redux';
import {StoreState} from './types';
import packiReducer from '../features/packi/reducer';
import wizziReducer from '../features/wizzi/reducer';
export const createRootReducer = () => 

    combineReducers<StoreState>({
        packi: packiReducer, 
        wizzi: wizziReducer
     })
;
