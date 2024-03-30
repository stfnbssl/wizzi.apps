/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\wizzi\productions.ts.ittf
    utc time: Mon, 25 Mar 2024 04:46:06 GMT
*/
import path from 'path';
import fs from 'fs';
import stringify from 'json-stringify-safe';
import wizzi from '@wizzi/factory';
import {fSystem, ittfScanner, ittfGraph, verify} from '@wizzi/utils';
import {packiFilePrefix, packiFilePrefixExtract} from '../config/env';
import {packiTypes} from '../packi';
import {config} from '../config';
import * as wizziMaps from './maps';
import {createJsonFsAndFactory, ensurePackiFilePrefix, createFilesystemFactory, createFilesystemFactoryWithParameters} from './factory';
import {LoadModelOptions, GenerationOptions, GeneratedArtifact, WizziModelTypesRequest, WizziJobTypesRequest, TransformationOptions, TransformedModel} from './types';
import {JsonFs} from '@wizzi/repo';
const myname = 'features/wizzi/productions';

export async function loadModel(filePath: string, files: packiTypes.PackiFiles, context?: any):  Promise<wizzi.WizziModel> {

    return new Promise(
        // TODO catch error
        async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
                        action: 'wizzi.productions.loadModel', 
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            let jsonwf: any = {};
            const ittfDocumentUri = ensurePackiFilePrefix(filePath) as string
            ;
            jsonwf = await createJsonFsAndFactory(files);
            ;
            jsonwf.wf.loadModel(ittfDocumentUri, {
                mTreeBuildUpContext: context
             }, (err: any, result: any) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
            )
        }
        );
}

export async function loadModelFs(filePath: string, context: any, options?: LoadModelOptions):  Promise<wizzi.WizziModel> {

    const _options: LoadModelOptions = options || {};
    return new Promise(
        // TODO catch error
        async (resolve, reject) => {
        
            const schemaName = wizziMaps.schemaFromFilePath(filePath);
            if (!schemaName) {
                return reject('File is not a known ittf document: ' + filePath);
            }
            const plugins = _options.pluginsBaseFolder && _options.plugins ? {
                    pluginsBaseFolder: _options.pluginsBaseFolder, 
                    items: _options.plugins
                 } : null;
            const wf = await createFilesystemFactory(plugins, null, {});
            wf.loadModel(schemaName, filePath, {
                mTreeBuildUpContext: context
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
            )
        }
        );
}

async function loadModelInternal(wf: wizzi.WizziFactory, filePath: string, context: any):  Promise<wizzi.WizziModel> {

    return new Promise(async (resolve, reject) => {
        
            const schemaName = wizziMaps.schemaFromFilePath(filePath);
            if (!schemaName) {
                return reject('File is not a known ittf document: ' + filePath);
            }
            wf.loadModel(schemaName, filePath, {
                mTreeBuildUpContext: context
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
            )
        }
        );
}

export async function mTreeBuildUpScript(filePath: string, files: packiTypes.PackiFiles, context: any):  Promise<any> {

    return new Promise(
        // TODO catch error
        async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
                        action: 'wizzi.productions.mTreeBuildUpScript', 
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            const ittfDocumentUri = ensurePackiFilePrefix(filePath) as string
            ;
            let jsonwf: any = {};
            jsonwf = await createJsonFsAndFactory(files);
            ;
            jsonwf.wf.loadMTreeBuildUpScript(ittfDocumentUri, context, (err: any, buildUpScript: string) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(buildUpScript)
            }
            )
        }
        );
}

export async function mTreeBuildUpScriptFs(filePath: string, context: any):  Promise<any> {

    throw new Error(myname + '.mTreeBuildUpScriptFs not yet implemented');
}

export async function mTreeBuildUpScriptDb(owner: string, name: string, context?: any):  Promise<GeneratedArtifact> {

    throw new Error(myname + '.mTreeBuildUpScriptDB not yet implemented');
}

