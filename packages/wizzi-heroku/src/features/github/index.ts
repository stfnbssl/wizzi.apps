/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\github\index.ts.ittf
*/

import {ControllerType} from '../app/types';
import {ApiV1RepoController} from './controllers/apiv1repo';
import * as githubTypes from './types';
import * as githubUtils from './utils';
import * as githubApiCalls from './api/repo';

const githubControllers: ControllerType[] = [
    new ApiV1RepoController()
];

export {githubTypes, githubApiCalls, githubUtils, githubControllers};
