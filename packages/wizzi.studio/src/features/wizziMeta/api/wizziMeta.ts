/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziMeta\api\wizziMeta.ts.ittf
    utc time: Sat, 17 Feb 2024 04:55:15 GMT
*/
import path from 'path';
import {verify, fSystem} from 'wizzi-utils';
import {WizziMetaRequest} from '../types';
import {wizziProds, wizziFactory} from '../../wizzi';
import {packiTypes} from '../../packi';
const file = fSystem.vfile();

export async function getMetaParameters(options: WizziMetaRequest) {

    let jsonwf = await wizziFactory.createJsonFsAndFactory({}, null, null, {});
    return new Promise((resolve, reject) => {
        
            console.log('wizziMeta.getMetaParameters.options', options, __filename);
            const mpOptions = {} as any;
            if (options.metaProductions) {
                mpOptions.metaCtx = {};
                var i, i_items=options.metaProductions, i_len=options.metaProductions.length, prod;
                for (i=0; i<i_len; i++) {
                    prod = options.metaProductions[i];
                    const useProductionVar = 'use' + prod.name[0].toUpperCase() + prod.name.substring(1);
                    mpOptions.metaCtx[useProductionVar] = true;
                }
            }
            jsonwf.wf.getMetaParameters(mpOptions, async (err, metaParameters) => {
            
                if (err) {
                    return reject(err);
                }
                console.log(JSON.stringify(metaParameters, null, 4))
                const metaParametersObj = {};
                for (var k in metaParameters) {
                    const parts = k.split('/');
                    if (parts.length == 3 && parts[2] == 'index.json.ittf') {
                        const mpName = parts[1];
                        let mpObj = metaParametersObj[mpName];
                        if (!mpObj) {
                            mpObj = metaParametersObj[mpName] = {};
                        }
                        mpObj.index = k;
                        mpObj.metaProductionName = mpName;
                    }
                    if (parts.length == 3 && parts[2] == 'globals.json.ittf') {
                        const mpName = parts[1];
                        let mpObj = metaParametersObj[mpName];
                        if (!mpObj) {
                            mpObj = metaParametersObj[mpName] = {};
                        }
                        mpObj.globals = k;
                        mpObj.metaProductionName = mpName;
                    }
                }
                const metaParametersObjArray = Object.values(metaParametersObj);
                const jsonwf2 = await wizziFactory.createJsonFsAndFactory(metaParameters, null, null, {});
                function generateJson(count) {
                
                    const mpObj = metaParametersObjArray[count] as any;
                    if (!mpObj) {
                        const result = {
                            metaParametersObj: metaParametersObj, 
                            packiFiles: metaParameters
                         };
                        return resolve(result);
                    }
                    if (mpObj.index) {
                        jsonwf2.wf.loadModelAndGenerateArtifact(wizziFactory.ensurePackiFilePrefix(mpObj.index), {
                            modelRequestContext: {}, 
                            artifactRequestContext: {}
                         }, 'json/document', (err: any, result: any) => {
                        
                            if (err) {
                                return reject(err);
                            }
                            mpObj.parametersIndexObj = JSON.parse(result);
                            if (mpObj.globals) {
                                jsonwf2.wf.loadModelAndGenerateArtifact(wizziFactory.ensurePackiFilePrefix(mpObj.globals), {
                                    modelRequestContext: {}, 
                                    artifactRequestContext: {}
                                 }, 'json/document', (err: any, result: any) => {
                                
                                    if (err) {
                                        return reject(err);
                                    }
                                    mpObj.parametersGlobalsObj = JSON.parse(result);
                                    generateJson(count + 1)
                                }
                                )
                            }
                            else {
                                generateJson(count + 1)
                            }
                        }
                        )
                    }
                    else {
                        if (mpObj.globals) {
                            jsonwf2.wf.loadModelAndGenerateArtifact(wizziFactory.ensurePackiFilePrefix(mpObj.globals), {
                                modelRequestContext: {}, 
                                artifactRequestContext: {}
                             }, 'json/document', (err: any, result: any) => {
                            
                                if (err) {
                                    return reject(err);
                                }
                                mpObj.parametersGlobalsObj = JSON.parse(result);
                                generateJson(count + 1)
                            }
                            )
                        }
                        else {
                            generateJson(count + 1)
                        }
                    }
                }
                generateJson(0)
            }
            )
        }
        );
}

