/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\docs\index.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {ControllerType} from '../app/types';
import * as docsTypes from './types';
import * as cheatsheetApi from './api/cheatsheet';
import {ApiV1CheatsheetController} from './controllers/apiv1cheatsheet';

const docsControllers: ControllerType[] = [
    new ApiV1CheatsheetController()
];

export {docsTypes, docsControllers, cheatsheetApi};
