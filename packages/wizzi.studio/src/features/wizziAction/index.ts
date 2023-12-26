/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziAction\index.ts.ittf
    utc time: Mon, 24 Jul 2023 09:37:44 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as wizziActionTypes from './types';
import * as wizziActionApi from './api/wizziAction';
import {WizziActionModelBuilder, GetWizziActionModel} from './mongo/wizziAction';
import {ApiV1WizziActionController} from './controllers/apiv1wizziAction';

const wizziActionModelGetters = {
    GetWizziActionModel
 };

const wizziActionModelBuilders: ModelBuilderType[] = [
    WizziActionModelBuilder
];

const wizziActionControllers: ControllerType[] = [
    new ApiV1WizziActionController()
];

export {wizziActionTypes, wizziActionModelGetters, wizziActionModelBuilders, wizziActionControllers, wizziActionApi};