/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\api\artifact.ts.ittf
    utc time: Sat, 02 Jul 2022 04:01:54 GMT
*/
import path from 'path';
import NodeCache from 'node-cache';
import {GetArtifactProductionModel} from '../mongo/artifact';
import {IArtifactProductionModel} from '../types';
import {ValidateResult, CRUDResult} from '../../types';
import {packiTypes} from '../../packi';
import {tFolderApi} from '../index';
import {ITFolderModel} from '../types';
import {wizziProds} from '../../wizzi';

const myname = 'features.production.api.artifact';

const artifactCache = new NodeCache({
    stdTTL: 120, 
    checkperiod: 60
 });

export async function validateArtifactProduction(owner: string, name: string) {

    const ArtifactProduction = GetArtifactProductionModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            ArtifactProduction.find(query, 
            // loog myname, 'validateArtifactProduction', 'ArtifactProduction.find', 'error', err
            (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'artifact production already exists'
                         });
                }
                resolve({
                    isValid: true
                 })
            }
            )
        }
        );
}

export async function getListArtifactProduction(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    console.log(myname, 'getListArtifactProduction', 'options', options)
    
    const ArtifactProduction = GetArtifactProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = ArtifactProduction.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find(
            // loog myname, 'getListArtifactProduction', 'ArtifactProduction.find', 'Object.keys(result)', Object.keys(result)
            (err, result) => {
            
                if (err) {
                    console.log(myname, 'getListArtifactProduction', 'ArtifactProduction.find', 'error', err);
                    return reject(err);
                }
                const resultItem = [];
                var i, i_items=result, i_len=result.length, item;
                for (i=0; i<i_len; i++) {
                    item = result[i];
                    const item_obj = {
                        owner: item.owner, 
                        name: item.name, 
                        description: item.description, 
                        mainIttf: item.mainIttf, 
                        wizziSchema: item.wizziSchema, 
                        packiFiles: item.packiFiles
                     };
                    resultItem.push(item_obj)
                }
                resolve({
                    oper: 'getList', 
                    ok: true, 
                    item: resultItem
                 })
            }
            )
        }
        );
}

export async function getArtifactProduction(owner: string, name: string):  Promise<CRUDResult> {

    
    console.log(myname, 'getArtifactProduction', owner, name)
    
    const ArtifactProduction = GetArtifactProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            ArtifactProduction.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getArtifactProduction', 'ArtifactProduction.find', 'error', err);
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            oper: 'get', 
                            ok: true, 
                            item: result[0]
                         });
                }
                resolve({
                    oper: 'get', 
                    ok: false, 
                    message: 'artifact production not found'
                 })
            }
            )
        }
        );
}

export async function createArtifactProduction(owner: string, name: string, description: string, mainIttf: string, wizziSchema: string, packiFiles: string):  Promise<CRUDResult> {

    
    console.log(myname, 'createArtifactProduction', owner, name, description, mainIttf, wizziSchema, packiFiles)
    
    const ArtifactProduction = GetArtifactProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            ArtifactProduction.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getArtifactProduction', 'ArtifactProduction.find', 'error', err);
                    return reject(err);
                }
                console.log(myname, 'getArtifactProduction', 'ArtifactProduction.find', 'result', result);
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'artifact production already exists'
                         });
                }
                const newArtifactProduction = new ArtifactProduction({
                    owner: owner, 
                    name: name, 
                    description: description, 
                    mainIttf: mainIttf, 
                    wizziSchema: wizziSchema, 
                    packiFiles: packiFiles, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newArtifactProduction.save(function(err, doc) {
                
                    if (err) {
                        console.log(myname, 'createArtifactProduction', 'newArtifactProduction.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'create', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'artifact production created'
                         });
                })
            }
            )
        }
        );
}

export async function updateArtifactProduction(id: string, owner?: string, name?: string, description?: string, mainIttf?: string, wizziSchema?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    console.log(myname, 'updateArtifactProduction', owner, name, description, mainIttf, wizziSchema, packiFiles)
    
    const ArtifactProduction = GetArtifactProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = {
                _id: id
             };
            const update: any = {};
            if (typeof owner !== 'undefined') {
                update['owner'] = owner;
            }
            if (typeof name !== 'undefined') {
                update['name'] = name;
            }
            if (typeof description !== 'undefined') {
                update['description'] = description;
            }
            if (typeof mainIttf !== 'undefined') {
                update['mainIttf'] = mainIttf;
            }
            if (typeof wizziSchema !== 'undefined') {
                update['wizziSchema'] = wizziSchema;
            }
            if (typeof packiFiles !== 'undefined') {
                update['packiFiles'] = packiFiles;
            }
            update['updated_at'] = new Date();
            
            ArtifactProduction.findOneAndUpdate(query, update, {}, 
            // loog myname, 'updateArtifactProduction', 'ArtifactProduction.findOneAndUpdate', 'result', result
            (err: any, result: any) => {
            
                if (err) {
                    console.log(myname, 'updateArtifactProduction', 'ArtifactProduction.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                
                return resolve({
                        oper: 'update', 
                        ok: true, 
                        message: 'artifact production updated'
                     });
            }
            )
        }
        );
}