export async function mTree(filePath: string, files: packiTypes.PackiFiles, context: any):  Promise<any> {

    return new Promise(
        // TODO catch error
        async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
                        action: 'wizzi.productions.mTree', 
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            const ittfDocumentUri = ensurePackiFilePrefix(filePath) as string
            ;
            let jsonwf: any = {};
            jsonwf = await createJsonFsAndFactory(files);
            ;
            jsonwf.wf.loadMTree(ittfDocumentUri, context, (err: any, mTree: any) => {
            
                if (err) {
                    return reject(err);
                }
                resolve({
                    mTree: mTree, 
                    mTreeIttf: mTree.toIttf()
                 })
            }
            )
        }
        );
}

export async function mTreeFs(ittfDocumentUri: string, context: any):  Promise<any> {

    context = context || {};
    return new Promise(async (resolve, reject) => {
        
            const wf = await createFilesystemFactory();
            wf.loadMTree(ittfDocumentUri, context, (err: any, mTree: any) => {
            
                if (err) {
                    return reject(err);
                }
                resolve({
                    mTree: mTree, 
                    mTreeIttf: mTree.toIttf()
                 })
            }
            )
        }
        );
}

export async function mTreeDb(owner: string, name: string, context?: any):  Promise<GeneratedArtifact> {

    throw new Error(myname + '.mTreeDb not yet implemented');
}

export async function wrapIttfText(schema: string, ittftext: string, context?: any):  Promise<any> {

    context = context || {};
    return new Promise(async (resolve, reject) => {
        
            const mainIttf = 'index.' + schema + '.ittf';
            const packiFiles: packiTypes.PackiFiles = {
                [ mainIttf ]: {
                    type: 'CODE', 
                    contents: ittftext
                 }
             };
            mTree(mainIttf, packiFiles, context).then((result) => {
            
                const requiredRoot = wizziMaps.ittfRootFromSchema(schema);
                if (requiredRoot == 'any' || result.mTree.nodes[0].n == requiredRoot) {
                    resolve(ittftext)
                }
                else {
                    const wrapperNode = wizziMaps.wrapperForSchema(schema);
                    wrapperNode.children.push(result.mTree.nodes[0])
                    resolve(result.mTree.toIttf(wrapperNode))
                }
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.wizzi.productions.wrapIttfText.mTree.error', err);
                return reject(err);
            }
            )
        }
        );
}

export async function generateArtifact(filePath: string, files: packiTypes.PackiFiles, context?: any, options?: GenerationOptions):  Promise<GeneratedArtifact> {

    const _options: GenerationOptions = options || {};
    return new Promise(async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
                        action: 'wizzi.productions.generateArtifact', 
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            const generator = _options.generator ? _options.generator : wizziMaps.generatorFor(filePath);
            if (generator) {
                let jsonwf: any = {};
                let generationContext: any = {};
                const ittfDocumentUri = ensurePackiFilePrefix(filePath) as string
                ;
                const siteDocumentUri = Object.keys(files).find(k => 
                
                    k.endsWith('site.json.ittf')
                );
                try {
                    jsonwf = await createJsonFsAndFactory(files);
                    ;
                    generationContext = Object.assign(context || {}, {
                        site: siteDocumentUri ? await loadModelInternal(jsonwf.wf, ensurePackiFilePrefix(siteDocumentUri), {}) : null, 
                        ...(await inferAndLoadContextJson(jsonwf.wf, files, ittfDocumentUri, 'twin'))
                        
                     })
                    ;
                    console.log("[31m%s[0m", "da dan", ittfDocumentUri);
                    jsonwf.wf.loadModelAndGenerateArtifact(ittfDocumentUri, {
                        modelRequestContext: generationContext || {}, 
                        artifactRequestContext: _options.artifactContext || {}
                     }, generator, (err: any, result: string) => {
                    
                        if (err) {
                            console.log("[31m%s[0m", err);
                            return reject(err);
                        }
                        resolve({
                            artifactContent: result, 
                            sourcePath: filePath, 
                            artifactGenerator: generator
                         })
                    }
                    )
                } 
                catch (ex) {
                    return reject(ex);
                } 
            }
            else {
                reject('No artifact generator available for document ' + filePath);
            }
        }
        );
}

