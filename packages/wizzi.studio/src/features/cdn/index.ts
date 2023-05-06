/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\cdn\index.ts.ittf
    utc time: Sat, 06 May 2023 11:50:24 GMT
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
