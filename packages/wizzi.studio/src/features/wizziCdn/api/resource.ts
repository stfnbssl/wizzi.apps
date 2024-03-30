/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziCdn\api\resource.ts.ittf
    utc time: Sun, 24 Mar 2024 21:38:41 GMT
*/
import path from 'path';
import NodeCache from 'node-cache';
import {GetWizziCdnResourceModel} from '../mongo/resource';
import {IWizziCdnResourceModel} from '../types';
import {ValidateResult, CRUDResult} from '../../types';

const myname = 'features.wizziCdn.api.resource';

const wizziCdnResourceCache = new NodeCache({
    stdTTL: 120, 
    checkperiod: 60
 });

export async function validateWizziCdnResource(owner: string, name: string) {

    const WizziCdnResource = GetWizziCdnResourceModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            WizziCdnResource.find(query, (err, result) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'validateWizziCdnResource', 'WizziCdnResource.find', 'error', err);
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'wizziCdn resource already exists'
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
    wizziCdnResourceCache.del(cacheKey);
}

export /**
    // console.log
        // myname
        // 'getWizziCdnResourceList'
        // 'options'
        // options
*/
async function getWizziCdnResourceList(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    
    const WizziCdnResource = GetWizziCdnResourceModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = WizziCdnResource.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find((err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getWizziCdnResourceList', 'WizziCdnResource.find', 'error', err);
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
                    oper: 'getWizziCdnResourceList', 
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
        // 'getWizziCdnResource'
        // owner
        // name
*/
async function getWizziCdnResource(owner: string, name: string):  Promise<CRUDResult> {

    
    
    const WizziCdnResource = GetWizziCdnResourceModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            WizziCdnResource.find(query, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getWizziCdnResource', 'WizziCdnResource.find', 'error', err);
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
                    message: 'wizziCdn resource not found'
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'getWizziCdnResourceById'
        // id
*/
async function getWizziCdnResourceById(id: string):  Promise<CRUDResult> {

    
    
    const WizziCdnResource = GetWizziCdnResourceModel();
    
    return new Promise((resolve, reject) => {
        
            
            WizziCdnResource.find({
                _id: id
             }, (err: any, result: IWizziCdnResourceModel[]) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getWizziCdnResource', 'WizziCdnResource.find', 'error', err);
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
                    oper: 'getWizziCdnResource', 
                    ok: false, 
                    message: 'wizziCdn resource not found'
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'createWizziCdnResource'
        // owner
        // name
        // contents
*/
async function createWizziCdnResource(owner?: string, name?: string, contents?: string):  Promise<CRUDResult> {

    
    
    const WizziCdnResource = GetWizziCdnResourceModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            WizziCdnResource.find(query, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getWizziCdnResource', 'WizziCdnResource.find', 'error', err);
                    return reject(err);
                }
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'wizziCdn resource already exists'
                         });
                }
                const newWizziCdnResource = new WizziCdnResource({
                    owner: owner, 
                    name: name, 
                    contents: contents, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newWizziCdnResource.save(function(err: any, doc: any) {
                
                    if (err) {
                        console.log("[31m%s[0m", myname, 'createWizziCdnResource', 'newWizziCdnResource.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'createWizziCdnResource', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'wizziCdn resource created'
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
        // 'updateWizziCdnResource'
        // owner
        // name
        // contents
*/
async function updateWizziCdnResource(id?: string, owner?: string, name?: string, contents?: string):  Promise<CRUDResult> {

    
    
    const WizziCdnResource = GetWizziCdnResourceModel();
    
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
            
            WizziCdnResource.findOneAndUpdate(query, update, {}, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'updateWizziCdnResource', 'WizziCdnResource.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                if (!result) {
                    console.log("[31m%s[0m", myname, 'updateWizziCdnResource', 'WizziCdnResource.findOneAndUpdate', 'error', 'document not found');
                    return reject({
                            oper: 'updateWizziCdnResource', 
                            ok: false, 
                            message: 'wizziCdn resource document not found: ' + id
                         });
                }
                
                return resolve({
                        oper: 'updateWizziCdnResource', 
                        ok: true, 
                        message: 'wizziCdn resource updated'
                     });
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'deleteWizziCdnResource'
        // owner
        // name
*/
async function deleteWizziCdnResource(id?: string, owner?: string, name?: string):  Promise<CRUDResult> {

    
    
    const WizziCdnResource = GetWizziCdnResourceModel();
    
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
            
            WizziCdnResource.deleteOne(query, (err: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'deleteWizziCdnResource', 'WizziCdnResource.deleteOne', 'error', err);
                    return reject(err);
                }
                resolve({
                    oper: 'deleteWizziCdnResource', 
                    ok: true, 
                    message: 'wizziCdn resource'
                 })
            }
            )
        }
        );
}
