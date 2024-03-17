/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\dev\index.ts.ittf
    utc time: Fri, 08 Mar 2024 06:29:02 GMT
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
