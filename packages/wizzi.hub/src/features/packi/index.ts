/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub\.wizzi-override\src\features\packi\index.ts.ittf
    utc time: Thu, 18 Apr 2024 15:08:01 GMT
*/
import * as packiTypes from './types';
import {PackiBuilder} from './api/PackiBuilder';
import {ControllerType} from '../app/types';
import {PackiEditingController} from './controllers/packiEditing';
import {PackiGeneratingController} from './controllers/packiGenerating';
import {ProductionsController} from './controllers/productions';
const packiControllers: ControllerType[] = [
    new PackiEditingController(), 
    new PackiGeneratingController(), 
    new ProductionsController()
];
export {packiTypes, PackiBuilder, packiControllers};
