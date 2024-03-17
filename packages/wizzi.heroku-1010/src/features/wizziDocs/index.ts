/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\wizziDocs\index.ts.ittf
    utc time: Thu, 14 Mar 2024 11:34:02 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziDocsTypes from './types';
import * as cheatsheetApi from './api/cheatsheet';
import {ApiV1CheatsheetController} from './controllers/apiv1cheatsheet';

const wizziDocsControllers: ControllerType[] = [
    new ApiV1CheatsheetController()
];

export {wizziDocsTypes, wizziDocsControllers, cheatsheetApi};
