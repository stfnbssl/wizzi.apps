/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\wizziFs\index.ts.ittf
    utc time: Wed, 13 Mar 2024 07:19:41 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziFsTypes from './types';
import * as apis from './api/wizziFs';
import * as byHash from './api/byHash';
import {ApiV1WizziFsController} from './controllers/apiv1wizzifs';

const wizziFsControllers: ControllerType[] = [
    new ApiV1WizziFsController()
];

const wizziFsApi = {
    ...apis, 
    ...byHash
 };

export {wizziFsTypes, wizziFsControllers, wizziFsApi};
