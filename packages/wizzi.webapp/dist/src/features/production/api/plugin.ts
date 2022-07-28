/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\api\plugin.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import NodeCache from 'node-cache';
import {GetPluginProductionModel} from '../mongo/plugin';
import {IPluginProductionModel} from '../types';
import {ValidateResult, CRUDResult} from '../../types';
import {packiTypes} from '../../packi';

const myname = 'features.production.api.plugin';

const pluginCache = new NodeCache({
    stdTTL: 120, 
    checkperiod: 60
 });

export async function validatePluginProduction(owner: string, name: string) {

    const PluginProduction = GetPluginProductionModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            PluginProduction.find(query, 
            // loog myname, 'validatePluginProduction', 'PluginProduction.find', 'error', err
            (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'plugin production already exists'
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

export async function getListPluginProduction(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    console.log(myname, 'getListPluginProduction', 'options', options)
    
    const PluginProduction = GetPluginProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = PluginProduction.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find(
            // loog myname, 'getListPluginProduction', 'PluginProduction.find', 'Object.keys(result)', Object.keys(result)
            (err, result) => {
            
                if (err) {
                    console.log(myname, 'getListPluginProduction', 'PluginProduction.find', 'error', err, __filename);
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

export async function getPluginProduction(owner: string, name: string):  Promise<CRUDResult> {

    
    console.log(myname, 'getPluginProduction', owner, name)
    
    const PluginProduction = GetPluginProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            PluginProduction.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getPluginProduction', 'PluginProduction.find', 'error', err, __filename);
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
                    message: 'plugin production not found'
                 })
            }
            )
        }
        );
}

export async function getPluginProductionById(id: string):  Promise<CRUDResult> {

    
    console.log(myname, 'getPluginProductionById', id)
    
    const PluginProduction = GetPluginProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            PluginProduction.find({
                _id: id
             }, (err: any, result: IPluginProductionModel[]) => {
            
                if (err) {
                    console.log(myname, 'getPluginProduction', 'PluginProduction.find', 'error', err, __filename);
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
                    message: 'plugin production not found'
                 })
            }
            )
        }
        );
}

export async function getPluginProductionObject(owner: string, name: string) {

    return new Promise((resolve, reject) => 
        
            getPluginProduction(owner, name).then(
            // loog 'myname', 'getPluginProductionObject.lp', lp
            
            // loog 'myname', 'getPluginProductionObject.lp_packiFiles_object', lp_packiFiles_object
            
            // loog 'myname', 'getPluginProductionObject', obj
            (result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const lp: IPluginProductionModel = result.item;
                const lp_packiFiles_object: packiTypes.PackiFiles = JSON.parse(lp.packiFiles);
                const obj = {
                    ...lp._doc, 
                    packiFiles: lp_packiFiles_object, 
                    _id: lp._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                console.log('getPluginProductionObject.getPluginProduction.error', err, __filename);
                return reject(err);
            }
            )
        
        );
}

export async function getPluginProductionObjectById(id: string) {

    return new Promise((resolve, reject) => 
        
            getPluginProductionById(id).then(
            // loog 'myname', 'getPluginProductionObjectById.lp', lp
            
            // loog 'myname', 'getPluginProductionObjectById.lp_packiFiles_object', lp_packiFiles_object
            
            // loog 'myname', 'getPluginProductionObjectById', obj
            (result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const lp: IPluginProductionModel = result.item;
                const lp_packiFiles_object: packiTypes.PackiFiles = JSON.parse(lp.packiFiles);
                const obj = {
                    ...lp._doc, 
                    packiFiles: lp_packiFiles_object, 
                    _id: lp._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                console.log('getPluginProductionObjectById.getPluginProductionById.error', err, __filename);
                return reject(err);
            }
            )
        
        );
}

export async function createPluginProduction(owner: string, name: string, description: string, packiFiles: string):  Promise<CRUDResult> {

    
    console.log(myname, 'createPluginProduction', owner, name, description, packiFiles)
    
    const PluginProduction = GetPluginProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            PluginProduction.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getPluginProduction', 'PluginProduction.find', 'error', err, __filename);
                    return reject(err);
                }
                console.log(myname, 'getPluginProduction', 'PluginProduction.find', 'result', result, __filename);
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'plugin production already exists'
                         });
                }
                const newPluginProduction = new PluginProduction({
                    owner: owner, 
                    name: name, 
                    description: description, 
                    packiFiles: packiFiles, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newPluginProduction.save(function(err, doc) {
                
                    if (err) {
                        console.log(myname, 'createPluginProduction', 'newPluginProduction.save', 'error', err, __filename);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'create', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'plugin production created'
                         });
                })
            }
            )
        }
        );
}