export async function generateArtifactFs(filePath: string, context?: any, options?: GenerationOptions):  Promise<GeneratedArtifact> {

    const _options: GenerationOptions = options || {};
    return new Promise(async (resolve, reject) => {
        
            const generator = _options.generator ? _options.generator : wizziMaps.generatorFor(filePath);
            
            // TODO catch error
            if (generator) {
                const plugins = _options.pluginsBaseFolder && _options.plugins ? {
                        pluginsBaseFolder: _options.pluginsBaseFolder, 
                        items: _options.plugins
                     } : null;
                const wf = await createFilesystemFactory(plugins, null, {});
                try {
                    wf.loadModelAndGenerateArtifact(filePath, {
                        modelRequestContext: context || {}, 
                        artifactRequestContext: context || {}
                     }, generator, (err, result) => {
                    
                        if (err) {
                            return reject(err);
                        }
                        resolve({
                            artifactContent: result, 
                            sourcePath: filePath, 
                            artifactGenerator: generator
                         })
                    }
                    )
                } 
                catch (ex) {
                    return reject(ex);
                } 
            }
            else {
                reject('No artifact generator available for document ' + filePath);
            }
        }
        );
}

export async function generateArtifactDb(owner: string, name: string, context?: any):  Promise<GeneratedArtifact> {

    throw new Error(myname + '.generateArtifactDb not yet implemented');
}

export async function generateFolderArtifacts(sourceFolderUri: string, destFolderUri: string, files: packiTypes.PackiFiles, context?: any):  Promise<packiTypes.PackiFiles> {

    return new Promise(async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
                        action: 'wizzi.productions.generateFolderArtifacts', 
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            let jsonwf: any = {};
            try {
                jsonwf = await createJsonFsAndFactory(files);
                ;
                jsonwf.wf.generateFolderArtifacts(packiFilePrefix + sourceFolderUri, {
                    modelRequestContext: context, 
                    artifactRequestContext: context
                 }, {
                    destFolder: packiFilePrefix + destFolderUri
                 }, (err: any, result: string) => {
                
                    if (err) {
                        return reject(err);
                    }
                    jsonwf.wf.fileService.getFiles(packiFilePrefix + destFolderUri, {
                        deep: true, 
                        documentContent: true
                     }, (err: any, files: any) => {
                    
                        if (err) {
                            return reject(err);
                        }
                        const packiFiles: packiTypes.PackiFiles = {};
                        var i, i_items=files, i_len=files.length, file;
                        for (i=0; i<i_len; i++) {
                            file = files[i];
                            packiFiles[file.relPath] = {
                                type: 'CODE', 
                                contents: file.content
                             };
                        }
                        resolve(packiFiles)
                    }
                    )
                }
                )
            } 
            catch (ex) {
                return reject(ex);
            } 
        }
        );
}

export async function generateFolderArtifactsFs(sourceFolderUri: string, destFolderUri: string, context?: any):  Promise<string> {

    return new Promise(async (resolve, reject) => {
        
            try {
                const wf = await createFilesystemFactory();
                wf.generateFolderArtifacts(sourceFolderUri, {
                    modelRequestContext: context, 
                    artifactRequestContext: context
                 }, {
                    destFolder: destFolderUri
                 }, (err: any, result: string) => {
                
                    if (err) {
                        return reject(err);
                    }
                    resolve("Generated folder artifacts")
                }
                )
            } 
            catch (ex) {
                return reject(ex);
            } 
        }
        );
}

