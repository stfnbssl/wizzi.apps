/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\cdn\api\resource.ts.ittf
    utc time: Sat, 06 May 2023 11:50:24 GMT
*/
import path from 'path';
import NodeCache from 'node-cache';
import {GetCdnResourceModel} from '../mongo/resource';
import {ICdnResourceModel} from '../types';
import {ValidateResult, CRUDResult} from '../../types';

const myname = 'features.cdn.api.resource';

const cdnResourceCache = new NodeCache({
    stdTTL: 120, 
    checkperiod: 60
 });

export async function validateCdnResource(owner: string, name: string) {

    const CdnResource = GetCdnResourceModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            CdnResource.find(query, (err, result) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'validateCdnResource', 'CdnResource.find', 'error', err);
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'cdn resource already exists'
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
export function invalidateCache(owner: string, name?: string) {

    var cacheKey = owner + '|' + name;
    cdnResourceCache.del(cacheKey);
}

export /**
    // console.log
        // myname
        // 'getCdnResourceList'
        // 'options'
        // options
*/
async function getCdnResourceList(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    
    const CdnResource = GetCdnResourceModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = CdnResource.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find((err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getCdnResourceList', 'CdnResource.find', 'error', err);
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
                        contents: item.contents
                     };
                    resultItem.push(item_obj)
                }
                resolve({
                    oper: 'getCdnResourceList', 
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
        // 'getCdnResource'
        // owner
        // name
*/
async function getCdnResource(owner: string, name: string):  Promise<CRUDResult> {

    
    
    const CdnResource = GetCdnResourceModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            CdnResource.find(query, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getCdnResource', 'CdnResource.find', 'error', err);
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
                    message: 'cdn resource not found'
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'getCdnResourceById'
        // id
*/
async function getCdnResourceById(id: string):  Promise<CRUDResult> {

    
    
    const CdnResource = GetCdnResourceModel();
    
    return new Promise((resolve, reject) => {
        
            
            CdnResource.find({
                _id: id
             }, (err: any, result: ICdnResourceModel[]) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getCdnResource', 'CdnResource.find', 'error', err);
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
                    oper: 'getCdnResource', 
                    ok: false, 
                    message: 'cdn resource not found'
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'createCdnResource'
        // owner
        // name
        // contents
*/
async function createCdnResource(owner?: string, name?: string, contents?: string):  Promise<CRUDResult> {

    
    
    const CdnResource = GetCdnResourceModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            CdnResource.find(query, 
            // loog myname, 'getCdnResource', 'CdnResource.find', 'result', result
            (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getCdnResource', 'CdnResource.find', 'error', err);
                    return reject(err);
                }
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'cdn resource already exists'
                         });
                }
                const newCdnResource = new CdnResource({
                    owner: owner, 
                    name: name, 
                    contents: contents, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newCdnResource.save(function(err: any, doc: any) {
                
                    if (err) {
                        console.log("[31m%s[0m", myname, 'createCdnResource', 'newCdnResource.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'createCdnResource', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'cdn resource created'
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
        // 'updateCdnResource'
        // owner
        // name
        // contents
*/
async function updateCdnResource(id?: string, owner?: string, name?: string, contents?: string):  Promise<CRUDResult> {

    
    
    const CdnResource = GetCdnResourceModel();
    
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
            if (typeof contents !== 'undefined') {
                update['contents'] = contents;
            }
            update['updated_at'] = new Date();
            
            CdnResource.findOneAndUpdate(query, update, {}, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'updateCdnResource', 'CdnResource.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                if (!result) {
                    console.log("[31m%s[0m", myname, 'updateCdnResource', 'CdnResource.findOneAndUpdate', 'error', 'document not found');
                    return reject({
                            oper: 'updateCdnResource', 
                            ok: false, 
                            message: 'cdn resource document not found: ' + id
                         });
                }
                
                return resolve({
                        oper: 'updateCdnResource', 
                        ok: true, 
                        message: 'cdn resource updated'
                     });
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'deleteCdnResource'
        // owner
        // name
*/
async function deleteCdnResource(id: string, owner?: string, name?: string, contents?: string):  Promise<CRUDResult> {

    
    
    const CdnResource = GetCdnResourceModel();
    
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
            
            CdnResource.deleteOne(query, (err: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'deleteCdnResource', 'CdnResource.deleteOne', 'error', err);
                    return reject(err);
                }
                resolve({
                    oper: 'deleteCdnResource', 
                    ok: true, 
                    message: 'cdn resource'
                 })
            }
            )
        }
        );
}
