/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.backend\.wizzi-override\src\features\wizziHubProductions\api\production.ts.ittf
    utc time: Wed, 31 Jul 2024 13:44:15 GMT
*/
import {packiTypes} from '#/src/features/packi';
import {config} from '#/src/features/config';
import {wizziProds} from '#/src/features/wizziProductions';
import * as productionTypes from '../types';
import {ValidateResult, CRUDResult} from '#/src/features/types';
import * as artifactApi from './artifact';
import * as packageApi from './package';
import * as pluginApi from './plugin';
import * as metaApi from './meta';
import * as tFolderApi from './tfolder';
import {getArtifactGeneration, getArtifactTransformation, getDefaultContext_withCache, getArtifactContextItem} from './artifact';
import {mergePackiFiles} from '../utils';

const myname = 'features.packiProductions.api.production';

// TODO
function transformProductionObject(packiProduction: productionTypes.PackiProduction, productionObject: any) {
    productionObject.packiProduction = packiProduction;
    productionObject.packiConfig = productionObject.packiFiles[config.packiConfigPath];
    // TODO set a default packiConfig based on packiProduction
    if (!productionObject.packiConfig) {
    }
    return productionObject;
}

export async function getProductionById(packiProduction: productionTypes.PackiProduction, id: string) {
    return new Promise((resolve, reject) => {
            if (packiProduction == 'artifact') {
                artifactApi.getArtifactProductionById(id).then((result: any) => {
                    if (result.ok) {
                        resolve(result.item)
                    }
                    else {
                        reject(result)
                    }
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.packiProductions.api.production.getProductionById.getArtifactProductionById.error', err);
                    return reject(err);
                }
                )
            }
            else if (packiProduction == 'package') {
                packageApi.getPackageProductionById(id).then((result: any) => {
                    if (result.ok) {
                        resolve(result.item)
                    }
                    else {
                        reject(result)
                    }
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.packiProductions.api.production.getProductionById.getPackageProductionById.error', err);
                    return reject(err);
                }
                )
            }
            else if (packiProduction == 'meta') {
                metaApi.getMetaProductionById(id).then((result: any) => {
                    if (result.ok) {
                        resolve(result.item)
                    }
                    else {
                        reject(result)
                    }
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.packiProductions.api.production.getProductionById.getMetaProductionById.error', err);
                    return reject(err);
                }
                )
            }
            else if (packiProduction == 'plugin') {
                pluginApi.getPluginProductionById(id).then((result: any) => {
                    if (result.ok) {
                        resolve(result.item)
                    }
                    else {
                        reject(result)
                    }
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.packiProductions.api.production.getProductionById.getPluginProductionById.error', err);
                    return reject(err);
                }
                )
            }
            else if (packiProduction == 'tfolder') {
                tFolderApi.getTFolderProductionById(id).then((result: any) => {
                    if (result.ok) {
                        resolve(result.item)
                    }
                    else {
                        reject(result)
                    }
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.packiProductions.api.production.getProductionById.getTFolderProductionById.error', err);
                    return reject(err);
                }
                )
            }
            else {
                throw new Error("features.packiProductions.api.production.getProductionById: packiProduction " + packiProduction + " not implemented");
            }
        }
        );
}

export async function getProductionObject(packiProduction: productionTypes.PackiProduction, owner: string, name: string) {
    return new Promise((resolve, reject) => {
            if (packiProduction == 'artifact') {
                artifactApi.getArtifactProductionObject(owner, name).then((productionObject: any) => 
                    resolve(transformProductionObject(packiProduction, productionObject))
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.packiProductions.api.production.getProductionObject.getArtifactProductionObject.error', err);
                    return reject(err);
                }
                )
            }
            else if (packiProduction == 'package') {
                packageApi.getPackageProductionObject(owner, name).then((productionObject: any) => 
                    resolve(transformProductionObject(packiProduction, productionObject))
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.packiProductions.api.production.getProductionObject.getPackageProductionObject.error', err);
                    return reject(err);
                }
                )
            }
            else if (packiProduction == 'meta') {
                metaApi.getMetaProductionObject(owner, name).then((productionObject: any) => 
                    resolve(transformProductionObject(packiProduction, productionObject))
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.packiProductions.api.production.getProductionObject.getMetaProductionObject.error', err);
                    return reject(err);
                }
                )
            }
            else if (packiProduction == 'plugin') {
                pluginApi.getPluginProductionObject(owner, name).then((productionObject: any) => 
                    resolve(transformProductionObject(packiProduction, productionObject))
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.packiProductions.api.production.getProductionObject.getPluginProductionObject.error', err);
                    return reject(err);
                }
                )
            }
            else if (packiProduction == 'tfolder') {
                tFolderApi.getTFolderProductionObject(owner, name).then((productionObject: any) => 
                    resolve(transformProductionObject(packiProduction, productionObject))
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.packiProductions.api.production.getProductionObject.getTFolderObject.error', err);
                    return reject(err);
                }
                )
            }
            else {
                throw new Error("features.packiProductions.api.production.getProductionObject: packiProduction " + packiProduction + " not implemented");
            }
        }
        );
}