export async function generateWizziModelTypes(request: WizziModelTypesRequest) {

    return new Promise(async (resolve, reject) => {
        
            const storeKind = request.storeKind || 'filesystem';
            const mTreeBuildUpContext = Object.assign({}, request.mTreeBuildUpContext);
            const globalContext = Object.assign({}, request.globalContext);
            
            var plugins = [];
            if (request.plugins) {
                var i, i_items=request.plugins, i_len=request.plugins.length, item;
                for (i=0; i<i_len; i++) {
                    item = request.plugins[i];
                    if (plugins.indexOf(item) < 0) {
                        plugins.push(item);
                    }
                }
            }
            else {
                plugins.push('wizzi-core');
            }
            console.log('wizziProds.generateWizziModelTypes.plugins', plugins);
            for (var k in mTreeBuildUpContext) {
                console.log('- mTreeBuildUpContext property', k, mTreeBuildUpContext[k]);
            }
            for (var k in globalContext) {
                console.log('- globalContext property', k, globalContext[k]);
            }
            
            try {
                const wf = await createFilesystemFactoryWithParameters(request.pluginsBaseFolder, plugins, globalContext);
                console.log('STARTING WIZZI MODEL TYPES GENERATION FOR SCHEMA ' + request.wfschemaName);
                wf.generateModelDoms(request.wfschemaIttfDocumentUri, request.wfschemaOutputPackageFolder, request.wfschemaName, mTreeBuildUpContext, (err: any, result: any) => {
                
                    if (err) {
                        return reject({
                                message: "wizziProds.generateWizziModelTypes.generateModelDoms.error", 
                                err: {
                                    
                                 }
                             });
                    }
                    console.log("[32m%s[0m", 'WIZZI MODEL TYPES GENERATED FOR SCHEMA ' + request.wfschemaName);
                    return resolve(request.wfschemaName);
                }
                )
            } 
            catch (ex) {
                console.log("[31m%s[0m", "wizziProds.generateWizziModelTypes.error", ex);
                return reject({
                        message: "wizziProds.generateWizziModelTypes.error", 
                        err: ex
                     });
            } 
        }
        );
}

export async function loadAndTransformModel(filePath: string, files: packiTypes.PackiFiles, context?: any, options?: TransformationOptions):  Promise<TransformedModel> {

    return new Promise(async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
                        action: 'wizzi.productions.transformModel', 
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            const transformer = options && options.transformer ? options.transformer : wizziMaps.transformerFor(filePath);
            if (transformer) {
                let jsonwf: any = {};
                let transformationContext: any = {};
                const ittfDocumentUri = ensurePackiFilePrefix(filePath) as string
                ;
                const siteDocumentUri = Object.keys(files).find(k => 
                
                    k.endsWith('site.json.ittf')
                );
                try {
                    jsonwf = await createJsonFsAndFactory(files);
                    ;
                    transformationContext = {
                        site: siteDocumentUri ? await loadModelInternal(jsonwf.wf, ensurePackiFilePrefix(siteDocumentUri), {}) : null, 
                        ...(await inferAndLoadContextJson(jsonwf.wf, files, ittfDocumentUri, 'twin'))
                        
                     };
                    jsonwf.wf.loadAndTransformModel(ittfDocumentUri, {
                        modelRequestContext: transformationContext
                     }, transformer, (err: any, result: any) => {
                    
                        if (err) {
                            return reject(err);
                        }
                        resolve({
                            transformResult: result, 
                            sourcePath: filePath, 
                            modelTransformer: transformer
                         })
                    }
                    )
                } 
                catch (ex) {
                    return reject(ex);
                } 
            }
            else {
                reject('No model transformer available for document ' + filePath);
            }
        }
        );
}

export async function transformModel(object: any, context?: any, options?: TransformationOptions):  Promise<TransformedModel> {

    const _options: TransformationOptions = options || {};
    return new Promise(async (resolve, reject) => {
        
            const transformer = _options.transformer;
            
            // TODO catch error
            if (transformer) {
                const plugins = _options.pluginsBaseFolder && _options.plugins ? {
                        pluginsBaseFolder: _options.pluginsBaseFolder, 
                        items: _options.plugins
                     } : null;
                const wf = await createFilesystemFactory(plugins, null, {});
                const transformationContext = {
                    modelRequestContext: context || {}
                 };
                wf.transformModel(object, transformer, {
                    modelRequestContext: transformationContext
                 }, (err: any, result: any) => {
                
                    if (err) {
                        return reject(err);
                    }
                    resolve({
                        transformResult: result, 
                        sourcePath: object, 
                        modelTransformer: transformer
                     })
                }
                )
            }
            else {
                reject('No model transformer in options');
            }
        }
        );
}

