/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\api\production.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
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

const myname = 'features.production.api.production';

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
                
                    console.log('features.production.api.production.getProductionById.getArtifactProductionById.error', err, __filename);
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
                
                    console.log('features.production.api.production.getProductionById.getPackageProductionById.error', err, __filename);
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
                
                    console.log('features.production.api.production.getProductionById.getMetaProductionById.error', err, __filename);
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
                
                    console.log('features.production.api.production.getProductionById.getPluginProductionById.error', err, __filename);
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
                
                    console.log('features.production.api.production.getProductionById.getTFolderProductionById.error', err, __filename);
                    return reject(err);
                }
                )
            }
            else {
                throw new Error("features.production.api.production.getProductionById: packiProduction " + packiProduction + " not implemented");
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
                
                    console.log('features.production.api.production.getProductionObject.getArtifactProductionObject.error', err, __filename);
                    return reject(err);
                }
                )
            }
            else if (packiProduction == 'package') {
                packageApi.getPackageProductionObject(owner, name).then((productionObject: any) => 
                
                    resolve(transformProductionObject(packiProduction, productionObject))
                ).catch((err: any) => {
                
                    console.log('features.production.api.production.getProductionObject.getPackageProductionObject.error', err, __filename);
                    return reject(err);
                }
                )
            }
            else if (packiProduction == 'meta') {
                metaApi.getMetaProductionObject(owner, name).then((productionObject: any) => 
                
                    resolve(transformProductionObject(packiProduction, productionObject))
                ).catch((err: any) => {
                
                    console.log('features.production.api.production.getProductionObject.getMetaProductionObject.error', err, __filename);
                    return reject(err);
                }
                )
            }
            else if (packiProduction == 'plugin') {
                pluginApi.getPluginProductionObject(owner, name).then((productionObject: any) => 
                
                    resolve(transformProductionObject(packiProduction, productionObject))
                ).catch((err: any) => {
                
                    console.log('features.production.api.production.getProductionObject.getPluginProductionObject.error', err, __filename);
                    return reject(err);
                }
                )
            }
            else if (packiProduction == 'tfolder') {
                tFolderApi.getTFolderObject(owner, name).then((productionObject: any) => 
                
                    resolve(transformProductionObject(packiProduction, productionObject))
                ).catch((err: any) => {
                
                    console.log('features.production.api.production.getProductionObject.getTFolderObject.error', err, __filename);
                    return reject(err);
                }
                )
            }
            else {
                throw new Error("features.production.api.production.getProductionObject: packiProduction " + packiProduction + " not implemented");
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
                
                    console.log('features.production.api.production.prepareProductionById.prepareProduction.error', err, __filename);
                    return reject(err);
                }
                )
            
            ).catch((err: any) => {
            
                console.log('features.production.api.production.prepareProductionById.getProductionById.error', err, __filename);
                return reject(err);
            }
            )
        
        );
}

export async function prepareProduction(packiProduction: productionTypes.PackiProduction, owner: string, productionName: string, queryContext: string, rootContext: any) {

    return new Promise((resolve, reject) => 
        
            getDefaultContext_withCache(owner, productionName, rootContext).then((defaultContext: any) => 
            
                getProductionObject(packiProduction, owner, productionName).then((productionObject: any) => {
                
                    console.log('prepareProduction.productionObject', Object.keys(productionObject), __filename);
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
                            
                                console.log('features.production.api.production.prepareProduction.getContextByQueryContext.error', err, __filename);
                                return reject(err);
                            }
                            )
                        }
                        ).catch((err: any) => {
                        
                            console.log('features.production.api.production.prepareProduction.getContextByProductionObject.error', err, __filename);
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
                        
                            console.log('features.production.api.production.prepareProduction.getContextByQueryContext.error', err, __filename);
                            return reject(err);
                        }
                        )
                    }
                }
                ).catch((err: any) => {
                
                    console.log('features.production.api.production.prepareProduction.getProductionObject.error', err, __filename);
                    return reject(err);
                }
                )
            
            ).catch((err: any) => {
            
                console.log('features.production.api.production.prepareProduction.getDefaultContext_withCache.error', err, __filename);
                return reject(err);
            }
            )
        
        );
}

