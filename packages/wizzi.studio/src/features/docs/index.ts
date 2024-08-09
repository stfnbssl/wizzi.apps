/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\docs\index.ts.ittf
    utc time: Mon, 05 Aug 2024 15:53:32 GMT
*/
import {ControllerType} from '../app/types';
import * as docsTypes from './types';
import * as cheatsheetApi from './api/cheatsheet';
import {ApiV1CheatsheetController} from './controllers/apiv1cheatsheet';

const docsControllers: ControllerType[] = [
    new ApiV1CheatsheetController()
];

export {docsTypes, docsControllers, cheatsheetApi};