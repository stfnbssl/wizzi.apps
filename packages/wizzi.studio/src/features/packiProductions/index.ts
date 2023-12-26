/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\packiProductions\index.ts.ittf
    utc time: Mon, 24 Jul 2023 09:37:44 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as packiProductionsTypes from './types';
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

const packiProductionsModelGetters = {
    GetArtifactProductionModel, 
    GetPackageProductionModel, 
    GetPluginProductionModel, 
    GetMetaProductionModel, 
    GetTFolderModel
 };

const packiProductionsModelBuilders: ModelBuilderType[] = [
    ArtifactProductionModelBuilder, 
    PackageProductionModelBuilder, 
    PluginProductionModelBuilder, 
    MetaProductionModelBuilder, 
    TFolderModelBuilder
];

const packiProductionsControllers: ControllerType[] = [
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
export {packiProductionsTypes, packiProductionsModelGetters, packiProductionsModelBuilders, packiProductionsControllers, artifactApi, packageApi, pluginApi, metaApi, tFolderApi, productionApi};