export async function loadAndTransformModelFs(filePath: string, context?: any, options?: TransformationOptions):  Promise<TransformedModel> {

    const _options: TransformationOptions = options || {};
    return new Promise(async (resolve, reject) => {
        
            const transformer = _options.transformer ? _options.transformer : wizziMaps.transformerFor(filePath);
            
            // TODO catch error
            if (transformer) {
                const plugins = _options.pluginsBaseFolder && _options.plugins ? {
                        pluginsBaseFolder: _options.pluginsBaseFolder, 
                        items: _options.plugins
                     } : null;
                const wf = await createFilesystemFactory(plugins, null, {});
                const transformationContext = {
                    modelRequestContext: context || {}
                 };
                wf.loadAndTransformModel(filePath, {
                    modelRequestContext: transformationContext
                 }, transformer, (err: any, result: any) => {
                
                    if (err) {
                        return reject(err);
                    }
                    resolve({
                        transformResult: result, 
                        sourcePath: filePath, 
                        modelTransformer: transformer
                     })
                }
                )
            }
            else {
                reject('No model transformer available for document ' + filePath);
            }
        }
        );
}

export async function metaGenerate(metaCtx: any, factoryPlugins?: any, metaPlugins?: any, globalContext?: { 
    [k: string]: any;
}):  Promise<packiTypes.PackiFiles> {

    return new Promise(async (resolve, reject) => {
        
            console.log(myname, 'metaGenerate.metaCtx', Object.keys(metaCtx), __filename);
            let jsonwf: any = {};
            try {
                jsonwf = await createJsonFsAndFactory({}, factoryPlugins, metaPlugins);
                ;
                jsonwf.wf.metaGenerate({
                    metaCtx: metaCtx, 
                    paths: {
                        metaProductionTempFolder: '___template', 
                        metaProductionWizziFolder: '.wizzi'
                     }, 
                    globalContext: {
                        
                     }
                 }, (err: any, wizziPackiFiles: packiTypes.PackiFiles) => {
                
                    if (err) {
                        return reject(err);
                    }
                    resolve(wizziPackiFiles)
                }
                )
            } 
            catch (ex) {
                return reject(ex);
            } 
        }
        );
}

export async function executeJob(wfjobFilePath: string, packiFiles: packiTypes.PackiFiles, context: any):  Promise<JsonFs> {

    return new Promise(async (resolve, reject) => {
        
            if (!verify.isObject(packiFiles)) {
                return reject({
                        action: 'wizzi.productions.executeJob', 
                        message: 'packiFiles parameter must be an object of type PackiFiles', 
                        packiFiles
                     });
            }
            wfjobFilePath = ensurePackiFilePrefix(wfjobFilePath);
            const jsonwf = await createJsonFsAndFactory(packiFiles);
            jsonwf.wf.executeJob({
                name: '', 
                path: wfjobFilePath, 
                productionOptions: {
                    
                 }, 
                globalContext: context || {}
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(jsonwf.jsonFs);
            }
            )
        }
        );
}

export async function executeJobs(packiFiles: packiTypes.PackiFiles, context: any):  Promise<JsonFs> {

    return new Promise(
        // TODO catch error
        async (resolve, reject) => {
        
            const wfjobFilePaths = Object.keys(packiFiles).filter(k => 
            
                k.endsWith('.wfjob.ittf')
            );
            const jsonwf = await createJsonFsAndFactory(packiFiles);
            const execJob = (index: number):  void => {
            
                if (index == wfjobFilePaths.length) {
                    return resolve(jsonwf.jsonFs);
                }
                const wfjobFilePath = ensurePackiFilePrefix(wfjobFilePaths[index]);
                jsonwf.wf.executeJob({
                    name: '', 
                    path: wfjobFilePath, 
                    productionOptions: {
                        
                     }, 
                    globalContext: context || {}
                 }, (err, result) => {
                
                    if (err) {
                        return reject(err);
                    }
                    execJob(index + 1);
                }
                )
            }
            ;
            execJob(0);
        }
        );
}

