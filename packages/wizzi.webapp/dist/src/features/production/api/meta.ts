/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\api\meta.ts.ittf
    utc time: Tue, 19 Jul 2022 19:18:03 GMT
*/
import NodeCache from 'node-cache';
import {GetMetaProductionModel} from '../mongo/meta';
import {IMetaProductionModel} from '../types';
import {ValidateResult, CRUDResult} from '../../types';
import {packiTypes} from '../../packi';
import {wizziProds} from '../../wizzi';
import {prepareGenerationFromWizziJson} from './artifact';

const myname = 'features.production.api.meta';

const metaCache = new NodeCache({
    stdTTL: 120, 
    checkperiod: 60
 });

export async function validateMetaProduction(owner: string, name: string) {

    const MetaProduction = GetMetaProductionModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            MetaProduction.find(query, 
            // loog myname, 'validateMetaProduction', 'MetaProduction.find', 'error', err
            (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'meta production already exists'
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

export async function getListMetaProduction(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    console.log(myname, 'getListMetaProduction', 'options', options)
    
    const MetaProduction = GetMetaProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = MetaProduction.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find(
            // loog myname, 'getListMetaProduction', 'MetaProduction.find', 'Object.keys(result)', Object.keys(result)
            (err, result) => {
            
                if (err) {
                    console.log(myname, 'getListMetaProduction', 'MetaProduction.find', 'error', err);
                    return reject(err);
                }
                const resultItem = [];
                var i, i_items=result, i_len=result.length, item;
                for (i=0; i<i_len; i++) {
                    item = result[i];
                    const item_obj = {
                        _id: item._id, 
                        id: item.id, 
                        owner: item.owner, 
                        name: item.name, 
                        description: item.description, 
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

export async function getMetaProduction(owner: string, name: string):  Promise<CRUDResult> {

    
    console.log(myname, 'getMetaProduction', owner, name)
    
    const MetaProduction = GetMetaProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            MetaProduction.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getMetaProduction', 'MetaProduction.find', 'error', err);
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
                    message: 'meta production not found'
                 })
            }
            )
        }
        );
}

export async function getMetaProductionById(id: string):  Promise<CRUDResult> {

    
    console.log(myname, 'getMetaProductionById', id)
    
    const MetaProduction = GetMetaProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            MetaProduction.find({
                _id: id
             }, (err: any, result: IMetaProductionModel[]) => {
            
                if (err) {
                    console.log(myname, 'getMetaProduction', 'MetaProduction.find', 'error', err);
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
                    message: 'meta production not found'
                 })
            }
            )
        }
        );
}

export async function createMetaProduction(owner: string, name: string, description: string, packiFiles: string):  Promise<CRUDResult> {

    
    console.log(myname, 'createMetaProduction', owner, name, description, packiFiles)
    
    const MetaProduction = GetMetaProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            MetaProduction.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getMetaProduction', 'MetaProduction.find', 'error', err);
                    return reject(err);
                }
                console.log(myname, 'getMetaProduction', 'MetaProduction.find', 'result', result);
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'meta production already exists'
                         });
                }
                const newMetaProduction = new MetaProduction({
                    owner: owner, 
                    name: name, 
                    description: description, 
                    packiFiles: packiFiles, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newMetaProduction.save(function(err, doc) {
                
                    if (err) {
                        console.log(myname, 'createMetaProduction', 'newMetaProduction.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'create', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'meta production created'
                         });
                })
            }
            )
        }
        );
}

export async function updateMetaProduction(id: string, owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    console.log(myname, 'updateMetaProduction', owner, name, description, packiFiles)
    
    const MetaProduction = GetMetaProductionModel();
    
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
            if (typeof packiFiles !== 'undefined') {
                update['packiFiles'] = packiFiles;
            }
            update['updated_at'] = new Date();
            
            MetaProduction.findOneAndUpdate(query, update, {}, 
            // loog myname, 'updateMetaProduction', 'MetaProduction.findOneAndUpdate', 'result', result
            (err: any, result: any) => {
            
                if (err) {
                    console.log(myname, 'updateMetaProduction', 'MetaProduction.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                
                return resolve({
                        oper: 'update', 
                        ok: true, 
                        message: 'meta production updated'
                     });
            }
            )
        }
        );
}

