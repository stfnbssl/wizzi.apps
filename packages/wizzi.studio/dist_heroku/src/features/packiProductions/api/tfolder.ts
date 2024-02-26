/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packiProductions\api\tfolder.ts.ittf
    utc time: Sun, 25 Feb 2024 14:14:59 GMT
*/
import NodeCache from 'node-cache';
import {ValidateResult, CRUDResult} from '../../types';
import {packiTypes} from '../../packi';
import {packiConfigPath} from '../../config/env';
import {wizziProds, wizziMaps} from '../../wizzi';
import {GetTFolderModel} from '../mongo/tfolder';
import {ITFolderModel} from '../types';
import {productionApi} from '../index';

const myname = 'features.production.api.TFolder';

const tFolderCache = new NodeCache({
    stdTTL: 120, 
    checkperiod: 60
 });
export async function validateTFolder(owner: string, name: string):  Promise<ValidateResult> {

    const TFolder = GetTFolderModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            TFolder.find(query, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'A tFolder contains ITTF Fragments that Wizzi productions can mix/include. already exists'
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

export /**
    // console.log
        // myname
        // 'getTFolderList'
        // 'options'
        // options
*/
async function getTFolderList(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = TFolder.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find((err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getTFolderList', 'TFolder.find', 'error', err);
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
                    oper: 'getTFolderList', 
                    ok: true, 
                    item: resultItem
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'getTFolder'
        // owner
        // name
*/
async function getTFolder(owner: string, name: string):  Promise<CRUDResult> {

    
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            TFolder.find(query, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getTFolder', 'TFolder.find', 'error', err);
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
                    message: 'A tFolder contains ITTF Fragments that Wizzi productions can mix/include. not found'
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'getTFolderById'
        // id
*/
async function getTFolderById(id: string):  Promise<CRUDResult> {

    
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            TFolder.find({
                _id: id
             }, (err: any, result: ITFolderModel[]) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getTFolder', 'TFolder.find', 'error', err);
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
                    oper: 'getTFolder', 
                    ok: false, 
                    message: 'A tFolder contains ITTF Fragments that Wizzi productions can mix/include. not found'
                 })
            }
            )
        }
        );
}

export async function getTFolderObject(owner: string, name: string, loadPackiConfig?: boolean) {

    return new Promise((resolve, reject) => 
        
            getTFolder(owner, name).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: ITFolderModel = result.item;
                return resolve(_createTFolderObject(tf, loadPackiConfig));
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.production.api.tFolder.getTFolderObject.getTFolder.error', err);
                return reject(err);
            }
            )
        
        );
}

export async function getTFolderObjectById(id: string, loadPackiConfig?: boolean) {

    return new Promise((resolve, reject) => 
        
            getTFolderById(id).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: ITFolderModel = result.item;
                return resolve(_createTFolderObject(tf, loadPackiConfig));
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.production.api.tFolder.getTFolderObjectById.getTFolderById.error', err);
                return reject(err);
            }
            )
        
        );
}
async function _createTFolderObject(tf: ITFolderModel, loadPackiConfig?: boolean) {

    
    return new Promise((resolve, reject) => {
        
            const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
            const obj = {
                ...tf._doc, 
                packiFiles: tf_packiFiles_object, 
                _id: tf._id.toString(), 
                packiProduction: "TFolder", 
                packiConfig: tf_packiFiles_object[packiConfigPath], 
                packiConfigObj: null
             };
            
            if (loadPackiConfig) {
                if (!obj.packiConfig) {
                    return reject({
                            message: 'Missing file ' + packiConfigPath + ' in TFolder'
                         });
                }
                wizziProds.generateArtifact(packiConfigPath, {
                    [packiConfigPath]: {
                        type: obj.packiConfig.type, 
                        contents: obj.packiConfig.contents
                     }
                 }, {}).then((generationResult: any) => {
                
                    obj.packiConfigObj = JSON.parse(generationResult.artifactContent);
                    return resolve(obj);
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.production.api.tFolder.getTFolderObject._createTFolderObject.error', err);
                    return reject(err);
                }
                )
            }
            else {
                return resolve(obj);
            }
        }
        );
}

export /**
    // console.log
        // myname
        // 'createTFolder'
        // owner
        // name
        // description
        // packiFiles
*/
async function createTFolder(owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            TFolder.find(query, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getTFolder', 'TFolder.find', 'error', err);
                    return reject(err);
                }
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'A tFolder contains ITTF Fragments that Wizzi productions can mix/include. already exists'
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
                newTFolder.save(function(err: any, doc: any) {
                
                    if (err) {
                        console.log("[31m%s[0m", myname, 'createTFolder', 'newTFolder.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'createTFolder', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'A tFolder contains ITTF Fragments that Wizzi productions can mix/include. created'
                         });
                })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'updateTFolder'
        // owner
        // name
        // description
        // packiFiles
*/
async function updateTFolder(id?: string, owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            var query;
            if (id && id.length > 0) {
                query = {
                    _id: id
                 };
            }
            else {
                query = {
                    owner: owner, 
                    name: name
                 };
            }
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
            
            TFolder.findOneAndUpdate(query, update, {}, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'updateTFolder', 'TFolder.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                if (!result) {
                    console.log("[31m%s[0m", myname, 'updateTFolder', 'TFolder.findOneAndUpdate', 'error', 'document not found');
                    return reject({
                            oper: 'updateTFolder', 
                            ok: false, 
                            message: 'A tFolder contains ITTF Fragments that Wizzi productions can mix/include. document not found: ' + id
                         });
                }
                
                return resolve({
                        oper: 'updateTFolder', 
                        ok: true, 
                        message: 'A tFolder contains ITTF Fragments that Wizzi productions can mix/include. updated'
                     });
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'deleteTFolder'
        // owner
        // name
*/
async function deleteTFolder(id?: string, owner?: string, name?: string):  Promise<CRUDResult> {

    
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            var query;
            if (id && id.length > 0) {
                query = {
                    _id: id
                 };
            }
            else {
                query = {
                    owner: owner, 
                    name: name
                 };
            }
            
            TFolder.deleteOne(query, (err: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'deleteTFolder', 'TFolder.deleteOne', 'error', err);
                    return reject(err);
                }
                resolve({
                    oper: 'deleteTFolder', 
                    ok: true, 
                    message: 'A tFolder contains ITTF Fragments that Wizzi productions can mix/include.'
                 })
            }
            )
        }
        );
}

export async function getTFolder_withCache(owner: string, name: string) {

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
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getTFolder_withCache.getArtifactProduction.error', err);
                return reject(err);
            }
            )
        }
        );
}

export function invalidateCache(owner: string, name?: string) {

    var cacheKey = owner + '|' + name;
    tFolderCache.del(cacheKey);
}