export async function executeJobFs(request: WizziJobTypesRequest):  Promise<any> {

    return new Promise(async (resolve, reject) => {
        
            try {
                const globalContext = Object.assign({}, request.globalContext);
                
                var plugins = [];
                if (request.plugins) {
                    var i, i_items=request.plugins, i_len=request.plugins.length, item;
                    for (i=0; i<i_len; i++) {
                        item = request.plugins[i];
                        if (plugins.indexOf(item) < 0) {
                            plugins.push(item);
                        }
                    }
                }
                else {
                    plugins.push('wizzi-core');
                }
                const wf = await createFilesystemFactoryWithParameters(request.pluginsBaseFolder, plugins, globalContext);
                console.log('STARTING WIZZI JOB', request.wfjobIttfDocumentUri);
                wf.executeJob({
                    name: request.wfjobName || path.basename(request.wfjobIttfDocumentUri), 
                    path: request.wfjobIttfDocumentUri, 
                    productionOptions: {
                        
                     }, 
                    globalContext: globalContext
                 }, (err: any, result: any) => {
                
                    if (err) {
                        return reject({
                                message: "wizziProds.executeJobFs.wf.executeJob.error", 
                                err: {
                                    
                                 }
                             });
                    }
                    console.log("[32m%s[0m", 'WIZZI JOB Executed', request.wfjobIttfDocumentUri);
                    return resolve(result);
                }
                )
            } 
            catch (ex) {
                console.log("[31m%s[0m", "wizziProds.executeJobFs.error", ex);
                return reject({
                        message: "wizziProds.executeJobFs.error", 
                        err: ex
                     });
            } 
        }
        );
}

export async function inferAndLoadContextJson(wf: wizzi.WizziFactory, files: packiTypes.PackiFiles, filePath: string, exportName: string):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
                        action: 'wizzi.productions.inferAndLoadContextJson', 
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            const pf = wizziMaps.parseFilePath(filePath);
            if (pf.isIttfDocument && pf.schema !== 'json') {
                var twinJsonBaseName = pf.seedname + '.json.ittf';
                const twinDocumentUri = Object.keys(files).find(k => 
                
                    k.endsWith('/' + twinJsonBaseName)
                );
                if (twinDocumentUri) {
                    loadModelInternal(wf, ensurePackiFilePrefix(twinDocumentUri), {}).then(model => 
                    
                        resolve({
                            [exportName]: model
                         })
                    ).catch(err => 
                    
                        reject(err)
                    )
                }
                else {
                    resolve({})
                }
            }
            else {
                resolve({})
            }
        }
        );
}

export async function inferAndLoadContextFs(filePath: string, exportName: string):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            const pf = wizziMaps.parseFilePath(filePath);
            if (pf.isIttfDocument && pf.schema !== 'json') {
                var twinJsonPath = path.join(path.dirname(filePath), pf.seedname + '.json.ittf');
                if (fs.existsSync(twinJsonPath)) {
                    loadModelFs(twinJsonPath, {}).then(model => 
                    
                        resolve({
                            [exportName]: model
                         })
                    ).catch(err => 
                    
                        reject(err)
                    )
                }
                else {
                    resolve({})
                }
            }
            else {
                resolve({})
            }
        }
        );
}

export async function scanIttfDocument(mainIttf: string, packiFiles: packiTypes.PackiFiles, rootFolder: string):  Promise<ittfGraph.IttfDocumentGraph> {

    throw new Error(myname + '.scanIttfDocument not yet implemented');
}

