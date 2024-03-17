/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packi\index.ts.ittf
    utc time: Fri, 08 Mar 2024 06:29:02 GMT
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
