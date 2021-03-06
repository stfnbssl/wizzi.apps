/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\api\tfolder.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import NodeCache from 'node-cache';
import {GetTFolderModel} from '../mongo/tfolder';
import {ITFolderModel} from '../types';
import {ValidateResult, CRUDResult} from '../../types';
import {packiTypes} from '../../packi';

const myname = 'features.production.api.tfolder';

const tfolderCache = new NodeCache({
    stdTTL: 120, 
    checkperiod: 60
 });

export async function validateTFolder(owner: string, name: string) {

    const TFolder = GetTFolderModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            TFolder.find(query, (err, result) => {
            
                console.log(myname, 'validateTFolder', 'TFolder.find', 'error', err, __filename);
                if (err) {
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'tFolder already exists'
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

export async function getListTFolder(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    console.log(myname, 'getListTFolder', 'options', options)
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = TFolder.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find(
            // loog myname, 'getListTFolder', 'TFolder.find', 'Object.keys(result)', Object.keys(result)
            (err, result) => {
            
                if (err) {
                    console.log(myname, 'getListTFolder', 'TFolder.find', 'error', err, __filename);
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

export async function getTFolder(owner: string, name: string):  Promise<CRUDResult> {

    
    console.log(myname, 'getTFolder', owner, name)
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            TFolder.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getTFolder', 'TFolder.find', 'error', err, __filename);
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
                    message: 'tFolder not found'
                 })
            }
            )
        }
        );
}

export async function getTFolderById(id: string):  Promise<CRUDResult> {

    
    console.log(myname, 'getTFolderById', id)
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            TFolder.find({
                _id: id
             }, (err: any, result: ITFolderModel[]) => {
            
                if (err) {
                    console.log(myname, 'getTFolder', 'TFolder.find', 'error', err, __filename);
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
                    message: 'tFolder not found'
                 })
            }
            )
        }
        );
}

export async function getTFolderObject(owner: string, name: string) {

    return new Promise((resolve, reject) => 
        
            getTFolder(owner, name).then(
            // loog 'myname', 'getTFolderObject.tf', tf
            
            // loog 'myname', 'getTFolderObject.tf_packiFiles_object', tf_packiFiles_object
            
            // loog 'myname', 'getTFolderObject', obj
            (result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: ITFolderModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                const obj = {
                    ...tf._doc, 
                    packiFiles: tf_packiFiles_object, 
                    _id: tf._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                console.log('getTFolderObject.getTFolder.error', err, __filename);
                return reject(err);
            }
            )
        
        );
}

export async function getTFolderObjectById(id: string) {

    return new Promise((resolve, reject) => 
        
            getTFolderById(id).then(
            // loog 'myname', 'getTFolderObjectById.tf', tf
            
            // loog 'myname', 'getTFolderObjectById.tf_packiFiles_object', tf_packiFiles_object
            
            // loog 'myname', 'getTFolderObjectById', obj
            (result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: ITFolderModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                const obj = {
                    ...tf._doc, 
                    packiFiles: tf_packiFiles_object, 
                    _id: tf._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                console.log('getTFolderObjectById.getTFolderById.error', err, __filename);
                return reject(err);
            }
            )
        
        );
}

export async function createTFolder(owner: string, name: string, description: string, packiFiles: string):  Promise<CRUDResult> {

    
    console.log(myname, 'createTFolder', owner, name, description, packiFiles)
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            TFolder.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getTFolder', 'TFolder.find', 'error', err, __filename);
                    return reject(err);
                }
                console.log(myname, 'getTFolder', 'TFolder.find', 'result', result, __filename);
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'tFolder already exists'
                         });
                }
                const newTFolder = new TFolder({
                    owner: owner, 
                    name: name, 
                    description: description, 
                    packiFiles: packiFiles, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newTFolder.save(function(err, doc) {
                
                    if (err) {
                        console.log(myname, 'createTFolder', 'newTFolder.save', 'error', err, __filename);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'create', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'tFolder created'
                         });
                })
            }
            )
        }
        );
}

export async function updateTFolder(id: string, owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    console.log(myname, 'updateTFolder', owner, name, description, packiFiles)
    
    const TFolder = GetTFolderModel();
    
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
            
            TFolder.findOneAndUpdate(query, update, {}, 
            // loog myname, 'updateTFolder', 'TFolder.findOneAndUpdate', 'result', result
            (err: any, result: any) => {
            
                if (err) {
                    console.log(myname, 'updateTFolder', 'TFolder.findOneAndUpdate', 'error', err, __filename);
                    return reject(err);
                }
                
                return resolve({
                        oper: 'update', 
                        ok: true, 
                        message: 'tFolder updated'
                     });
            }
            )
        }
        );
}

export async function deleteTFolder(id: string, owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    console.log(myname, 'deleteTFolder', owner, name)
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                _id: id
             };
            
            TFolder.deleteOne(query, 
            // loog myname, 'deleteTFolder', 'TFolder.deleteOne'
            (err: any) => {
            
                if (err) {
                    console.log(myname, 'deleteTFolder', 'TFolder.deleteOne', 'error', err, __filename);
                    return reject(err);
                }
                resolve({
                    oper: 'delete', 
                    ok: true, 
                    message: 'tFolder'
                 })
            }
            )
        }
        );
}

export async function getTFolderObject_stop(owner: string, name: string) {

    return new Promise((resolve, reject) => 
        
            getTFolder(owner, name).then(
            // loog 'myname', 'getTFolderObject.tf', tf
            
            // loog 'myname', 'getTFolderObject.tf_packiFiles_object', tf_packiFiles_object
            
            // loog 'myname', 'getTFolderObject', obj
            (result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: ITFolderModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                const obj = {
                    ...tf._doc, 
                    packiFiles: tf_packiFiles_object, 
                    _id: tf._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                console.log('getTFolderObject.getTFolder.error', err, __filename);
                return reject(err);
            }
            )
        
        );
}

export async function getTFolderObjectById_stop(id: string) {

    return new Promise((resolve, reject) => 
        
            getTFolderById(id).then(
            // loog 'myname', 'getTFolderObjectById.tf', tf
            
            // loog 'myname', 'getTFolderObjectById.tf_packiFiles_object', tf_packiFiles_object
            
            // loog 'myname', 'getTFolderObjectById', obj
            (result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: ITFolderModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                const obj = {
                    ...tf._doc, 
                    packiFiles: tf_packiFiles_object, 
                    _id: tf._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                console.log('getTFolderObjectById.getTFolderById.error', err, __filename);
                return reject(err);
            }
            )
        
        );
}

export // loog 'getTFolder_withCache.cacheKey', cacheKey
async function getTFolder_withCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    return new Promise((resolve, reject) => {
        
            let tfValue = {
                packiFiles: {
                    
                 }
             };
            getTFolder(owner, name).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: ITFolderModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                tfValue = {
                    packiFiles: tf_packiFiles_object
                 };
                return resolve(tfValue);
            }
            ).catch((err: any) => {
            
                console.log('getTFolder_withCache.getArtifactProduction.error', err, __filename);
                return reject(err);
            }
            )
        }
        );
}

export function invalidateCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    tfolderCache.del(cacheKey);
}