export async function prepareProductionById(
    packiProduction: productionTypes.PackiProduction, 
    id: string, 
    queryContext: string, 
    rootContext: any) {
    return new Promise((resolve, reject) => 
            getProductionById(packiProduction, id).then((productionItem: any) => 
                prepareProduction(packiProduction, productionItem.owner, productionItem.name, queryContext, rootContext).then((result: any) => 
                    resolve(result)
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.packiProductions.api.production.prepareProductionById.prepareProduction.error', err);
                    return reject(err);
                }
                )
            
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.packiProductions.api.production.prepareProductionById.getProductionById.error', err);
                return reject(err);
            }
            )
        
        );
}

export /**
    // __key__production_flow
    // returns an object with packiFiles and context ready for generation
    // Called by features.production.api.artifact.getArtifactGeneration_withPrepare
    // Called by features.production.api.meta.generateMetaProduction
    // Called by features.production.api.meta.getTemplatePackiFiles
    // Called by handlers of features.production.controllers.apiv1generations
*/
async function prepareProduction(
    packiProduction: productionTypes.PackiProduction, 
    owner: string, 
    productionName: string, 
    queryContext: string, 
    rootContext: any) {
    console.log(myname + 'prepareProduction entered', owner, productionName, __filename);
    return new Promise((resolve, reject) => 
            getDefaultContext_withCache(owner, rootContext).then((defaultContext: any) => {
                console.log(myname + 'prepareProduction.getDefaultContext_withCache completed', Object.keys(defaultContext), __filename);
                getProductionObject(packiProduction, owner, productionName).then((productionObject: any) => {
                    if (productionObject.packiConfig) {
                        getProductionSetFromProductionObject(owner, productionName, productionObject.packiConfig, productionObject.packiFiles, defaultContext).then((productionSet: any) => {
                            productionObject.packiFiles = productionSet.packiFiles;
                            productionObject.context = productionSet.context;
                            getProductionSetByQueryContext(owner, productionName, queryContext, productionObject.packiFiles, productionObject.context).then((queryProductionSet: any) => {
                                productionObject.packiFiles = queryProductionSet.packiFiles;
                                productionObject.context = queryProductionSet.context;
                                resolve(productionObject)
                            }
                            ).catch((err: any) => {
                                if (typeof err === 'object' && err !== null) {
                                }
                                console.log("[31m%s[0m", 'features.packiProductions.api.production.prepareProduction.getContextByQueryContext.error', err);
                                return reject(err);
                            }
                            )
                        }
                        ).catch((err: any) => {
                            if (typeof err === 'object' && err !== null) {
                            }
                            console.log("[31m%s[0m", 'features.packiProductions.api.production.prepareProduction.getContextByProductionObject.error', err);
                            return reject(err);
                        }
                        )
                    }
                    else {
                        getProductionSetByQueryContext(owner, productionName, queryContext, productionObject.packiFiles, defaultContext).then((queryProductionSet: any) => {
                            productionObject.packiFiles = queryProductionSet.packiFiles;
                            productionObject.context = queryProductionSet.context;
                            resolve(productionObject)
                        }
                        ).catch((err: any) => {
                            if (typeof err === 'object' && err !== null) {
                            }
                            console.log("[31m%s[0m", 'features.packiProductions.api.production.prepareProduction.getContextByQueryContext.error', err);
                            return reject(err);
                        }
                        )
                    }
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.packiProductions.api.production.prepareProduction.getProductionObject.error', err);
                    return reject(err);
                }
                )
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.packiProductions.api.production.prepareProduction.getDefaultContext_withCache.error', err);
                return reject(err);
            }
            )
        
        );
}