export async function updatePluginProduction(id: string, owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    console.log(myname, 'updatePluginProduction', owner, name, description, packiFiles)
    
    const PluginProduction = GetPluginProductionModel();
    
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
            
            PluginProduction.findOneAndUpdate(query, update, {}, 
            // loog myname, 'updatePluginProduction', 'PluginProduction.findOneAndUpdate', 'result', result
            (err: any, result: any) => {
            
                if (err) {
                    console.log(myname, 'updatePluginProduction', 'PluginProduction.findOneAndUpdate', 'error', err, __filename);
                    return reject(err);
                }
                
                return resolve({
                        oper: 'update', 
                        ok: true, 
                        message: 'plugin production updated'
                     });
            }
            )
        }
        );
}

export async function deletePluginProduction(id: string, owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    console.log(myname, 'deletePluginProduction', owner, name)
    
    const PluginProduction = GetPluginProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                _id: id
             };
            
            PluginProduction.deleteOne(query, 
            // loog myname, 'deletePluginProduction', 'PluginProduction.deleteOne'
            (err: any) => {
            
                if (err) {
                    console.log(myname, 'deletePluginProduction', 'PluginProduction.deleteOne', 'error', err, __filename);
                    return reject(err);
                }
                resolve({
                    oper: 'delete', 
                    ok: true, 
                    message: 'plugin production'
                 })
            }
            )
        }
        );
}

export async function getPluginProductionObject_stop(owner: string, name: string) {

    return new Promise((resolve, reject) => 
        
            getPluginProduction(owner, name).then(
            // loog 'myname', 'getPluginProductionObject.tf', tf
            
            // loog 'myname', 'getPluginProductionObject.tf_packiFiles_object', tf_packiFiles_object
            
            // loog 'myname', 'getPluginProductionObject', obj
            (result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: IPluginProductionModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                const obj = {
                    ...tf._doc, 
                    packiFiles: tf_packiFiles_object, 
                    _id: tf._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                console.log('getPluginProductionObject.getPluginProduction.error', err, __filename);
                return reject(err);
            }
            )
        
        );
}

export async function getPluginProductionObjectById_stop(id: string) {

    return new Promise((resolve, reject) => 
        
            getPluginProductionById(id).then(
            // loog 'myname', 'getPluginProductionObjectById.tf', tf
            
            // loog 'myname', 'getPluginProductionObjectById.tf_packiFiles_object', tf_packiFiles_object
            
            // loog 'myname', 'getPluginProductionObjectById', obj
            (result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: IPluginProductionModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                const obj = {
                    ...tf._doc, 
                    packiFiles: tf_packiFiles_object, 
                    _id: tf._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                console.log('getPluginProductionObjectById.getPluginProductionById.error', err, __filename);
                return reject(err);
            }
            )
        
        );
}

export // loog 'getPluginProduction_withCache.cacheKey', cacheKey
async function getPluginProduction_withCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    return new Promise((resolve, reject) => {
        
            let ppValue = {
                packiFiles: {
                    
                 }
             };
            getPluginProduction(owner, name).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: IPluginProductionModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                ppValue = {
                    packiFiles: tf_packiFiles_object
                 };
                return resolve(ppValue);
            }
            ).catch((err: any) => {
            
                console.log('getPluginProduction_withCache.getArtifactProduction.error', err, __filename);
                return reject(err);
            }
            )
        }
        );
}

export function invalidateCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    pluginCache.del(cacheKey);
}
