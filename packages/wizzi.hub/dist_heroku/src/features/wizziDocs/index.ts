/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub\.wizzi-override\src\features\wizziDocs\index.ts.ittf
    utc time: Sat, 06 Apr 2024 12:40:00 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziDocsTypes from './types';
import * as cheatsheetApi from './api/cheatsheet';
import {ApiV1CheatsheetController} from './controllers/apiv1cheatsheet';

const wizziDocsControllers: ControllerType[] = [
    new ApiV1CheatsheetController()
];

export {wizziDocsTypes, wizziDocsControllers, cheatsheetApi};