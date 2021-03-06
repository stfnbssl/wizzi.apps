/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\auth\index.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as authTypes from './types';
import {AuthUserModelBuilder, GetAuthUserModel} from './mongo/authuser';
import {TokenModelBuilder, GetTokenModel} from './mongo/token';
import {AccountModelBuilder, GetAccountModel} from './mongo/account';
import {AuthenticationController} from './controllers/authentication';
import {ensureAuthenticated} from './ensureAuthenticated';
import * as authManager from './manager';

const authModelGetters = {
    GetAuthUserModel, 
    GetTokenModel, 
    GetAccountModel
 };

const authenticationModelBuilders: ModelBuilderType[] = [
    AuthUserModelBuilder, 
    TokenModelBuilder, 
    AccountModelBuilder
];

const authorizationModelBuilders: ModelBuilderType[] = [];

const authenticationControllers: ControllerType[] = [
    new AuthenticationController()
];

const authorizationControllers: ControllerType[] = [];

export {authTypes, authModelGetters, authenticationModelBuilders, authorizationModelBuilders, authenticationControllers, authorizationControllers, ensureAuthenticated, authManager};
