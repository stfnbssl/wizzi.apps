/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\wizzi\productions.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import path from 'path';
import fs from 'fs';
import wizzi from 'wizzi';
import wizziTools from 'wizzi-tools';
import {ittfScanner, ittfGraph, verify} from 'wizzi-utils';
import {packiFilePrefix} from '../config/env';
import {packiTypes} from '../packi';
import {config} from '../config';
import * as wizziMaps from './maps';
import {createFsJsonAndFactory, ensurePackiFilePrefix, createFilesystemFactory} from './factory';
import {GeneratedArtifact, TransformedModel} from './types';
import {FsJson} from 'wizzi-repo';
const myname = 'features/wizzi/productions';

export async function loadModel(filePath: string, files: packiTypes.PackiFiles, context?: any):  Promise<wizzi.WizziModel> {

    return new Promise(async (resolve, reject) => {
        
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
            jsonwf = await createFsJsonAndFactory(files);
            ;
            jsonwf.wf.loadModel(ittfDocumentUri, {
                mTreeBuildupContext: context
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

export async function loadModelFs(filePath: string, context: any):  Promise<wizzi.WizziModel> {

    return new Promise(async (resolve, reject) => {
        
            const schemaName = wizziMaps.schemaFromFilePath(filePath);
            if (!schemaName) {
                return reject('File is not a known ittf document: ' + filePath);
            }
            const wf = await createFilesystemFactory();
            wf.loadModel(schemaName, filePath, {
                mTreeBuildupContext: context
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
                mTreeBuildupContext: context
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

export async function mTreeBuildupScript(filePath: string, files: packiTypes.PackiFiles, context: any):  Promise<any> {

    return new Promise(async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
                        action: 'wizzi.productions.mTreeBuildupScript', 
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            const ittfDocumentUri = ensurePackiFilePrefix(filePath) as string
            ;
            let jsonwf: any = {};
            jsonwf = await createFsJsonAndFactory(files);
            ;
            jsonwf.wf.loadMTreeDebugInfo(ittfDocumentUri, context, (err: any, buildUpScript: string) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(buildUpScript)
            }
            )
        }
        );
}

export async function mTreeBuildupScriptFs(filePath: string, context: any):  Promise<any> {

    throw new Error(myname + '.mTreeBuildupScriptFs not yet implemented');
}

export async function mTreeBuildupScriptDb(owner: string, name: string, context?: any):  Promise<GeneratedArtifact> {

    throw new Error(myname + '.mTreeBuildupScriptDB not yet implemented');
}

export async function mTree(filePath: string, files: packiTypes.PackiFiles, context: any):  Promise<any> {

    return new Promise(async (resolve, reject) => {
        
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
            jsonwf = await createFsJsonAndFactory(files);
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
            console.log(myname, 'wrapIttfText', 'mainIttf',mainIttf, __filename);
            mTree(mainIttf, packiFiles, context).then((result) => {
            
                const requiredRoot = wizziMaps.ittfRootFromSchema(schema);
                console.log(myname, 'wrapIttfText', 'root node', result.mTree.nodes[0].n, 'requiredRoot', requiredRoot, __filename);
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
            
                console.log('features.wizzi.productions.wrapIttfText.mTree.error', err, __filename);
                return reject(err);
            }
            )
        }
        );
}

export async function generateArtifact(filePath: string, files: packiTypes.PackiFiles, context?: any, options?: any):  Promise<GeneratedArtifact> {

    return new Promise(
        // loog 'wizzi.productions.generateArtifact.using artifact generator', generator
        async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
                        action: 'wizzi.productions.generateArtifact', 
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            const generator = options && options.generator ? options.generator : wizziMaps.generatorFor(filePath);
            if (generator) {
                let jsonwf: any = {};
                let generationContext: any = {};
                const ittfDocumentUri = ensurePackiFilePrefix(filePath) as string
                ;
                const siteDocumentUri = Object.keys(files).find(k => 
                
                    k.endsWith('site.json.ittf')
                );
                try {
                    jsonwf = await createFsJsonAndFactory(files);
                    ;
                    generationContext = Object.assign(context || {}, {
                        site: siteDocumentUri ? await loadModelInternal(jsonwf.wf, ensurePackiFilePrefix(siteDocumentUri), {}) : null, 
                        ...(await inferAndLoadContextJson(jsonwf.wf, files, ittfDocumentUri, 'twin'))
                        
                     })
                    ;
                    // loog myname + 'generateArtifact.context', Object.keys(generationContext)
                    jsonwf.wf.loadModelAndGenerateArtifact(ittfDocumentUri, {
                        modelRequestContext: generationContext || {}, 
                        artifactRequestContext: generationContext || {}
                     }, generator, (err: any, result: string) => {
                    
                        if (err) {
                            return reject(err);
                        }
                        // loog 'Generated artifact', result
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

export async function generateArtifactFs(filePath: string, context?: any, options?: any):  Promise<GeneratedArtifact> {

    return new Promise(async (resolve, reject) => {
        
            const generator = options && options.generator ? options.generator : wizziMaps.generatorFor(filePath);
            
            // loog 'wizzi.productions.using artifact generator', generator
            
            // loog myname + '.generateArtifactFs.context', Object.keys(context || {})
            if (generator) {
                const wf = await createFilesystemFactory();
                try {
                    wf.loadModelAndGenerateArtifact(filePath, {
                        modelRequestContext: context || {}, 
                        artifactRequestContext: context || {}
                     }, generator, 
                    // loog myname + '.generateArtifactFs.err', err
                    (err, result) => {
                    
                        if (err) {
                            return reject(err);
                        }
                        // loog 'Generated artifact', result
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

    return new Promise(
        // loog myname, 'generateFolderArtifacts.sourceFolderUri,destFolderUri', sourceFolderUri, destFolderUri
        async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
                        action: 'wizzi.productions.generateFolderArtifacts', 
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            let jsonwf: any = {};
            try {
                jsonwf = await createFsJsonAndFactory(files);
                ;
                jsonwf.wf.generateFolderArtifacts(packiFilePrefix + sourceFolderUri, {
                    modelRequestContext: context, 
                    artifactRequestContext: context
                 }, {
                    destFolder: packiFilePrefix + destFolderUri
                 }, 
                // loog myname, 'generateFolderArtifacts.result', result
                (err: any, result: string) => {
                
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

export async function transformModel(filePath: string, files: packiTypes.PackiFiles, context?: any, options?: any):  Promise<TransformedModel> {

    return new Promise(
        // loog 'wizzi.productions.transformModel.using artifact transformer', transformer
        async (resolve, reject) => {
        
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
                    jsonwf = await createFsJsonAndFactory(files);
                    ;
                    transformationContext = {
                        site: siteDocumentUri ? await loadModelInternal(jsonwf.wf, ensurePackiFilePrefix(siteDocumentUri), {}) : null, 
                        ...(await inferAndLoadContextJson(jsonwf.wf, files, ittfDocumentUri, 'twin'))
                        
                     };
                    // loog 'wizzi.productions.transformModel.transformationContext', Object.keys(transformationContext)
                    jsonwf.wf.loadAndTransformModel(ittfDocumentUri, {
                        modelRequestContext: transformationContext
                     }, transformer, (err: any, result: any) => {
                    
                        if (err) {
                            return reject(err);
                        }
                        // loog 'Transformed result', result
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

export async function transformModelFs(filePath: string, context?: any, options?: any):  Promise<TransformedModel> {

    return new Promise(async (resolve, reject) => {
        
            const transformer = options && options.transformer ? options.transformer : wizziMaps.transformerFor(filePath);
            
            // loog 'wizzi.productions.using model transformer', transformer
            if (transformer) {
                const wf = await createFilesystemFactory();
                const transformationContext = {
                    modelRequestContext: context || {}
                 };
                wf.loadAndTransformModel(filePath, {
                    modelRequestContext: transformationContext
                 }, transformer, (err: any, result: any) => {
                
                    if (err) {
                        return reject(err);
                    }
                    // loog 'Transformed model', result
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

export async function executeJob(wfjobFilePath: string, packiFiles: packiTypes.PackiFiles, context: any):  Promise<FsJson> {

    return new Promise(async (resolve, reject) => {
        
            if (!verify.isObject(packiFiles)) {
                return reject({
                        action: 'wizzi.productions.executeJob', 
                        message: 'packiFiles parameter must be an object of type PackiFiles', 
                        packiFiles
                     });
            }
            wfjobFilePath = ensurePackiFilePrefix(wfjobFilePath);
            const jsonwf = await createFsJsonAndFactory(packiFiles);
            jsonwf.wf.executeJob({
                name: '', 
                path: wfjobFilePath, 
                productionOptions: {
                    
                 }, 
                globalContext: context || {}
             }, 
            // loog 'Job executed. result', result
            (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(jsonwf.fsJson);
            }
            )
        }
        );
}

export async function executeJobs(packiFiles: packiTypes.PackiFiles, context: any):  Promise<FsJson> {

    return new Promise(
        // loog 'Executing jobs', wfjobFilePaths, 'packiFiles', Object.keys(packiFiles)
        async (resolve, reject) => {
        
            const wfjobFilePaths = Object.keys(packiFiles).filter(k => 
            
                k.endsWith('.wfjob.ittf')
            );
            const jsonwf = await createFsJsonAndFactory(packiFiles);
            const execJob = 
            // loog 'Executing job', wfjobFilePath
            (index: number):  void => {
            
                
                // loog 'Jobs executed.'
                if (index == wfjobFilePaths.length) {
                    return resolve(jsonwf.fsJson);
                }
                const wfjobFilePath = ensurePackiFilePrefix(wfjobFilePaths[index]);
                jsonwf.wf.executeJob({
                    name: '', 
                    path: wfjobFilePath, 
                    productionOptions: {
                        
                     }, 
                    globalContext: context || {}
                 }, 
                // loog 'Job executed. result', result
                (err, result) => {
                
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
            
            // loog 'features.wizzi.productions.inferAndLoadContextJson.twinJsonBaseName', twinJsonBaseName
            
            // loog 'features.wizzi.productions.inferAndLoadContextJson.twinDocumentUri', twinDocumentUri, Object.keys(files)
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

export async function scanIttfDocument(mainIttf: string, packiFiles: packiTypes.PackiFiles, rootFolder: string):  Promise<ittfGraph.IttfDocumentGraph> {

    throw new Error(myname + '.scanIttfDocument not yet implemented');
}

export async function scanIttfDocumentDb(owner: string, name: string, rootFolder: string):  Promise<ittfGraph.IttfDocumentGraph> {

    throw new Error(myname + '.scanIttfDocumentDb not yet implemented');
}

export async function wizzify(files: packiTypes.PackiFiles):  Promise<packiTypes.PackiFiles> {

    return new Promise(async (resolve, reject) => {
        
            var result: packiTypes.PackiFiles = {};
            for (const k of Object.keys(files)) {
                var extension = path.extname(k);
                // loog 'productions.wizzify', k, extension
                const ittfResult = await handleWizzify(extension, files[k].contents);
                result[k + '.ittf'] = {
                    type: 'CODE', 
                    contents: ittfResult
                 };
            }
            return resolve(result);
        }
        );
}

function handleWizzify(extension: string, codeSnippet: string):  Promise<string> {

    return new Promise(async (resolve, reject) => {
        
            var schema = wizziMaps.schemaFromExtension(extension);
            if (schema) {
                wizziTools.wizzify(schema, codeSnippet, {}, function(err: any, ittfResult: string) {
                
                    if (err) {
                        reject(err)
                    }
                    resolve(ittfResult)
                })
            }
            else {
                reject(new Error('Extension "' + extension + '" has no wizzifier'))
            }
        }
        );
}