/**
    // __key__production_flow
    // Called by production.api.production.prepareProduction
    // increments progressivePackiFiles and progressiveContext
*/
async function getProductionSetFromProductionObject(
    owner: string, 
    productionName: string, 
    packiConfig: any, 
    progressivePackiFiles: packiTypes.PackiFiles, 
    progressiveContext: any) {
    
    
    progressiveContext = Object.assign({}, progressiveContext, {
        ctxByProductionObject: "Hello by ProductionObject"
     })
    ;
    return new Promise((resolve, reject) => {
            
            // TODO config.packiConfigPath shoul become constants.packiConfigPath
            if (packiConfig) {
                wizziProds.generateArtifact(config.packiConfigPath, {
                    [config.packiConfigPath]: {
                        type: packiConfig.type, 
                        contents: packiConfig.contents
                     }
                 }, progressiveContext).then((generationResult: any) => {
                    const packiConfigObj = JSON.parse(generationResult.artifactContent);
                    getTFoldersPackiFilesFromProductionData(owner, packiConfigObj).then((tFoldersPackiFiles: packiTypes.PackiFiles) => {
                        progressivePackiFiles = mergePackiFiles(progressivePackiFiles, tFoldersPackiFiles)
                        ;
                        addContextPropertiesFromProductionData(owner, packiConfigObj, progressiveContext).then((resultProductionContext) => {
                            return resolve({
                                    packiFiles: progressivePackiFiles, 
                                    context: resultProductionContext
                                 });
                        }
                        ).catch((err: any) => {
                            if (typeof err === 'object' && err !== null) {
                            }
                            console.log("[31m%s[0m", 'getArtifactGeneration.addContextPropertiesFromProductionData.error', err);
                            return reject(err);
                        }
                        )
                    }
                    ).catch((err: any) => {
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'getArtifactGeneration.getTFoldersPackiFilesFromProductionData.error', err);
                        return reject(err);
                    }
                    )
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'getArtifactGeneration.generateArtifact.error', err);
                    return reject(err);
                }
                )
            }
            else {
                resolve({
                    packiFiles: progressivePackiFiles, 
                    context: progressiveContext
                 })
            }
        }
        );
}

export async function getTFoldersPackiFilesFromProductionData(owner: string, packiConfigObj: any):  Promise<packiTypes.PackiFiles> {
    
    return new Promise((resolve, reject) => {
            
            var tFoldersPackiFiles: packiTypes.PackiFiles = {};
            const hasTFolders = packiConfigObj && packiConfigObj.tfolders && packiConfigObj.tfolders.length > 0;
            if (!hasTFolders) {
                return resolve(tFoldersPackiFiles);
            }
            
            var j = 0;
            (function next() {
                var tfolder = packiConfigObj.tfolders[j++];
                if (!tfolder) {
                    return resolve(tFoldersPackiFiles);
                }
                if (!tfolder.name) {
                    return next();
                }
                tFolderApi.getTFolderProduction(owner, tfolder.name).then((result: CRUDResult) => {
                    const tf: productionTypes.ITFolderProductionModel = result.item;
                    const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                    tFoldersPackiFiles = mergePackiFiles(tFoldersPackiFiles, tf_packiFiles_object)
                    ;
                    next();
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'getTFoldersPackiFilesFromProductionData.getTFolder.error', err);
                    return reject(err);
                }
                )
            })();
        }
        );
}