export async function getProvidedMetas(options: WizziMetaRequest) {

    const jsonwf = await wizziFactory.createJsonFsAndFactory({}, null, null, {});
    return new Promise((resolve, reject) => {
        
            console.log('wizziMeta.getMetaProvides.options', options, __filename);
            jsonwf.wf.getProvidedMetas((err, providedMetas) => {
            
                if (err) {
                    return reject(err);
                }
                return resolve(providedMetas);
            }
            )
        }
        );
}

export async function executeMetaProduction(options: WizziMetaRequest) {

    return new Promise((resolve, reject) => {
        
            console.log('wizziMeta.executeMetaProduction.options', options, __filename);
            createMetaCtx(options).then((metaCtx: any) => {
            
                console.log('wizziMeta.createWizziPackage.metaCtx', metaCtx, __filename);
                var pluginsBaseFolder = 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages';
                var metaPluginsBaseFolder = 'C:/My/wizzi/stfnbssl/wizzi.metas/packages';
                var globalContext = {};
                wizziProds.metaGenerate(metaCtx, {
                    items: [
                        './wizzi.plugin.ittf/index', 
                        './wizzi.plugin.json/index'
                    ], 
                    pluginsBaseFolder: pluginsBaseFolder
                 }, {
                    items: [
                        './wizzi.meta.cloud/index', 
                        './wizzi.meta.commons/index', 
                        './wizzi.meta.docs/index', 
                        './wizzi.meta.js/index', 
                        './wizzi.meta.ts/index', 
                        './wizzi.meta.ts.express/index', 
                        './wizzi.meta.ts.db/index', 
                        './wizzi.meta.web/index', 
                        './wizzi.meta.wizzi/index'
                    ], 
                    metaPluginsBaseFolder: metaPluginsBaseFolder
                 }, globalContext).then((packiFiles: any) => {
                
                    return persistPackageFiles(packiFiles, options);
                }
                ).catch((error: any) => {
                
                    if (typeof error === 'object' && error !== null) {
                    }
                    console.log("[31m%s[0m", 'wizziMeta.executeMetaProduction.persistPackageFiles.error', error);
                    return reject(error);
                }
                )
            }
            ).catch((error: any) => {
            
                if (typeof error === 'object' && error !== null) {
                }
                console.log("[31m%s[0m", 'wizziMeta.executeMetaProduction.createMetaCtx.error', error);
                return reject(error);
            }
            )
        }
        );
}
async function createMetaCtx(options: WizziMetaRequest) {

    return new Promise((resolve, reject) => {
        
            if (options.metaCtx) {
                return resolve(options.metaCtx);
            }
            if (verify.isEmpty(options.metaCtxFilepath)) {
                return reject('wizziMeta.createMetaCtx. Missing both metaCtx and metaCtxFilepath: ' + options.metaCtxFilepath);
            }
            console.log('createMetaCtx.options.metaCtxFilepath', options.metaCtxFilepath, __filename);
            wizziProds.loadModelFs(options.metaCtxFilepath, {
                metaCtx: {
                    pkgName: options.outputPackageName, 
                    description: options.description || options.outputPackageName
                 }
             }).then((metaCtx: any) => {
            
                return resolve(metaCtx);
            }
            ).catch((error: any) => {
            
                if (typeof error === 'object' && error !== null) {
                }
                console.log("[31m%s[0m", 'wizziMeta.createMetaCtx.error', error);
                return reject(error);
            }
            )
        }
        );
}
async function persistPackageFiles(packiFiles: packiTypes.PackiFiles, options: WizziMetaRequest) {

    return new Promise((resolve, reject) => {
        
            if (options.persist) {
                
                // TODO
                if (options.persist.type == 'filesystem') {
                    return resolve(packiFiles);
                }
                else {
                    return reject('wizziMeta.persistPackageFiles. Unknown persist type: ' + options.persist.type);
                }
            }
            else {
                return resolve(packiFiles);
            }
        }
        );
}
