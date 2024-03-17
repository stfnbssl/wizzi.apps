/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziMeta\index.ts.ittf
    utc time: Fri, 08 Mar 2024 06:29:02 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziMetaTypes from './types';
import * as wizziMetaApi from './api/wizziMeta';
import {ApiV1WizziMetaController} from './controllers/apiv1wizzimeta';

const wizziMetaControllers: ControllerType[] = [
    new ApiV1WizziMetaController()
];

export {wizziMetaTypes, wizziMetaControllers, wizziMetaApi};