async function addContextPropertiesFromProductionData(owner: string, packiConfigObj: any, progressiveContext: any):  Promise<any> {
    
    return new Promise((resolve, reject) => {
            
            if (!!(packiConfigObj && packiConfigObj.contexts && packiConfigObj.contexts.length > 0) == false) {
                return resolve(progressiveContext);
            }
            var j = 0;
            (function next() {
                var contextConfig = packiConfigObj.contexts[j++];
                if (!contextConfig) {
                    return resolve(progressiveContext);
                }
                if (!contextConfig.propertyName || !contextConfig.artifactName) {
                    return next();
                }
                getArtifactContextItem(owner, contextConfig.propertyName + ';' + contextConfig.artifactName + (contextConfig.transformationName ? ';' + contextConfig.transformationName : ''), progressiveContext).then((resultContextItem: any) => {
                    progressiveContext = Object.assign({}, progressiveContext, resultContextItem)
                    ;
                    next();
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'addContextPropertiesFromProductionData.getArtifactContextItem.error', err);
                    return reject(err);
                }
                )
            })();
        }
        );
}
/**
    // param queryContextString: contexts[@tfolders]
    // contexts: context-1[|context-2[|...context-n]
    // context-x: contextPropertyName;artifactName[;transformName]
    // tfolders: tfolder-1[|tfolder-2[|...tfolder-n]
    // tfolders-x: tfolderName
    // sample queryContextString: "wzCtx;wzctx.json|db;item.db.json@html|css|js"
    // context property 'wzCtx' will contain json document 'wzctx.json'
    // context property 'db' will contain json document 'item.db.json'
    // fragments from tFolders html, css and js will be added to production packiFiles
*/
async function getProductionSetByQueryContext(
    owner: string, 
    productionName: string, 
    queryContextString: string, 
    progressivePackiFiles: packiTypes.PackiFiles, 
    progressiveContext: any) {
    
    progressiveContext = Object.assign({}, progressiveContext, {
        ctxByQueryContext: "Hello by QueryContext"
     })
    ;
    return new Promise((resolve, reject) => {
            if (queryContextString && queryContextString.length > 0) {
                const queryContextItems = queryContextString.split('|');
                var j = 0;
                (function next() {
                    var queryContextItem = queryContextItems[j++];
                    if (!queryContextItem) {
                        return resolve({
                                packiFiles: progressivePackiFiles, 
                                context: progressiveContext
                             });
                    }
                    getArtifactContextItem(owner, queryContextItem, progressiveContext).then((resultItemContext: any) => {
                        progressiveContext = Object.assign({}, progressiveContext, resultItemContext)
                        ;
                        next();
                    }
                    ).catch((err: any) => {
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'getProductionSetByQueryContext.getArtifactContextItem.error', err);
                        return reject(err);
                    }
                    )
                })();
            }
            else {
                resolve({
                    packiFiles: progressivePackiFiles, 
                    context: progressiveContext
                 })
            }
        }
        );
}

export async function getCliCtxFromPackiConfig(
    owner: string, 
    packiConfigObj: any, 
    packiFiles: packiTypes.PackiFiles, 
    progressiveContext: any) {
    return new Promise((resolve, reject) => {
            if (!packiConfigObj.meta || !packiConfigObj.meta.metaCtx) {
                return resolve({});
            }
            const kind = packiConfigObj.meta.metaCtx.kind;
            let filePath;
            let artifact;
            if (kind == "file") {
                filePath = packiConfigObj.meta.metaCtx.filePath;
                return resolve(getCliCtxFromPackiFile(filePath, packiFiles, progressiveContext));
            }
            else if (kind == "artifact") {
                artifact = packiConfigObj.meta.metaCtx.artifact;
                artifactApi.getArtifactGeneration_withPrepare(owner, packiConfigObj.meta.metaCtx.artifact.name, "", progressiveContext, "").then((generationResult: any) => 
                    resolve(JSON.parse(generationResult.content))
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'api.production.getCliCtxFromPackiConfig.getArtifactGeneration_withPrepare.error', err);
                    return reject(err);
                }
                )
            }
            else {
                return resolve({});
            }
        }
        );
}

export async function getCliCtxFromPackiFile(filePath: string, packiFiles: packiTypes.PackiFiles, progressiveContext: any) {
    return new Promise((resolve, reject) => 
            wizziProds.generateArtifact(filePath, packiFiles, progressiveContext).then((generationResult: any) => 
                resolve(JSON.parse(generationResult.artifactContent))
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'api.production.getCliCtxFromPackiFile.generateArtifact.error', err);
                return reject(err);
            }
            )
        
        );
}