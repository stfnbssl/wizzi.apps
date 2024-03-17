/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\wizziCdn\index.ts.ittf
    utc time: Wed, 13 Mar 2024 07:19:41 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as wizziCdnTypes from './types';
import {WizziCdnResourceModelBuilder, GetWizziCdnResourceModel} from './mongo/resource';
import {ApiV1WizziCdnResourceController} from './controllers/apiv1resource';
import * as resourceApi from './api/resource';

const wizziCdnModelGetters = {
    GetWizziCdnResourceModel
 };

const wizziCdnModelBuilders: ModelBuilderType[] = [
    WizziCdnResourceModelBuilder
];

const wizziCdnControllers: ControllerType[] = [
    new ApiV1WizziCdnResourceController()
];

export {wizziCdnTypes, wizziCdnModelGetters, wizziCdnModelBuilders, wizziCdnControllers, resourceApi};
