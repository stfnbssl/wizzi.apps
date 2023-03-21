/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi-override\src\features\cdn\index.ts.ittf
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as cdnTypes from './types';
import {CdnResourceModelBuilder, GetCdnResourceModel} from './mongo/resource';
import {ApiV1CdnResourceController} from './controllers/apiv1resource';
import * as resourceApi from './api/resource';

const cdnModelGetters = {
    GetCdnResourceModel
 };

const cdnModelBuilders: ModelBuilderType[] = [
    CdnResourceModelBuilder
];

const cdnControllers: ControllerType[] = [
    new ApiV1CdnResourceController()
];

export {cdnTypes, cdnModelGetters, cdnModelBuilders, cdnControllers, resourceApi};
