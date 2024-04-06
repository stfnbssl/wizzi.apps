/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\wizziDocs\index.ts.ittf
    utc time: Fri, 05 Apr 2024 18:03:04 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziDocsTypes from './types';
import * as cheatsheetApi from './api/cheatsheet';
import {ApiV1CheatsheetController} from './controllers/apiv1cheatsheet';

const wizziDocsControllers: ControllerType[] = [
    new ApiV1CheatsheetController()
];

export {wizziDocsTypes, wizziDocsControllers, cheatsheetApi};
