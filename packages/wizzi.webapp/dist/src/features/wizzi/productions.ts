/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\wizzi\productions.ts.ittf
    utc time: Sat, 02 Jul 2022 09:02:58 GMT
*/
import path from 'path';
import fs from 'fs';
import wizzi from 'wizzi';
import wizziTools from 'wizzi-tools';
import {ittfDocumentScanner, folderBrowse, IttfMTreeState, FolderBrowseResult, verify} from 'wizzi-utils';
import {packiFilePrefix} from '../config/env';
import {packiTypes} from '../packi';
import {config} from '../config';
import {createFsJsonAndFactory, ensurePackiFilePrefix, createFilesystemFactory} from './factory';
import {GeneratedArtifact, TransformedModel} from './types';
import {FsJson} from 'wizzi-repo';
const myname = 'features/wizzi/productions';

export async function loadModel(filePath: string, files: packiTypes.PackiFiles, context?: any):  Promise<wizzi.WizziModel> {

    return new Promise(async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
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

export async function loadModelFs(filePath: string, context: any):  Promise<wizzi.WizziModel> {

    return new Promise(async (resolve, reject) => {
        
            const schemaName = schemaFromFilePath(filePath);
            if (!schemaName) {
                return reject('File is not a known ittf document: ' + filePath);
            }
            const wf = await createFilesystemFactory();
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
        
            const schemaName = schemaFromFilePath(filePath);
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

export async function mTreeDebugInfo(filePath: string, files: packiTypes.PackiFiles, context: any):  Promise<any> {

    return new Promise(async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
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

export async function mTree(filePath: string, files: packiTypes.PackiFiles, context: any):  Promise<any> {

    return new Promise(async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
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
                    mTreeIttf: mTree.toIttf()
                 })
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
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            const generator = options && options.generator ? options.generator : generatorFor(filePath);
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
        
            const generator = options && options.generator ? options.generator : generatorFor(filePath);
            
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

export async function generateFolderArtifacts(sourceFolderUri: string, destFolderUri: string, files: packiTypes.PackiFiles, context?: any):  Promise<packiTypes.PackiFiles> {

    return new Promise(
        // loog myname, 'generateFolderArtifacts.sourceFolderUri,destFolderUri', sourceFolderUri, destFolderUri
        async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
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
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            const transformer = options && options.transformer ? options.transformer : transformerFor(filePath);
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
        
            const transformer = options && options.transformer ? options.transformer : transformerFor(filePath);
            
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

export async function executeJob(filePath: string, files: packiTypes.PackiFiles, context: any):  Promise<FsJson> {

    return new Promise(async (resolve, reject) => {
        
            if (!verify.isObject(files)) {
                return reject({
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            const ittfDocumentUri = ensurePackiFilePrefix(filePath);
            const jsonwf = await createFsJsonAndFactory(files);
            jsonwf.wf.executeJob({
                name: '', 
                path: ittfDocumentUri, 
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

export async function executeJobs(files: packiTypes.PackiFiles, context: any):  Promise<FsJson> {

    return new Promise(
        // loog 'Executing jobs', jobDocumentUris, 'files', Object.keys(files)
        async (resolve, reject) => {
        
            const jobDocumentUris = Object.keys(files).filter(k => 
            
                k.endsWith('.wfjob.ittf')
            );
            const jsonwf = await createFsJsonAndFactory(files);
            const execJob = 
            // loog 'Executing job', ittfDocumentUri
            (index: number):  void => {
            
                
                // loog 'Jobs executed.'
                if (index == jobDocumentUris.length) {
                    return resolve(jsonwf.fsJson);
                }
                const ittfDocumentUri = ensurePackiFilePrefix(jobDocumentUris[index]);
                jsonwf.wf.executeJob({
                    name: '', 
                    path: ittfDocumentUri, 
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
                        message: 'files parameter must be an object of type PackiFiles', 
                        files
                     });
            }
            const pf = parseFilePath(filePath);
            
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
        
            const pf = parseFilePath(filePath);
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

export async function scanIttfDocument(filePath: string, rootFolder: string):  Promise<IttfMTreeState> {

    return new Promise((resolve, reject) => 
        
            ittfDocumentScanner.scan(filePath, {
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

export async function scanIttfFolder(filePath: string, rootFolder: string):  Promise<FolderBrowseResult> {

    return new Promise((resolve, reject) => 
        
            folderBrowse.scan(filePath, {
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
        
            var schema = extSchemaMap[extension];
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

const extSchemaMap: { 
    [k: string]: string;
} = {
    '.js': 'js', 
    '.jsx': 'js', 
    '.ts': 'ts', 
    '.tsx': 'ts', 
    '.html': 'html', 
    '.css': 'css', 
    '.svg': 'svg', 
    '.md': 'md', 
    '.xml': 'xml', 
    '.json': 'json', 
    '.graphql': 'graphql'
 };

const schemaModuleMap: { 
    [k: string]: string;
} = {
    css: 'css/document', 
    graphql: 'graphql/document', 
    ittf: 'ittf/document', 
    js: 'js/module', 
    json: 'json/document', 
    html: 'html/document', 
    md: 'md/document', 
    scss: 'scss/document', 
    svg: 'svg/document', 
    text: 'text/document', 
    ts: 'ts/module', 
    vml: 'vml/document', 
    vue: 'vue/document', 
    xml: 'xml/document'
 };

function generatorFor(filePath: string):  string | undefined {

    const pf = parseFilePath(filePath);
    if (pf.isIttfDocument) {
        return schemaModuleMap[pf.schema];
    }
    return undefined;
}

const schemaTransformerMap: { 
    [k: string]: string;
} = {
    meta: 'ittf/cheatsheet'
 };

function transformerFor(filePath: string):  string | undefined {

    const pf = parseFilePath(filePath);
    if (pf.isIttfDocument) {
        return schemaTransformerMap[pf.schema];
    }
    return undefined;
}

function schemaFromFilePath(filePath: string):  string | undefined {

    const pf = parseFilePath(filePath);
    if (pf.isIttfDocument) {
        return pf.schema;
    }
    return undefined;
}

type parsedFilePath = { 
    seedname: string;
    schema: string;
    isIttfDocument: boolean;
};

export function parseFilePath(filePath: string):  parsedFilePath {

    const nameParts = path.basename(filePath).split('.');
    if (nameParts[nameParts.length - 1] === 'ittf') {
        return {
                isIttfDocument: true, 
                schema: nameParts[nameParts.length - 2], 
                seedname: nameParts.slice(0, -2).join('.')
             };
    }
    else {
        return {
                isIttfDocument: false, 
                schema: nameParts[nameParts.length - 1], 
                seedname: nameParts.slice(0, -1).join('.')
             };
    }
}
