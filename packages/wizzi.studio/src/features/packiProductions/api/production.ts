/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packiProductions\api\production.ts.ittf
    utc time: Sat, 17 Feb 2024 04:55:15 GMT
*/
import {packiTypes} from '../../packi';
import {wizziProds} from '../../wizzi';
import * as productionTypes from '../types';
import {ValidateResult, CRUDResult} from '../../types';
import * as artifactApi from './artifact';
import * as packageApi from './package';
import * as pluginApi from './plugin';
import * as metaApi from './meta';
import * as tFolderApi from './tfolder';
import {getArtifactGeneration, getArtifactTransformation} from './artifact';

const myname = 'features.packiProductions.api.production';

const packiConfigPath = '.packi/config.json.ittf';

// TODO
function transformProductionObject(packiProduction: productionTypes.PackiProduction, productionObject: any) {

    productionObject.packiProduction = packiProduction;
    productionObject.packiConfig = productionObject.packiFiles[packiConfigPath];
    
    // TODO set a default packiConfig based on packiProduction
    if (!productionObject.packiConfig) {
    }
    return productionObject;
}

function mergePackiFiles(a: any, b: any) {

    var ret: any = {};
    for (var k in a) {
        ret[k] = a[k];
    }
    for (var k in b) {
        ret[k] = b[k];
    }
    return ret;
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
                tFolderApi.getTFolderById(id).then((result: any) => {
                
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
                tFolderApi.getTFolderObject(owner, name).then((productionObject: any) => 
                
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

export async function prepareProductionById(packiProduction: productionTypes.PackiProduction, id: string, queryContext: string, rootContext: any) {

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
async function prepareProduction(packiProduction: productionTypes.PackiProduction, owner: string, productionName: string, queryContext: string, rootContext: any) {

    console.log(myname + 'prepareProduction entered', owner, productionName, __filename);
    return new Promise((resolve, reject) => 
        
            getDefaultContext_withCache(owner, productionName, rootContext).then((defaultContext: any) => {
            
                console.log(myname + 'prepareProduction.getDefaultContext_withCache completed', Object.keys(defaultContext), __filename);
                getProductionObject(packiProduction, owner, productionName).then((productionObject: any) => {
                
                    console.log('prepareProduction.productionObject got', Object.keys(productionObject), __filename);
                    if (productionObject.packiConfig) {
                        console.log('prepareProduction.productionObject packiConfig', productionObject.packiConfig, __filename);
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

async function getDefaultContext_withCache(owner: string, productionName: string, progressiveContext?: any) {

    progressiveContext = progressiveContext || {};
    return new Promise((resolve, reject) => 
        
            getArtifactContextItem(owner, 'wzCtx;wzctx', progressiveContext).then(
            // loog 'getDefaultContext_withCache', 'got context item wzCtx;wzctx', 'keys', Object.keys(resultItemContext)
            (resultItemContext: any) => 
            
                resolve(Object.assign({}, progressiveContext, resultItemContext))
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getDefaultContext_withCache.getArtifactContextItem.error', err);
                return reject(err);
            }
            )
        
        );
}

/**
    // param queryContextString contextPropertyName;artifactName[;transformName]
    // sample queryContextString: "wzCtx;wzctx.json"
    // context property 'wzCtx' will contain json document 'wzctx.json'
*/
async function getArtifactContextItem(owner: string, queryContextString: string, progressiveContext?: any) {

    progressiveContext = progressiveContext || {};
    return new Promise((resolve, reject) => {
        
            
            // loog 'getArtifactContextItem: contextPropertyName', contextPropertyName, 'artifactName', artifactName, 'transformationName', transformationName
            if (queryContextString && queryContextString.length > 0) {
                const parts = queryContextString.split(';');
                const contextPropertyName = parts[0];
                const artifactName = parts[1];
                const transformationName = parts.length > 2 ? parts[2] : null;
                if (transformationName) {
                    getArtifactTransformation(owner, artifactName, progressiveContext, transformationName).then(
                    // loog 'getArtifactContextItem: typeof result.transformResult', typeof result.transformResult
                    (result: any) => 
                    
                        resolve(Object.assign({}, progressiveContext, {
                            [contextPropertyName]: result.transformResult
                         }))
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'getArtifactContextItem.getArtifactTransformation.error', err);
                        return reject(err);
                    }
                    )
                }
                else {
                    console.log('features.packiProductions.production.ctx_get.try.getArtifactGeneration', 'owner', owner, 'artifactName', artifactName, __filename);
                    getArtifactGeneration(owner, artifactName, progressiveContext).then((result: any) => {
                    
                        console.log('features.packiProductions.production.ctx_get.getArtifactContextItem.getArtifactGeneration.result.content.length', result.content.length, __filename);
                        const contextObject = JSON.parse(result.content);
                        console.log('features.packiProductions.production.ctx_get.getArtifactContextItem.getArtifactGeneration.contextPropertyName.contextObject', contextPropertyName, contextObject, __filename);
                        resolve(Object.assign({}, progressiveContext, {
                            [contextPropertyName]: contextObject
                         }))
                    }
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'getArtifactContextItem.getArtifactGeneration.error', err);
                        return reject(err);
                    }
                    )
                }
            }
            else {
                resolve(progressiveContext);
            }
        }
        );
}

/**
    // __key__production_flow
    // Called by production.api.production.prepareProduction
    // increments progressivePackiFiles and progressiveContext
*/
// loog 'executing getProductionSetFromProductionObject', 'owner', owner, 'productionName', productionName, 'packiConfig', packiConfig, 'progressivePackiFiles', Object.keys(progressivePackiFiles), 'progressiveContext', Object.keys(progressiveContext)
async function getProductionSetFromProductionObject(owner: string, productionName: string, packiConfig: any, progressivePackiFiles: packiTypes.PackiFiles, progressiveContext: any) {

    
    
    progressiveContext = Object.assign({}, progressiveContext, {
        ctxByProductionObject: "Hello by ProductionObject"
     })
    ;
    return new Promise((resolve, reject) => {
        
            
            if (packiConfig) {
                wizziProds.generateArtifact(packiConfigPath, {
                    [packiConfigPath]: {
                        type: packiConfig.type, 
                        contents: packiConfig.contents
                     }
                 }, progressiveContext).then(
                // loog myname, 'getProductionSetFromProductionObject', 'packiConfigObj', JSON.stringify(packiConfigObj)
                (generationResult: any) => {
                
                    const packiConfigObj = JSON.parse(generationResult.artifactContent);
                    getTFoldersPackiFilesFromProductionData(owner, packiConfigObj).then(
                    // loog myname, 'getProductionSetFromProductionObject', 'tFoldersPackiFiles', Object.keys(tFoldersPackiFiles)
                    (tFoldersPackiFiles: packiTypes.PackiFiles) => {
                    
                        progressivePackiFiles = mergePackiFiles(progressivePackiFiles, tFoldersPackiFiles)
                        ;
                        addContextPropertiesFromProductionData(owner, packiConfigObj, progressiveContext).then(
                        // loog myname, 'getProductionSetFromProductionObject', 'resultProductionContext', Object.keys(resultProductionContext)
                        (resultProductionContext) => {
                        
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
            // loog owner, productionName, packiConfig, 'has no production data'
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

    
    return new Promise(
        // loog myname, 'getTFoldersPackiFilesFromProductionData', 'hastFolders', hasTFolders
        (resolve, reject) => {
        
            
            var tFoldersPackiFiles: packiTypes.PackiFiles = {};
            const hasTFolders = packiConfigObj && packiConfigObj.tfolders && packiConfigObj.tfolders.length > 0;
            if (!hasTFolders) {
                return resolve(tFoldersPackiFiles);
            }
            
            var j = 0;
            // loog myname, 'getTFoldersPackiFilesFromProductionData', 'getting tFolder', tfolder.name
            (function next() {
            
                var tfolder = packiConfigObj.tfolders[j++];
                
                // loog 'getTFoldersPackiFilesFromProductionData.done.keys', Object.keys(tFoldersPackiFiles)
                if (!tfolder) {
                    return resolve(tFoldersPackiFiles);
                }
                if (!tfolder.name) {
                    return next();
                }
                tFolderApi.getTFolder(owner, tfolder.name).then((result: CRUDResult) => {
                
                    const tf: productionTypes.ITFolderModel = result.item;
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

// loog 'addContextPropertiesFromProductionData', 'owner', owner, 'packiConfigObj', packiConfigObj, 'progressiveContext', Object.keys(progressiveContext)
async function addContextPropertiesFromProductionData(owner: string, packiConfigObj: any, progressiveContext: any):  Promise<any> {

    
    return new Promise((resolve, reject) => {
        
            
            if (!!(packiConfigObj && packiConfigObj.contexts && packiConfigObj.contexts.length > 0) == false) {
                return resolve(progressiveContext);
            }
            var j = 0;
            (function next() {
            
                var contextConfig = packiConfigObj.contexts[j++];
                
                // loog 'addContextPropertiesFromProductionData.done.keys', Object.keys(progressiveContext)
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
// loog 'executing getProductionSetByQueryContext', 'owner', owner, 'productionName', productionName, 'queryContextString', queryContextString, 'progressivePackiFiles', Object.keys(progressivePackiFiles), 'progressiveContext', Object.keys(progressiveContext)
async function getProductionSetByQueryContext(owner: string, productionName: string, queryContextString: string, progressivePackiFiles: packiTypes.PackiFiles, progressiveContext: any) {

    
    progressiveContext = Object.assign({}, progressiveContext, {
        ctxByQueryContext: "Hello by QueryContext"
     })
    ;
    return new Promise((resolve, reject) => {
        
            
            // loog 'getProductionSetByQueryContext', queryContextItems
            if (queryContextString && queryContextString.length > 0) {
                const queryContextItems = queryContextString.split('|');
                var j = 0;
                (function next() {
                
                    var queryContextItem = queryContextItems[j++];
                    
                    // loog 'getProductionSetByQueryContext.done.keys', Object.keys(progressiveContext)
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
            // loog 'getProductionSetByQueryContext', 'no queryContextString'
            else {
                resolve({
                    packiFiles: progressivePackiFiles, 
                    context: progressiveContext
                 })
            }
        }
        );
}

export async function getCliCtxFromPackiConfig(owner: string, packiConfigObj: any, packiFiles: packiTypes.PackiFiles, progressiveContext: any) {

    return new Promise((resolve, reject) => {
        
            
            // loog 'api.production.getCliCtxFromPackiConfig', 'no metaCtx found'
            if (!packiConfigObj.meta || !packiConfigObj.meta.metaCtx) {
                return resolve({});
            }
            const kind = packiConfigObj.meta.metaCtx.kind;
            let filePath;
            let artifact;
            
            // loog 'api.production.getCliCtxFromPackiConfig', 'getting from filePath', filePath
            if (kind == "file") {
                filePath = packiConfigObj.meta.metaCtx.filePath;
                return resolve(getCliCtxFromPackiFile(filePath, packiFiles, progressiveContext));
            }
            
            // loog 'api.production.getCliCtxFromPackiConfig', 'getting from artifact', artifact.name
            else if (kind == "artifact") {
                artifact = packiConfigObj.meta.metaCtx.artifact;
                artifactApi.getArtifactGeneration_withPrepare(owner, packiConfigObj.meta.metaCtx.artifact.name, null, progressiveContext, "").then((generationResult: any) => 
                
                    resolve(JSON.parse(generationResult.content))
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'api.production.getCliCtxFromPackiConfig.getArtifactGeneration_withPrepare.error', err);
                    return reject(err);
                }
                )
            }
            // loog 'api.production.getCliCtxFromPackiConfig', 'no valid metaCtx kind found'
            else {
                return resolve({});
            }
        }
        );
}

export async function getCliCtxFromPackiFile(filePath: string, packiFiles: packiTypes.PackiFiles, progressiveContext: any) {

    return new Promise((resolve, reject) => 
        
            wizziProds.generateArtifact(filePath, packiFiles, progressiveContext).then(
            // loog 'api.production.getCliCtxFromPackiFile', generationResult.artifactContent
            (generationResult: any) => 
            
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
