/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziAction\api\wizziAction.ts.ittf
    utc time: Sun, 25 Feb 2024 13:18:08 GMT
*/
import {ValidateResult, CRUDResult} from '../../types';
import {GetWizziActionModel} from '../mongo/wizziAction';;
import {IWizziActionModel} from '../types';;

const myname = 'src/features/wizziAction/api/wizziAction';


export /**
    // console.log
        // myname
        // 'getWizziActionList'
        // 'options'
        // options
*/
async function getWizziActionList(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    
    const WizziAction = GetWizziActionModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = WizziAction.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find((err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getWizziActionList', 'WizziAction.find', 'error', err);
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
                        kind: item.kind, 
                        name: item.name, 
                        description: item.description
                     };
                    resultItem.push(item_obj)
                }
                resolve({
                    oper: 'getWizziActionList', 
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
        // 'getWizziAction'
        // owner
        // kind
        // name
*/
async function getWizziAction(owner: string, kind: string, name: string):  Promise<CRUDResult> {

    
    
    const WizziAction = GetWizziActionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                kind: kind, 
                name: name
             };
            
            WizziAction.find(query, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getWizziAction', 'WizziAction.find', 'error', err);
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
                    message: ' not found'
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'getWizziActionById'
        // id
*/
async function getWizziActionById(id: string):  Promise<CRUDResult> {

    
    
    const WizziAction = GetWizziActionModel();
    
    return new Promise((resolve, reject) => {
        
            
            WizziAction.find({
                _id: id
             }, (err: any, result: IWizziActionModel[]) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getWizziAction', 'WizziAction.find', 'error', err);
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
                    oper: 'getWizziAction', 
                    ok: false, 
                    message: ' not found'
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'createWizziAction'
        // owner
        // kind
        // name
        // description
*/
async function createWizziAction(owner?: string, kind?: string, name?: string, description?: string):  Promise<CRUDResult> {

    
    
    const WizziAction = GetWizziActionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                kind: kind, 
                name: name
             };
            
            WizziAction.find(query, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getWizziAction', 'WizziAction.find', 'error', err);
                    return reject(err);
                }
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: ' already exists'
                         });
                }
                const newWizziAction = new WizziAction({
                    owner: owner, 
                    kind: kind, 
                    name: name, 
                    description: description, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newWizziAction.save(function(err: any, doc: any) {
                
                    if (err) {
                        console.log("[31m%s[0m", myname, 'createWizziAction', 'newWizziAction.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'createWizziAction', 
                            ok: true, 
                            item: doc._doc, 
                            message: ' created'
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
        // 'updateWizziAction'
        // owner
        // kind
        // name
        // description
*/
async function updateWizziAction(id?: string, owner?: string, kind?: string, name?: string, description?: string):  Promise<CRUDResult> {

    
    
    const WizziAction = GetWizziActionModel();
    
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
                    kind: kind, 
                    name: name
                 };
            }
            const update: any = {};
            if (typeof owner !== 'undefined') {
                update['owner'] = owner;
            }
            if (typeof kind !== 'undefined') {
                update['kind'] = kind;
            }
            if (typeof name !== 'undefined') {
                update['name'] = name;
            }
            if (typeof description !== 'undefined') {
                update['description'] = description;
            }
            update['updated_at'] = new Date();
            
            WizziAction.findOneAndUpdate(query, update, {}, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'updateWizziAction', 'WizziAction.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                if (!result) {
                    console.log("[31m%s[0m", myname, 'updateWizziAction', 'WizziAction.findOneAndUpdate', 'error', 'document not found');
                    return reject({
                            oper: 'updateWizziAction', 
                            ok: false, 
                            message: ' document not found: ' + id
                         });
                }
                
                return resolve({
                        oper: 'updateWizziAction', 
                        ok: true, 
                        message: ' updated'
                     });
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'deleteWizziAction'
        // owner
        // kind
        // name
*/
async function deleteWizziAction(id?: string, owner?: string, kind?: string, name?: string):  Promise<CRUDResult> {

    
    
    const WizziAction = GetWizziActionModel();
    
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
                    kind: kind, 
                    name: name
                 };
            }
            
            WizziAction.deleteOne(query, (err: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'deleteWizziAction', 'WizziAction.deleteOne', 'error', err);
                    return reject(err);
                }
                resolve({
                    oper: 'deleteWizziAction', 
                    ok: true, 
                    message: ''
                 })
            }
            )
        }
        );
}
