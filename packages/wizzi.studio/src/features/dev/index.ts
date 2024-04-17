/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\dev\index.ts.ittf
    utc time: Thu, 11 Apr 2024 13:29:18 GMT
*/
import {ControllerType} from '../app/types';
import * as devTypes from './types';
import * as apis from './api/index';
import {ApiV1DevController} from './controllers/apiv1dev';

const devControllers: ControllerType[] = [
    new ApiV1DevController()
];

const devApi = {
    ...apis
 };

export {devTypes, devControllers, devApi};
