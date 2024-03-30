/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\philos\index.ts.ittf
    utc time: Sun, 24 Mar 2024 21:38:41 GMT
*/
import {ControllerType} from '../app/types';
import * as philosTypes from './types';
import * as apis from './api/philos';
import {ApiV1PhilosController} from './controllers/apiv1philos';

const philosControllers: ControllerType[] = [
    new ApiV1PhilosController()
];

const philosApi = {
    ...apis
 };

export {philosTypes, philosControllers, philosApi};
