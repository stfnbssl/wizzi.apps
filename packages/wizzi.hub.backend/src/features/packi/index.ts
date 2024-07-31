/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.backend\.wizzi-override\src\features\packi\index.ts.ittf
    utc time: Wed, 31 Jul 2024 13:44:15 GMT
*/
import * as packiTypes from './types';
import {PackiBuilder} from './api/PackiBuilder';
import {clonePackiFiles, extractPackiFileContent, extractPackiFile, packiFilesToObject} from './api/utils';
import {prettify, generate} from './api/packiManager';
import {ControllerType} from '#/src/features/app/types';
import {PackiEditingController} from './controllers/packiEditing';
import {PackiGeneratingController} from './controllers/packiGenerating';
import {ApiV1PackiManagerController} from './controllers/apiv1packiManager';
const packiControllers: ControllerType[] = [
    new PackiEditingController(), 
    new PackiGeneratingController(), 
    new ApiV1PackiManagerController()
];
const packiApi = {
    PackiBuilder, 
    clonePackiFiles, 
    extractPackiFileContent, 
    extractPackiFile, 
    packiFilesToObject, 
    prettify, 
    generate
 };
export {packiTypes, PackiBuilder, packiApi, packiControllers};