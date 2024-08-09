/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\store\types.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
*/
import {PackiState} from '../features/packi/reducer';
import {WizziState} from '../features/wizzi/reducer';
//
export type StoreState = { 
    packi: PackiState;
    wizzi: WizziState;
};
;
//
export interface ResponsePayload {
    message?: string;
    error?: { 
        [k: string]: any;
    };
}
