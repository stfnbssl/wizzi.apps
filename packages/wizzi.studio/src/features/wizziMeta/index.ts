/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziMeta\index.ts.ittf
    utc time: Sun, 16 Jul 2023 13:02:23 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziMetaTypes from './types';
import * as wizziMetaApi from './api/wizziMeta';
import {ApiV1WizziMetaController} from './controllers/apiv1wizzimeta';

const wizziMetaControllers: ControllerType[] = [
    new ApiV1WizziMetaController()
];

export {wizziMetaTypes, wizziMetaControllers, wizziMetaApi};
