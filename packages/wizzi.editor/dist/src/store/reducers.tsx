/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\store\reducers.tsx.ittf
    utc time: Mon, 29 Jan 2024 07:09:54 GMT
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
