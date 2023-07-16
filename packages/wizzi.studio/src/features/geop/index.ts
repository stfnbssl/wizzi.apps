/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\geop\index.ts.ittf
    utc time: Sun, 16 Jul 2023 13:34:45 GMT
*/
import {ControllerType} from '../app/types';
import * as geopTypes from './types';
import * as apis from './api/geop';
import {ApiV1GeopController} from './controllers/apiv1geop';

const geopControllers: ControllerType[] = [
    new ApiV1GeopController()
];

const geopApi = {
    ...apis
 };

export {geopTypes, geopControllers, geopApi};