export async function deleteArtifactProduction(owner: string, name: string):  Promise<CRUDResult> {

    
    console.log(myname, 'deleteArtifactProduction', owner, name)
    
    const ArtifactProduction = GetArtifactProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            ArtifactProduction.deleteOne(query, 
            // loog myname, 'deleteArtifactProduction', 'ArtifactProduction.deleteOne'
            (err: any) => {
            
                if (err) {
                    console.log(myname, 'deleteArtifactProduction', 'ArtifactProduction.deleteOne', 'error', err);
                    return reject(err);
                }
                resolve({
                    oper: 'delete', 
                    ok: true, 
                    message: 'artifact production'
                 })
            }
            )
        }
        );
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

export async function getArtifactProductionObject(owner: string, name: string) {

    return new Promise((resolve, reject) => 
        
            getArtifactProduction(owner, name).then(
            // loog 'myname', 'getArtifactProductionObject.ap', ap
            
            // loog 'myname', 'getArtifactProductionObject.ap_packiFiles_object', ap_packiFiles_object
            
            // loog 'myname', 'getArtifactProductionObject', obj
            (result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const ap: IArtifactProductionModel = result.item;
                const ap_packiFiles_object: packiTypes.PackiFiles = JSON.parse(ap.packiFiles);
                const obj = {
                    ...ap._doc, 
                    packiFiles: ap_packiFiles_object, 
                    _id: ap._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                console.log('getArtifactProduction_withCache.getTFolder.error', err);
                return reject(err);
            }
            )
        
        );
}

export // loog 'getArtifactProduction_withCache.cacheKey', cacheKey
async function getArtifactProduction_withCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    return new Promise((resolve, reject) => {
        
            let apValue = artifactCache.get(cacheKey);
            if (apValue) {
                return resolve(apValue);
            }
            getArtifactProduction(owner, name).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const ap: IArtifactProductionModel = result.item;
                const ap_packiFiles_object: packiTypes.PackiFiles = JSON.parse(ap.packiFiles);
                
                // loog 'getArtifactProduction_withCache.getTFolder', owner, ap.wizziSchema
                if (ap.wizziSchema && ap.wizziSchema.length > 0) {
                    tFolderApi.getTFolder(owner, ap.wizziSchema).then((result) => {
                    
                        if (!result.ok) {
                            apValue = {
                                mainIttf: ap.mainIttf, 
                                packiFiles: ap_packiFiles_object
                             };
                            artifactCache.set(cacheKey, apValue);
                            return resolve(apValue);
                        }
                        const tf: ITFolderModel = result.item;
                        const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                        apValue = {
                            mainIttf: ap.mainIttf, 
                            packiFiles: mergePackiFiles(ap_packiFiles_object, tf_packiFiles_object)
                         };
                        artifactCache.set(cacheKey, apValue);
                        return resolve(apValue);
                    }
                    ).catch((err: any) => {
                    
                        console.log('getArtifactProduction_withCache.getTFolder.error', err);
                        return reject(err);
                    }
                    )
                }
                else {
                    apValue = {
                        mainIttf: ap.mainIttf, 
                        packiFiles: ap_packiFiles_object
                     };
                    artifactCache.set(cacheKey, apValue);
                    return resolve(apValue);
                }
            }
            ).catch((err: any) => {
            
                console.log('getArtifactProduction_withCache.getArtifactProduction.error', err);
                return reject(err);
            }
            )
        }
        );
}

export function invalidateCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    artifactCache.del(cacheKey);
}

export async function getDefaultContext_withCache(owner: string, sysContext?: any) {

    sysContext = sysContext || {};
    return new Promise((resolve, reject) => 
        
            getArtifactContextItem(owner, 'wzCtx;wzctx', {}).then(
            // loog 'getDefaultContext_withCache', 'got context item wzCtx;wzctx'
            (resultItemContext: any) => {
            
                const defaultContext = Object.assign({}, sysContext, resultItemContext);
                resolve(defaultContext);
            }
            ).catch((err: any) => {
            
                console.log('getDefaultContext_withCache.getArtifactContextItem.error', err);
                return reject(err);
            }
            )
        
        );
}

