/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.lab\.wizzi\src\features\packi\index.ts.ittf
    utc time: Wed, 03 Jul 2024 08:24:51 GMT
*/
import * as packiTypes from './types';
import {PackiBuilder} from './api/PackiBuilder';
import {clonePackiFiles, extractPackiFileContent, extractPackiFile, packiFilesToObject} from './api/utils';
import {ControllerType} from '#/src/features/app/types';
import {PackiEditingController} from './controllers/packiEditing';
import {PackiGeneratingController} from './controllers/packiGenerating';
const packiControllers: ControllerType[] = [
    new PackiEditingController(), 
    new PackiGeneratingController()
];
const packiApi = {
    PackiBuilder, 
    clonePackiFiles, 
    extractPackiFileContent, 
    extractPackiFile, 
    packiFilesToObject
 };
export {packiTypes, PackiBuilder, packiApi, packiControllers};