export async function scanIttfDocumentFs(filePath: string, rootFolder: string):  Promise<ittfGraph.IttfDocumentGraph> {

    return new Promise((resolve, reject) => 
        
            ittfScanner.scanIttfDocument(filePath, {
                rootFolder
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
            )
        );
}

export async function scanIttfFolder(filePath: string, rootFolder: string):  Promise<ittfScanner.FolderBrowseResult> {

    return new Promise((resolve, reject) => 
        
            ittfScanner.browseFolder(filePath, {
                rootFolder
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
            )
        );
}

export async function scanIttfDocumentDb(owner: string, name: string, rootFolder: string):  Promise<ittfGraph.IttfDocumentGraph> {

    throw new Error(myname + '.scanIttfDocumentDb not yet implemented');
}

export async function folderBrowseToPackiFiles(folderBrowse: ittfScanner.FolderBrowseResult):  Promise<packiTypes.PackiFiles> {

    return new Promise((resolve, reject) => {
        
            const packiFiles: packiTypes.PackiFiles = {};
            folderBrowse.fsitems.map((fsitem) => {
            
                if (fsitem.isFolder == false) {
                    packiFiles[fsitem.uri] = {
                        type: "CODE", 
                        contents: fsitem.content
                     };
                }
            }
            )
            resolve(packiFiles);
        }
        );
}

export async function folderFsToPackiFiles(folderPath: string):  Promise<packiTypes.PackiFiles> {

    return new Promise((resolve, reject) => {
        
            const fsfile = fSystem.vfile();
            const packiFiles: packiTypes.PackiFiles = {};
            try {
                fsfile.getFiles(folderPath, {
                    deep: true, 
                    documentContent: true
                 }, (err: any, result: fSystem.FileDef[]) => {
                
                    if (err) {
                        console.log("[31m%s[0m", "wizzi.productions.folderFsToPackiFiles", err);
                        return reject({
                                message: "wizzi.productions.folderFsToPackiFiles", 
                                err
                             });
                    }
                    result.map(fsitem => 
                    
                        packiFiles[fsitem.relPath] = {
                            type: "CODE", 
                            contents: fsitem.content || ""
                         }
                    )
                    return resolve(packiFiles);
                }
                )
            } 
            catch (ex) {
                return reject({
                        message: "wizzi.productions.folderFsToPackiFiles", 
                        err: ex
                     });
            } 
        }
        );
}

export async function packiFilesToFolderFs(folderPath: string, files: packiTypes.PackiFiles):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            try {
                const fsfile = fSystem.vfile();
                fsfile.deleteFolder(folderPath, (err: any, result: any) => {
                
                    if (err) {
                        console.log("[31m%s[0m", "wizzi.productions.packiFilesTofolderFs.fsfile.deleteFolder", err);
                        return reject({
                                message: "wizzi.productions.packiFilesTofolderFs.fsfile.deleteFolder", 
                                err
                             });
                    }
                    for (var k in files) {
                        var contents = files[k].contents;
                        fsfile.write(path.join(folderPath, k), contents)
                    }
                    return resolve({
                            message: "Folder replaced"
                         });
                }
                )
            } 
            catch (ex) {
                console.log("[31m%s[0m", "Exception. wizzi.productions.packiFilesTofolderFs");
                return reject({
                        message: "Exception. wizzi.productions.packiFilesTofolderFs", 
                        err: ex
                     });
            } 
        }
        );
}
export async function wizzifyFs(filePath: string):  Promise<string> {

    return new Promise(async (resolve, reject) => {
        
            var extension = path.extname(filePath);
            var schema = wizziMaps.schemaFromExtension(extension);
            const wf = await createFilesystemFactory();
            wf.getWizziIttf(filePath, schema, (err, ittfDocument) => {
            
                if (err) {
                    reject(err)
                }
                return resolve(ittfDocument);
            }
            )
        }
        );
}

export async function wizzify(files: packiTypes.PackiFiles):  Promise<packiTypes.PackiFiles> {

    return new Promise(async (resolve, reject) => {
        
            var result: packiTypes.PackiFiles = {};
            let jsonwf: any = {};
            jsonwf = await createJsonFsAndFactory(files);
            ;
            for (const k of Object.keys(files)) {
                var extension = path.extname(k);
                try {
                    const ittfResult = await handleWizzify(jsonwf.wf, extension, files[k].contents);
                    result[k + '.ittf'] = {
                        type: 'CODE', 
                        contents: ittfResult
                     };
                } 
                catch (ex) {
                    result[k + '.ittf'] = {
                        type: 'CODE', 
                        contents: stringify(ex, null, 2)
                     };
                } 
            }
            return resolve(result);
        }
        );
}

