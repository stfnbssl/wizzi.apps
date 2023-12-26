/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\docs\index.ts.ittf
    utc time: Mon, 24 Jul 2023 09:37:44 GMT
*/
import {ControllerType} from '../app/types';
import * as docsTypes from './types';
import * as cheatsheetApi from './api/cheatsheet';
import {ApiV1CheatsheetController} from './controllers/apiv1cheatsheet';

const docsControllers: ControllerType[] = [
    new ApiV1CheatsheetController()
];

export {docsTypes, docsControllers, cheatsheetApi};