async function getDefaultContext_withCache(owner: string, productionName: string, progressiveContext?: any) {

    progressiveContext = progressiveContext || {};
    return new Promise((resolve, reject) => 
        
            getArtifactContextItem(owner, 'wzCtx;wzctx', progressiveContext).then((resultItemContext: any) => {
            
                console.log('getDefaultContext_withCache', 'got context item wzCtx;wzctx', 'keys', Object.keys(resultItemContext), __filename);
                resolve(Object.assign({}, progressiveContext, resultItemContext))
            }
            ).catch((err: any) => {
            
                console.log('getDefaultContext_withCache.getArtifactContextItem.error', err, __filename);
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
        
            if (queryContextString && queryContextString.length > 0) {
                const parts = queryContextString.split(';');
                const contextPropertyName = parts[0];
                const artifactName = parts[1];
                const transformationName = parts.length > 2 ? parts[2] : null;
                console.log('getArtifactContextItem: contextPropertyName', contextPropertyName, 'artifactName', artifactName, 'transformationName', transformationName, __filename);
                if (transformationName) {
                    getArtifactTransformation(owner, artifactName, progressiveContext, transformationName).then((result: any) => {
                    
                        console.log('getArtifactContextItem: typeof result.transformResult', typeof result.transformResult, __filename);
                        resolve(Object.assign({}, progressiveContext, {
                            [contextPropertyName]: result.transformResult
                         }))
                    }
                    ).catch((err: any) => {
                    
                        console.log('getArtifactContextItem.getArtifactTransformation.error', err, __filename);
                        return reject(err);
                    }
                    )
                }
                else {
                    getArtifactGeneration(owner, artifactName, progressiveContext).then((result: any) => {
                    
                        console.log('getArtifactContextItem.getArtifactGeneration.result.content.length', result.content.length, __filename);
                        const contextObject = JSON.parse(result.content);
                        resolve(Object.assign({}, progressiveContext, {
                            [contextPropertyName]: contextObject
                         }))
                    }
                    ).catch((err: any) => {
                    
                        console.log('getArtifactContextItem.getArtifactGeneration.error', err, __filename);
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

async function getProductionSetFromProductionObject(owner: string, productionName: string, packiConfig: any, progressivePackiFiles: packiTypes.PackiFiles, progressiveContext: any) {

    
    console.log('executing getProductionSetFromProductionObject', 'owner', owner, 'productionName', productionName, 'packiConfig', packiConfig, 'progressivePackiFiles', Object.keys(progressivePackiFiles), 'progressiveContext', Object.keys(progressiveContext), __filename);
    
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
                 }, progressiveContext).then((generationResult: any) => {
                
                    const packiConfigObj = JSON.parse(generationResult.artifactContent);
                    console.log('packiConfigObj', JSON.stringify(packiConfigObj), __filename);
                    getTFoldersPackiFilesFromProductionData(owner, packiConfigObj).then((tFoldersPackiFiles: packiTypes.PackiFiles) => {
                    
                        console.log(myname, 'getProductionSetFromProductionObject', 'tFoldersPackiFiles', Object.keys(tFoldersPackiFiles), __filename);
                        progressivePackiFiles = mergePackiFiles(progressivePackiFiles, tFoldersPackiFiles)
                        ;
                        addContextPropertiesFromProductionData(owner, packiConfigObj, progressiveContext).then((resultProductionContext) => {
                        
                            console.log(myname, 'getProductionSetFromProductionObject', 'resultProductionContext', Object.keys(resultProductionContext), __filename);
                            return resolve({
                                    packiFiles: progressivePackiFiles, 
                                    context: resultProductionContext
                                 });
                        }
                        )
                    }
                    ).catch((err: any) => {
                    
                        console.log('getArtifactGeneration.getTFoldersPackiFilesFromProductionData.error', err, __filename);
                        return reject(err);
                    }
                    )
                }
                ).catch((err: any) => {
                
                    console.log('getArtifactGeneration.generateArtifact.error', err, __filename);
                    return reject(err);
                }
                )
            }
            else {
                console.log(owner, productionName, packiConfig, 'has no production data', __filename);
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
            if (!!(packiConfigObj && packiConfigObj.tfolders && packiConfigObj.tfolders.length > 0) == false) {
                return resolve(tFoldersPackiFiles);
            }
            
            var j = 0;
            (function next() {
            
                var tfolder = packiConfigObj.tfolders[j++];
                if (!tfolder) {
                    console.log('getTFoldersPackiFilesFromProductionData.done.keys', Object.keys(tFoldersPackiFiles), __filename);
                    return resolve(tFoldersPackiFiles);
                }
                tFolderApi.getTFolder(owner, tfolder.name).then((result: CRUDResult) => {
                
                    const tf: productionTypes.ITFolderModel = result.item;
                    const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                    tFoldersPackiFiles = mergePackiFiles(tFoldersPackiFiles, tf_packiFiles_object)
                    ;
                    next();
                }
                ).catch((err: any) => {
                
                    console.log('getTFoldersPackiFilesFromProductionData.getTFolder.error', err, __filename);
                    return reject(err);
                }
                )
            })();
        }
        );
}

async function addContextPropertiesFromProductionData(owner: string, packiConfigObj: any, progressiveContext: any):  Promise<any> {

    console.log('addContextPropertiesFromProductionData', 'owner', owner, 'packiConfigObj', packiConfigObj, 'progressiveContext', Object.keys(progressiveContext), __filename);
    
    return new Promise((resolve, reject) => {
        
            
            if (!!(packiConfigObj && packiConfigObj.contexts && packiConfigObj.contexts.length > 0) == false) {
                return resolve(progressiveContext);
            }
            var j = 0;
            (function next() {
            
                var contextConfig = packiConfigObj.contexts[j++];
                if (!contextConfig) {
                    console.log('addContextPropertiesFromProductionData.done.keys', Object.keys(progressiveContext), __filename);
                    return resolve(progressiveContext);
                }
                getArtifactContextItem(owner, contextConfig.propertyName + ';' + contextConfig.artifactName + (contextConfig.transformationName ? ';' + contextConfig.transformationName : ''), progressiveContext).then((resultContextItem: any) => {
                
                    progressiveContext = Object.assign({}, progressiveContext, resultContextItem)
                    ;
                    next();
                }
                ).catch((err: any) => {
                
                    console.log('addContextPropertiesFromProductionData.getArtifactContextItem.error', err, __filename);
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
async function getProductionSetByQueryContext(owner: string, productionName: string, queryContextString: string, progressivePackiFiles: packiTypes.PackiFiles, progressiveContext: any) {

    
    console.log('executing getProductionSetByQueryContext', 'owner', owner, 'productionName', productionName, 'queryContextString', queryContextString, 'progressivePackiFiles', Object.keys(progressivePackiFiles), 'progressiveContext', Object.keys(progressiveContext), __filename);
    progressiveContext = Object.assign({}, progressiveContext, {
        ctxByQueryContext: "Hello by QueryContext"
     })
    ;
    return new Promise((resolve, reject) => {
        
            if (queryContextString && queryContextString.length > 0) {
                const queryContextItems = queryContextString.split('|');
                console.log('getProductionSetByQueryContext', queryContextItems, __filename);
                var j = 0;
                (function next() {
                
                    var queryContextItem = queryContextItems[j++];
                    if (!queryContextItem) {
                        console.log('getProductionSetByQueryContext.done.keys', Object.keys(progressiveContext), __filename);
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
                    
                        console.log('getProductionSetByQueryContext.getArtifactContextItem.error', err, __filename);
                        return reject(err);
                    }
                    )
                })();
            }
            else {
                console.log('getProductionSetByQueryContext', 'no queryContextString', __filename);
                resolve({
                    packiFiles: progressivePackiFiles, 
                    context: progressiveContext
                 })
            }
        }
        );
}
