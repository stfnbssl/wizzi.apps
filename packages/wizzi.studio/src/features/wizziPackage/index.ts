/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziPackage\index.ts.ittf
    utc time: Sat, 06 May 2023 11:50:24 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziPackageTypes from './types';
import * as wizziPackageApi from './api/wizziPackage';
import {ApiV1WizziPackageController} from './controllers/apiv1wizzipackage';

const wizziPackageControllers: ControllerType[] = [
    new ApiV1WizziPackageController()
];

export {wizziPackageTypes, wizziPackageControllers, wizziPackageApi};