function handleWizzify(wf: any, extension: string, codeSnippet: string):  Promise<string> {

    return new Promise(async (resolve, reject) => {
        
            var schema = wizziMaps.schemaFromExtension(extension);
            if (schema) {
                wf.getWizziIttfFromText(codeSnippet, schema, (err, ittfDocument) => {
                
                    if (err) {
                        reject(err)
                    }
                    return resolve(ittfDocument);
                }
                )
            }
            else {
                const ittfResult = [extension.substring(1)];
                ittfResult.push('\t$' + '*');
                ittfResult.push(codeSnippet);
                ittfResult.push('\t*' + '$');
                resolve(ittfResult.join('\n'))
            }
        }
        );
}
export async function getCheatsheetList():  Promise<string> {

    return new Promise(async (resolve, reject) => {
        
            var files: packiTypes.PackiFiles = {};
            let jsonwf: any = {};
            jsonwf = await createJsonFsAndFactory(files);
            ;
            return resolve(jsonwf.wf.getCheatsheetList());
        }
        );
}
export async function getCheatsheet(schemaName):  Promise<string> {

    return new Promise(async (resolve, reject) => {
        
            var files: packiTypes.PackiFiles = {};
            let jsonwf: any = {};
            jsonwf = await createJsonFsAndFactory(files);
            ;
            jsonwf.wf.getCheatsheet(schemaName, (err: any, result: any) => {
            
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            }
            )
        }
        );
}
export async function getCodeASTFs(filePath: string):  Promise<any> {

    return new Promise(async (resolve, reject) => {
        
            var extension = path.extname(filePath);
            var schema = wizziMaps.schemaFromExtension(extension);
            const wf = await createFilesystemFactory();
            wf.getCodeAST(filePath, schema, (err, ittfDocument) => {
            
                if (err) {
                    reject(err)
                }
                return resolve(ittfDocument);
            }
            )
        }
        );
}

export async function getCodeAST(files: packiTypes.PackiFiles):  Promise<packiTypes.PackiFiles> {

    return new Promise(async (resolve, reject) => {
        
            var result: packiTypes.PackiFiles = {};
            let jsonwf: any = {};
            jsonwf = await createJsonFsAndFactory(files);
            ;
            for (const k of Object.keys(files)) {
                var extension = path.extname(k);
                try {
                    const astResult = await handleGetCodeAST(jsonwf.wf, extension, files[k].contents);
                    result[k + '.ast'] = {
                        type: 'CODE', 
                        contents: stringify(astResult, null, 2)
                     };
                } 
                catch (ex) {
                    result[k + '.ast'] = {
                        type: 'CODE', 
                        contents: stringify(ex, null, 2)
                     };
                } 
            }
            return resolve(result);
        }
        );
}

function handleGetCodeAST(wf: any, extension: string, codeSnippet: string):  Promise<any> {

    return new Promise(async (resolve, reject) => {
        
            var schema = wizziMaps.schemaFromExtension(extension);
            if (schema) {
                wf.getCodeASTFromText(codeSnippet, schema, function(err: any, astResult: any) {
                
                    if (err) {
                        reject(err)
                    }
                    resolve(astResult)
                })
            }
            else {
                const ittfResult = {
                    message: "The file has an invalid schema."
                 };
                resolve(ittfResult)
            }
        }
        );
}

// TODO cache results!

export async function loadSiteJsonModel(relPath: string, context?: any) {

    context = Object.assign({}, {
        isWizziStudio: true
     }, context || {})
    ;
    return new Promise((resolve, reject) => 
        
            loadModelFs(path.join(config.ittfPath, 'models', relPath), context).then(model => 
            
                resolve(model)
            ).catch(err => 
            
                reject(err)
            )
        
        );
}
function jsonFsToPackiFiles(jsonFs: JsonFs, folder: string):  Promise<packiTypes.PackiFiles> {

    return new Promise((resolve, reject) => {
        
            const packiFiles: packiTypes.PackiFiles = {};
            jsonFs.toFiles({
                removeRoot: packiFilePrefixExtract
             }, (err: any, files: fSystem.FileDef[]) => {
            
                if (err) {
                    return reject(err);
                }
                files.forEach((file) => {
                
                    if (file.relPath.startsWith(folder + '/')) {
                        packiFiles[file.relPath] = {
                            type: 'CODE', 
                            contents: file.content, 
                            generated: true
                         };
                    }
                }
                )
                resolve(packiFiles)
            }
            )
        }
        );
}
