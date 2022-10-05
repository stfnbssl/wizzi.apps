/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\blog\index.ts.ittf
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as blogTypes from './types';
import {PostModelBuilder, GetPostModel} from './models/post';
import {ApiV1PostController} from './controllers/apiv1post';
import * as postApi from './api/post';

const blogModelGetters = {
    GetPostModel
 };

const blogModelBuilders: ModelBuilderType[] = [
    PostModelBuilder
];

const blogControllers: ControllerType[] = [
    new ApiV1PostController()
];
export {blogTypes, blogModelGetters, blogModelBuilders, blogControllers, postApi};
