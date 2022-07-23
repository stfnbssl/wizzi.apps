/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\wizzi\api\contextManager.ts.ittf
    utc time: Wed, 20 Jul 2022 13:00:22 GMT
*/
import {Request} from 'express';
import {ValidateResult, CRUDResult} from '../../types';
import {packiTypes} from '../../packi';
import {productionTypes, tFolderApi, productionApi} from '../../production';
import {wizziProds} from '../../wizzi';

const myname = 'features.wizzi.api.contextManager';

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

export async function prepareProduction(packiProduction: productionTypes.PackiProduction, owner: string, name: string, queryContext: string) {

    return new Promise((resolve, reject) => 
        
            productionApi.getProductionObject(packiProduction, owner, name).then((productionObject: any) => 
            
                getProductionSetFromProductionObject(owner, name, productionObject).then((productionContext: any) => 
                
                    getContextByQueryContext(owner, name, queryContext).then((queryContext: any) => 
                    
                        resolve(Object.assign({}, productionContext, queryContext))
                    ).catch((err: any) => {
                    
                        console.log('features.wizzi.api.contextManager.prepareProduction.getContextByQueryContext.error', err);
                        return reject(err);
                    }
                    )
                
                ).catch((err: any) => {
                
                    console.log('features.wizzi.api.contextManager.prepareProduction.getContextByProductionObject.error', err);
                    return reject(err);
                }
                )
            
            ).catch((err: any) => {
            
                console.log('features.wizzi.api.contextManager.prepareProduction.getProductionObject.error', err);
                return reject(err);
            }
            )
        
        );
}

async function getProductionSetFromProductionObject(owner: string, name: string, productionObject: any) {

    return new Promise((resolve, reject) => {
        
            
            console.log('executing getProductionSetFromProductionObject, owner, name, productionObject');
            
            var retPackiFiles: packiTypes.PackiFiles = productionObject.packiFiles;
            var retContext: any = {
                ctxByProductionObject: "Hello by ProductionObject"
             };
            
            const productionDataPacki = retPackiFiles['.packi/production.json.ittf'];
            if (productionDataPacki) {
                wizziProds.generateArtifact('.packi/production.json.ittf', {
                    '.packi/production.json.ittf': {
                        type: productionDataPacki.type, 
                        contents: productionDataPacki.contents
                     }
                 }, {}).then((result: any) => {
                
                    const productionDataObj = JSON.parse(result.artifactContent);
                    console.log('productionDataObj', JSON.stringify(productionDataObj));
                    getTFolderFragmentsFromProductionData(productionDataObj).then((resultPackiFiles: packiTypes.PackiFiles) => {
                    
                        console.log(myname, 'getProductionSetFromProductionObject', 'resultPackiFiles', Object.keys(resultPackiFiles));
                        retPackiFiles = mergePackiFiles(retPackiFiles, resultPackiFiles)
                        ;
                        getContextFromProductionData(productionDataObj).then((resultContext) => {
                        
                            console.log(myname, 'getProductionSetFromProductionObject', 'resultContext', Object.keys(resultContext));
                            return resolve({
                                    packiFiles: retPackiFiles, 
                                    context: resultContext
                                 });
                        }
                        )
                    }
                    ).catch((err: any) => {
                    
                        console.log('getArtifactGeneration.getTFolderFragmentsFromProductionData.error', err);
                        return reject(err);
                    }
                    )
                }
                ).catch((err: any) => {
                
                    console.log('getArtifactGeneration.generateArtifact.error', err);
                    return reject(err);
                }
                )
            }
            else {
                console.log(owner, name, productionObject, 'has no production data');
                resolve({
                    packiFiles: retPackiFiles, 
                    context: retContext
                 })
            }
        }
        );
}

export async function getTFolderFragmentsFromProductionData(productionDataObj: any):  Promise<packiTypes.PackiFiles> {

    
    return new Promise((resolve, reject) => {
        
            
            var retPackiFiles: packiTypes.PackiFiles = {};
            if (!!(productionDataObj && productionDataObj.fragments && productionDataObj.fragments.length > 0) == false) {
                return resolve(retPackiFiles);
            }
            
            var j = 0;
            (function next() {
            
                var tfolder = productionDataObj.fragments[j++];
                if (!tfolder) {
                    console.log('getTFolderFragmentsFromProductionData.done.keys', Object.keys(retPackiFiles));
                    return resolve(retPackiFiles);
                }
                const parts = tfolder.path.split('/');
                tFolderApi.getTFolder(parts[0], parts.slice(1).join('/')).then((result: CRUDResult) => {
                
                    const tf: ITFolderModel = result.item;
                    const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                    retPackiFiles = mergePackiFiles(retPackiFiles, tf_packiFiles_object)
                    ;
                    next();
                }
                ).catch((err: any) => {
                
                    console.log('getTFolderFragmentsFromProductionData.getTFolder.error', err);
                    return reject(err);
                }
                )
            })();
        }
        );
}

async function getContextFromProductionData(productionDataObj: any):  Promise<any> {

    
    return new Promise((resolve, reject) => {
        
            
            var retContext: any = {};
            if (!!(productionDataObj && productionDataObj.fragments && productionDataObj.fragments.length > 0) == false) {
                return resolve(retContext);
            }
            var j = 0;
            (function next() {
            
                var contextDef = productionDataObj.contexts[j++];
                if (!contextDef) {
                    console.log('getContextFromProductionData.done.keys', Object.keys(retContext));
                    return resolve(retContext);
                }
                const parts = contextDef.path.split('/');
                getArtifactContextItem(parts[0], contextDef.name + ';' + parts.slice(1).join('/')).then((contextObject: any) => {
                
                    retContext = Object.assign({}, retContext, contextObject)
                    ;
                    next();
                }
                ).catch((err: any) => {
                
                    console.log('getContextFromProductionData.getArtifactContextItem.error', err);
                    return reject(err);
                }
                )
            })();
        }
        );
}
async function getContextByQueryContext(owner: string, name: string, productionObject: any) {

    return new Promise((resolve, reject) => {
        
            return resolve({
                    ctxByQueryContext: "Hello by QueryContext"
                 });
        }
        );
}
