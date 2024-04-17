/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packi\index.ts.ittf
    utc time: Thu, 11 Apr 2024 13:29:18 GMT
*/
import * as packiTypes from './types';
import {PackiBuilder} from './api/PackiBuilder';
import {clonePackiFiles, extractPackiFileContent, extractPackiFile, packiFilesToObject} from './api/utils';
import {ControllerType} from '../app/types';
import {PackiEditingController} from './controllers/packiEditing';
import {PackiGeneratingController} from './controllers/packiGenerating';
import {ProductionsController} from './controllers/productions';
const packiControllers: ControllerType[] = [
    new PackiEditingController(), 
    new PackiGeneratingController(), 
    new ProductionsController()
];
const packiApi = {
    PackiBuilder, 
    clonePackiFiles, 
    extractPackiFileContent, 
    extractPackiFile, 
    packiFilesToObject
 };
export {packiTypes, PackiBuilder, packiApi, packiControllers};