export async function getArtifactContext(owner: string, queryContextString: string, sysContext?: any) {

    sysContext = sysContext || {};
    return new Promise((resolve, reject) => {
        
            if (queryContextString && queryContextString.length > 0) {
                const contextItems = queryContextString.split('|');
                var j = 0;
                let resultContext = sysContext;
                (function next() {
                
                    var contextItem = contextItems[j++];
                    
                    // loog 'getArtifactContext.done.keys', Object.keys(resultContext)
                    if (!contextItem) {
                        return resolve(resultContext);
                    }
                    getArtifactContextItem(owner, contextItem, sysContext).then((resultItemContext: any) => {
                    
                        resultContext = Object.assign({}, resultContext, resultItemContext)
                        ;
                        next();
                    }
                    ).catch((err: any) => {
                    
                        console.log('getArtifactContext.getArtifactContextItem.error', err);
                        return reject(err);
                    }
                    )
                })();
            }
            else {
                resolve(sysContext);
            }
        }
        );
}

export async function getArtifactContextItem(owner: string, queryContextString: string, sysContext?: any) {

    sysContext = sysContext || {};
    return new Promise((resolve, reject) => {
        
            
            // loog 'getArtifactContextItem: contextName', contextName, 'contextArtifactName', contextArtifactName, 'contextTransformation', contextTransformation
            if (queryContextString && queryContextString.length > 0) {
                const parts = queryContextString.split(';');
                const contextName = parts[0];
                const contextArtifactName = parts[1];
                const contextTransformation = parts.length > 2 ? parts[2] : null;
                if (contextTransformation) {
                    getArtifactTransformation(owner, contextArtifactName, sysContext, contextTransformation).then(
                    // loog 'getArtifactContextItem: typeof result.transformResult', typeof result.transformResult
                    (result: any) => 
                    
                        resolve(Object.assign({}, sysContext, {
                            [contextName]: result.transformResult
                         }))
                    ).catch((err: any) => {
                    
                        console.log('getArtifactContextItem.getArtifactTransformation.error', err);
                        return reject(err);
                    }
                    )
                }
                else {
                    getArtifactGeneration(owner, contextArtifactName, sysContext).then(
                    // loog 'getArtifactContextItem.getArtifactGeneration.result.content.length', result.content.length
                    (result: any) => {
                    
                        const contextObject = JSON.parse(result.content);
                        resolve(Object.assign({}, sysContext, {
                            [contextName]: contextObject
                         }))
                    }
                    ).catch((err: any) => {
                    
                        console.log('getArtifactContextItem.getArtifactGeneration.error', err);
                        return reject(err);
                    }
                    )
                }
            }
            else {
                resolve(sysContext);
            }
        }
        );
}

export async function getArtifactTransformation(owner: string, name: string, context: any, transformerName: string) {

    return new Promise((resolve, reject) => 
        
            getArtifactProduction(owner, name).then((ap: any) => 
            
                wizziProds.transformModel(ap.mainIttf, ap.packiFiles, context, {
                    transformer: transformerName
                 }).then(
                // loog 'getArtifactTransformation.transformModel.keys', Object.keys(result)
                (result: any) => {
                
                    return resolve(result);
                }
                ).catch((err: any) => {
                
                    console.log('getArtifactTransformation.transformModel.error', err);
                    return reject(err);
                }
                )
            
            ).catch((err: any) => {
            
                console.log('getArtifactTransformation.getArtifactProduction.error', err);
                return reject(err);
            }
            )
        
        );
}

export async function getArtifactGeneration(owner: string, name: string, context: any) {

    return new Promise((resolve, reject) => 
        
            getArtifactProduction_withCache(owner, name).then((ap: any) => 
            
                wizziProds.generateArtifact(ap.mainIttf, ap.packiFiles, context).then(
                // loog 'getArtifactGeneration', name, result.artifactContent.length
                
                // loog 'getArtifactGeneration', name, result.artifactContent.substring(0, 500) + '...'
                (result: any) => {
                
                    const response = {
                        content: result.artifactContent, 
                        contentLength: result.artifactContent.length, 
                        contentType: contentTypeFor(ap.mainIttf)
                     };
                    return resolve(response);
                }
                ).catch((err: any) => {
                
                    console.log('getArtifactGeneration.generateArtifact.error', err);
                    return reject(err);
                }
                )
            
            ).catch((err: any) => {
            
                console.log('getArtifactGeneration.getArtifactProduction.error', err);
                return reject(err);
            }
            )
        
        );
}

