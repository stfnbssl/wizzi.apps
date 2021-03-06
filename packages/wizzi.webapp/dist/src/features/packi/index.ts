/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\packi\index.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as packiTypes from './types';
import {PackiModelBuilder, GetPackiModel} from './mongo/packi';
import {PackiEditingController} from './controllers/packiEditing';
import {PackiGeneratingController} from './controllers/packiGenerating';
import {PackiController} from './controllers/packi';
import {ProductionsController} from './controllers/productions';
import {ProxyController} from './controllers/proxy';

const packiModelGetters = {
    
    // GetUserModel
    GetPackiModel
 };

const packiModelBuilders: ModelBuilderType[] = [
    PackiModelBuilder
];

const packiControllers: ControllerType[] = [
    new PackiEditingController(), 
    new PackiGeneratingController(), 
    new PackiController(), 
    new ProductionsController(), 
    new ProxyController()
];

export {packiTypes, packiModelGetters, packiModelBuilders, packiControllers};
