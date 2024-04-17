/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziTable\index.ts.ittf
    utc time: Thu, 11 Apr 2024 13:29:18 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as wizziTableTypes from './types';
import * as wizziTableApi from './api/wizziTable';
import {WizziTableModelBuilder, GetWizziTableModel} from './mongo/wizziTable';
import {ApiV1WizziTableController} from './controllers/apiv1wizziTable';

const wizziTableModelGetters = {
    GetWizziTableModel
 };

const wizziTableModelBuilders: ModelBuilderType[] = [
    WizziTableModelBuilder
];

const wizziTableControllers: ControllerType[] = [
    new ApiV1WizziTableController()
];

export {wizziTableTypes, wizziTableModelGetters, wizziTableModelBuilders, wizziTableControllers, wizziTableApi};
