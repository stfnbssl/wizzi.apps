/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\account\index.ts.ittf
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as accountTypes from './types';
import {UserModelBuilder, GetUserModel} from './mongo/user';
import {UserController} from './controllers/user';
import {ApiV1UserController} from './controllers/apiv1user';
import * as userApi from './api/user';

const accountModelGetters = {
    GetUserModel
 };

const accountModelBuilders: ModelBuilderType[] = [
    UserModelBuilder
];

const accountControllers: ControllerType[] = [
    new UserController(), 
    new ApiV1UserController()
];
export {accountTypes, accountModelGetters, accountModelBuilders, accountControllers, userApi};
