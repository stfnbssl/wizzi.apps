/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi-override\src\features\production\index.ts.ittf
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as productionTypes from './types';
import {ArtifactProductionModelBuilder, GetArtifactProductionModel} from './mongo/artifact';
import {PackageProductionModelBuilder, GetPackageProductionModel} from './mongo/package';
import {PluginProductionModelBuilder, GetPluginProductionModel} from './mongo/plugin';
import {MetaProductionModelBuilder, GetMetaProductionModel} from './mongo/meta';
import {TFolderModelBuilder, GetTFolderModel} from './mongo/tfolder';
import {ArtifactProductionController} from './controllers/artifact';
import {ApiV1ArtifactProductionController} from './controllers/apiv1artifact';
import {PackageProductionController} from './controllers/package';
import {ApiV1PackageProductionController} from './controllers/apiv1package';
import {PluginProductionController} from './controllers/plugin';
import {ApiV1PluginProductionController} from './controllers/apiv1plugin';
import {MetaProductionController} from './controllers/meta';
import {ApiV1MetaProductionController} from './controllers/apiv1meta';
import {TFolderController} from './controllers/tfolder';
import {ApiV1TFolderController} from './controllers/apiv1tfolder';
import {ApiV1GenerationsController} from './controllers/apiv1generations';
import * as artifactApi from './api/artifact';
import * as packageApi from './api/package';
import * as pluginApi from './api/plugin';
import * as metaApi from './api/meta';
import * as tFolderApi from './api/tfolder';
import * as productionApi from './api/production';

const productionModelGetters = {
    GetArtifactProductionModel, 
    GetPackageProductionModel, 
    GetPluginProductionModel, 
    GetMetaProductionModel, 
    GetTFolderModel
 };

const productionModelBuilders: ModelBuilderType[] = [
    ArtifactProductionModelBuilder, 
    PackageProductionModelBuilder, 
    PluginProductionModelBuilder, 
    MetaProductionModelBuilder, 
    TFolderModelBuilder
];

const productionControllers: ControllerType[] = [
    new ArtifactProductionController(), 
    new ApiV1ArtifactProductionController(), 
    new PackageProductionController(), 
    new ApiV1PackageProductionController(), 
    new PluginProductionController(), 
    new ApiV1PluginProductionController(), 
    new MetaProductionController(), 
    new ApiV1MetaProductionController(), 
    new TFolderController(), 
    new ApiV1TFolderController(), 
    new ApiV1GenerationsController()
];
export {productionTypes, productionModelGetters, productionModelBuilders, productionControllers, artifactApi, packageApi, pluginApi, metaApi, tFolderApi, productionApi};
