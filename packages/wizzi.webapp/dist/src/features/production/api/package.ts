/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\api\package.ts.ittf
    utc time: Sat, 02 Jul 2022 04:01:54 GMT
*/
import NodeCache from 'node-cache';
import {GetPackageProductionModel} from '../mongo/package';
import {IPackageProductionModel} from '../types';
import {ValidateResult, CRUDResult} from '../../types';
import {packiTypes} from '../../packi';

const myname = 'features.production.api.package';

const packageCache = new NodeCache({
    stdTTL: 120, 
    checkperiod: 60
 });

export async function validatePackageProduction(owner: string, name: string) {

    const PackageProduction = GetPackageProductionModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            PackageProduction.find(query, 
            // loog myname, 'validatePackageProduction', 'PackageProduction.find', 'error', err
            (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'package production already exists'
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

export async function getListPackageProduction(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    console.log(myname, 'getListPackageProduction', 'options', options)
    
    const PackageProduction = GetPackageProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = PackageProduction.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find(
            // loog myname, 'getListPackageProduction', 'PackageProduction.find', 'Object.keys(result)', Object.keys(result)
            (err, result) => {
            
                if (err) {
                    console.log(myname, 'getListPackageProduction', 'PackageProduction.find', 'error', err);
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

export async function getPackageProduction(owner: string, name: string):  Promise<CRUDResult> {

    
    console.log(myname, 'getPackageProduction', owner, name)
    
    const PackageProduction = GetPackageProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            PackageProduction.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getPackageProduction', 'PackageProduction.find', 'error', err);
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
                    message: 'package production not found'
                 })
            }
            )
        }
        );
}

export async function createPackageProduction(owner: string, name: string, description: string, packiFiles: string):  Promise<CRUDResult> {

    
    console.log(myname, 'createPackageProduction', owner, name, description, packiFiles)
    
    const PackageProduction = GetPackageProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            PackageProduction.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getPackageProduction', 'PackageProduction.find', 'error', err);
                    return reject(err);
                }
                console.log(myname, 'getPackageProduction', 'PackageProduction.find', 'result', result);
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'package production already exists'
                         });
                }
                const newPackageProduction = new PackageProduction({
                    owner: owner, 
                    name: name, 
                    description: description, 
                    packiFiles: packiFiles, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newPackageProduction.save(function(err, doc) {
                
                    if (err) {
                        console.log(myname, 'createPackageProduction', 'newPackageProduction.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'create', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'package production created'
                         });
                })
            }
            )
        }
        );
}

export async function updatePackageProduction(id: string, owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    console.log(myname, 'updatePackageProduction', owner, name, description, packiFiles)
    
    const PackageProduction = GetPackageProductionModel();
    
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
            
            PackageProduction.findOneAndUpdate(query, update, {}, 
            // loog myname, 'updatePackageProduction', 'PackageProduction.findOneAndUpdate', 'result', result
            (err: any, result: any) => {
            
                if (err) {
                    console.log(myname, 'updatePackageProduction', 'PackageProduction.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                
                return resolve({
                        oper: 'update', 
                        ok: true, 
                        message: 'package production updated'
                     });
            }
            )
        }
        );
}

export async function deletePackageProduction(owner: string, name: string):  Promise<CRUDResult> {

    
    console.log(myname, 'deletePackageProduction', owner, name)
    
    const PackageProduction = GetPackageProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            PackageProduction.deleteOne(query, 
            // loog myname, 'deletePackageProduction', 'PackageProduction.deleteOne'
            (err: any) => {
            
                if (err) {
                    console.log(myname, 'deletePackageProduction', 'PackageProduction.deleteOne', 'error', err);
                    return reject(err);
                }
                resolve({
                    oper: 'delete', 
                    ok: true, 
                    message: 'package production'
                 })
            }
            )
        }
        );
}

export async function getPackageProductionObject(owner: string, name: string) {

    return new Promise((resolve, reject) => 
        
            getPackageProduction(owner, name).then(
            // loog 'myname', 'getPackageProductionObject.tf', tf
            
            // loog 'myname', 'getPackageProductionObject.tf_packiFiles_object', tf_packiFiles_object
            
            // loog 'myname', 'getPackageProductionObject', obj
            (result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: IPackageProductionModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                const obj = {
                    ...tf._doc, 
                    packiFiles: tf_packiFiles_object, 
                    _id: tf._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                console.log('getPackageProduction_withCache.getPackageProduction.error', err);
                return reject(err);
            }
            )
        
        );
}

export // loog 'getPackageProduction_withCache.cacheKey', cacheKey
async function getPackageProduction_withCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    return new Promise((resolve, reject) => {
        
            let tfValue = packageCache.get(cacheKey);
            if (tfValue) {
                return resolve(tfValue);
            }
            getPackageProduction(owner, name).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: IPackageProductionModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                tfValue = {
                    packiFiles: tf_packiFiles_object
                 };
                packageCache.set(cacheKey, tfValue);
                return resolve(tfValue);
            }
            ).catch((err: any) => {
            
                console.log('getPackageProduction_withCache.getArtifactProduction.error', err);
                return reject(err);
            }
            )
        }
        );
}

export function invalidateCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    packageCache.del(cacheKey);
}