const extContentTypeMap: { 
    [k: string]: string;
} = {
    '.css': 'text/css', 
    '.gif': 'image/gif', 
    '.html': 'text/html', 
    '.ittf': 'text/plain', 
    '.jpeg': 'image/jpeg', 
    '.jpg': 'image/jpg', 
    '.js': 'text/javascript', 
    '.json': 'application/json', 
    '.png': 'image/png', 
    '.scss': 'text/scss', 
    '.svg': 'image/svg+xml', 
    '.ttf': 'application/x-font-ttf', 
    '.txt': 'text/plain', 
    '.vtt': 'text/vtt', 
    '.woff': 'application/x-font-woff', 
    '.yaml': 'text/yanl', 
    '.yml': 'text/yanl', 
    '.xml': 'text/xml'
 };

function ittfSchemaOf(file: string) {

    const nameParts = path.basename(file).split('.');
    if (nameParts[nameParts.length - 1] === 'ittf') {
        return nameParts[nameParts.length - 2];
    }
    return undefined;
}

// loog 'contentTypeFor', file, ittfSchema
function contentTypeFor(file: string) {

    const ittfSchema = ittfSchemaOf(file);
    if (ittfSchema) {
        return extContentTypeMap['.' + ittfSchema];
    }
    return undefined;
}

export async function prepareGenerationFromWizziJson(req_files: packiTypes.PackiFiles):  Promise<any> {

    
    return new Promise((resolve, reject) => {
        
            
            let retPackiFiles: packiTypes.PackiFiles = req_files;
            
            const wizziJson = req_files['wizzi.json.ittf'];
            if (wizziJson) {
                wizziProds.generateArtifact('wizzi.json.ittf', {
                    'wizzi.json.ittf': {
                        type: wizziJson.type, 
                        contents: wizziJson.contents
                     }
                 }, {}).then((result: any) => {
                
                    const wizziJsonObj = JSON.parse(result.artifactContent);
                    getFragmentsFromWizziJson(wizziJsonObj).then(
                    // loog myname, 'prepareGenerationFromWizziJson', 'resultPackiFiles', Object.keys(resultPackiFiles)
                    (resultPackiFiles: packiTypes.PackiFiles) => {
                    
                        retPackiFiles = mergePackiFiles(retPackiFiles, resultPackiFiles)
                        ;
                        getContextFromWizziJson(wizziJsonObj).then(
                        // loog myname, 'prepareGenerationFromWizziJson', 'resultContext', resultContext
                        (resultContext) => {
                        
                            return resolve({
                                    packiFiles: retPackiFiles, 
                                    context: resultContext
                                 });
                        }
                        )
                    }
                    ).catch((err: any) => {
                    
                        console.log('getArtifactGeneration.getFragmentsFromWizziJson.error', err);
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
                resolve({
                    packiFiles: req_files, 
                    context: {
                        
                     }
                 })
            }
        }
        );
}

export async function getFragmentsFromWizziJson(wizziJsonObj: any):  Promise<packiTypes.PackiFiles> {

    
    return new Promise((resolve, reject) => {
        
            
            let retPackiFiles: packiTypes.PackiFiles = {};
            if (!!(wizziJsonObj && wizziJsonObj.fragments && wizziJsonObj.fragments.length > 0) == false) {
                return resolve(retPackiFiles);
            }
            var j = 0;
            (function next() {
            
                var tfolder = wizziJsonObj.fragments[j++];
                
                // loog 'getFragmentsFromWizziJson.done.keys', Object.keys(retPackiFiles)
                if (!tfolder) {
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
                
                    console.log('getFragmentsFromWizziJson.getTFolder.error', err);
                    return reject(err);
                }
                )
            })();
        }
        );
}

export async function getContextFromWizziJson(wizziJsonObj: any):  Promise<any> {

    
    return new Promise((resolve, reject) => {
        
            
            let retContext: any = {};
            if (!!(wizziJsonObj && wizziJsonObj.fragments && wizziJsonObj.fragments.length > 0) == false) {
                return resolve(retContext);
            }
            var j = 0;
            (function next() {
            
                var contextDef = wizziJsonObj.contexts[j++];
                
                // loog 'getContextFromWizziJson.done.keys', Object.keys(retContext)
                if (!contextDef) {
                    return resolve(retContext);
                }
                const parts = contextDef.path.split('/');
                getArtifactContextItem(parts[0], contextDef.name + ';' + parts.slice(1).join('/')).then((contextObject: any) => {
                
                    retContext = Object.assign({}, retContext, contextObject)
                    ;
                    next();
                }
                ).catch((err: any) => {
                
                    console.log('getContextFromWizziJson.getArtifactContextItem.error', err);
                    return reject(err);
                }
                )
            })();
        }
        );
}
