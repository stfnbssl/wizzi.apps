/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\ittf\index.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {ControllerType} from '../app/types';
import * as ittfTypes from './types';
import * as ittfFsApi from './api/ittfFsApi';
import {ApiV1IttfFsController} from './controllers/apiv1ittf';

const ittfControllers: ControllerType[] = [
    new ApiV1IttfFsController()
];

export {ittfTypes, ittfControllers, ittfFsApi};
