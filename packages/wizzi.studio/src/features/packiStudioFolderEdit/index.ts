/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packiStudioFolderEdit\index.ts.ittf
    utc time: Thu, 11 Apr 2024 13:29:18 GMT
*/
import {ControllerType} from '../app/types';
import * as packiStudioFolderEditTypes from './types';
import {LocalEditController} from './controllers/localedit';
import {ApiV1LocalController} from './controllers/apiv1local';
const packiStudioFolderEditControllers: ControllerType[] = [
    new LocalEditController(), 
    new ApiV1LocalController()
];
export {packiStudioFolderEditTypes, packiStudioFolderEditControllers};