export async function deleteMetaProduction(id: string, owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    console.log(myname, 'deleteMetaProduction', owner, name)
    
    const MetaProduction = GetMetaProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                _id: id
             };
            
            MetaProduction.deleteOne(query, 
            // loog myname, 'deleteMetaProduction', 'MetaProduction.deleteOne'
            (err: any) => {
            
                if (err) {
                    console.log(myname, 'deleteMetaProduction', 'MetaProduction.deleteOne', 'error', err);
                    return reject(err);
                }
                resolve({
                    oper: 'delete', 
                    ok: true, 
                    message: 'meta production'
                 })
            }
            )
        }
        );
}

export async function getMetaProductionObject(owner: string, name: string) {

    return new Promise((resolve, reject) => 
        
            getMetaProduction(owner, name).then(
            // loog 'myname', 'getMetaProductionObject.tf', tf
            
            // loog 'myname', 'getMetaProductionObject.tf_packiFiles_object', tf_packiFiles_object
            
            // loog 'myname', 'getMetaProductionObject', obj
            (result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: IMetaProductionModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                const obj = {
                    ...tf._doc, 
                    packiFiles: tf_packiFiles_object, 
                    _id: tf._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                console.log('getMetaProductionObject.getMetaProduction.error', err);
                return reject(err);
            }
            )
        
        );
}

export async function getMetaProductionObjectById(id: string) {

    return new Promise((resolve, reject) => 
        
            getMetaProductionById(id).then(
            // loog 'myname', 'getMetaProductionObjectById.tf', tf
            
            // loog 'myname', 'getMetaProductionObjectById.tf_packiFiles_object', tf_packiFiles_object
            
            // loog 'myname', 'getMetaProductionObjectById', obj
            (result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: IMetaProductionModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                const obj = {
                    ...tf._doc, 
                    packiFiles: tf_packiFiles_object, 
                    _id: tf._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                console.log('getMetaProductionObjectById.getMetaProductionById.error', err);
                return reject(err);
            }
            )
        
        );
}

export async function getMetaProduction_withCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    console.log('getMetaProduction_withCache.cacheKey', cacheKey);
    return new Promise((resolve, reject) => {
        
            let mpValue = {
                packiFiles: {
                    
                 }
             };
            getMetaProduction(owner, name).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: IMetaProductionModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                mpValue = {
                    packiFiles: tf_packiFiles_object
                 };
                return resolve(mpValue);
            }
            ).catch((err: any) => {
            
                console.log('getMetaProduction_withCache.getArtifactProduction.error', err);
                return reject(err);
            }
            )
        }
        );
}

export function invalidateCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    metaCache.del(cacheKey);
}

export // loog myname, 'getTemplatePackiFiles', metaId, cliCtx
async function getTemplatePackiFiles(metaId: string, cliCtx: any):  Promise<packiTypes.PackiFiles> {

    function getPackiFiles(mainIttf: string):  packiTypes.PackiFiles {
    
        const ret: packiTypes.PackiFiles = {};
        ret[mainIttf] = {
            type: 'CODE', 
            contents: ''
         };
        return ret;
    }
    return new Promise((resolve, reject) => {
        
            if (metaId.length == 0 || metaId.split('|').length != 2) {
                return resolve(getPackiFiles('index.js.ittf'));
            }
            const parts = metaId.split('|');
            getMetaProduction(parts[0], parts[1]).then(
            // loog myname, 'getTemplatePackiFiles.getMetaProduction.tf', tf
            (result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: IMetaProductionModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                prepareGenerationFromWizziJson(tf_packiFiles_object).then((result: any) => {
                
                    const context = Object.assign({}, result.context, {
                        cliCtx: cliCtx
                     });
                    wizziProds.generateFolderArtifacts('template', 'output', result.packiFiles, context).then((packiFiles: packiTypes.PackiFiles) => 
                    
                        resolve(packiFiles)
                    )
                    .catch((err: any) => {
                    
                        console.log('getTemplatePackiFiles.generateFolderArtifacts.error', err);
                        return reject(err);
                    }
                    )
                }
                ).catch((err: any) => {
                
                    console.log('getTemplatePackiFiles.prepareGenerationFromWizziJson.error', err);
                    return reject(err);
                }
                )
            }
            ).catch((err: any) => {
            
                console.log('getTemplatePackiFiles.getMetaProduction.error', err);
                return reject(err);
            }
            )
        }
        );
}
