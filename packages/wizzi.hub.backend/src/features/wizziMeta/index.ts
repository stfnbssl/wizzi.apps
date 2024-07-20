/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.lab\.wizzi\src\features\wizziMeta\index.ts.ittf
    utc time: Wed, 03 Jul 2024 08:24:51 GMT
*/
import {ControllerType} from '#/src/features/app/types';
import * as wizziMetaTypes from './types';
import * as wizziMetaApi from './api/wizziMeta';
import {ApiV1WizziMetaController} from './controllers/apiv1wizzimeta';

const wizziMetaControllers: ControllerType[] = [
    new ApiV1WizziMetaController()
];

export {wizziMetaTypes, wizziMetaControllers, wizziMetaApi};