/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziAction\index.ts.ittf
    utc time: Sun, 16 Jul 2023 13:34:45 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziActionTypes from './types';
import * as apis from './api/wizziAction';
import * as byHash from './api/byHash';
import {ApiV1WizziActionController} from './controllers/apiv1wizziaction';

const wizziActionControllers: ControllerType[] = [
    new ApiV1WizziActionController()
];

const wizziActionApi = {
    ...apis, 
    ...byHash
 };

export {wizziActionTypes, wizziActionControllers, wizziActionApi};
