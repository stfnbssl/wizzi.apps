/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziPackage\index.ts.ittf
*/
import {ControllerType} from '../app/types';
import * as wizziPackageTypes from './types';
import * as wizziPackageApi from './api/wizziPackage';
import {ApiV1WizziPackageController} from './controllers/apiv1wizzipackage';

const wizziPackageControllers: ControllerType[] = [
    new ApiV1WizziPackageController()
];

export {wizziPackageTypes, wizziPackageControllers, wizziPackageApi};
