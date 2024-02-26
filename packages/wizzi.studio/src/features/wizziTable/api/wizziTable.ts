/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziTable\api\wizziTable.ts.ittf
    utc time: Sun, 25 Feb 2024 13:18:08 GMT
*/
import {ValidateResult, CRUDResult} from '../../types';
import {GetWizziTableModel} from '../mongo/wizziTable';;
import {IWizziTableModel} from '../types';;

const myname = 'src/features/wizziTable/api/wizziTable';


export /**
    // console.log
        // myname
        // 'getWizziTableList'
        // 'options'
        // options
*/
async function getWizziTableList(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    
    const WizziTable = GetWizziTableModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = WizziTable.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find((err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getWizziTableList', 'WizziTable.find', 'error', err);
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
                        field1: item.field1, 
                        field2: item.field2
                     };
                    resultItem.push(item_obj)
                }
                resolve({
                    oper: 'getWizziTableList', 
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
        // 'getWizziTable'
        // owner
        // name
*/
async function getWizziTable(owner: string, name: string):  Promise<CRUDResult> {

    
    
    const WizziTable = GetWizziTableModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            WizziTable.find(query, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getWizziTable', 'WizziTable.find', 'error', err);
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
        // 'getWizziTableById'
        // id
*/
async function getWizziTableById(id: string):  Promise<CRUDResult> {

    
    
    const WizziTable = GetWizziTableModel();
    
    return new Promise((resolve, reject) => {
        
            
            WizziTable.find({
                _id: id
             }, (err: any, result: IWizziTableModel[]) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getWizziTable', 'WizziTable.find', 'error', err);
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
                    oper: 'getWizziTable', 
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
        // 'createWizziTable'
        // owner
        // name
        // field1
        // field2
*/
async function createWizziTable(owner?: string, name?: string, field1?: string, field2?: string):  Promise<CRUDResult> {

    
    
    const WizziTable = GetWizziTableModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            WizziTable.find(query, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getWizziTable', 'WizziTable.find', 'error', err);
                    return reject(err);
                }
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: ' already exists'
                         });
                }
                const newWizziTable = new WizziTable({
                    owner: owner, 
                    name: name, 
                    field1: field1, 
                    field2: field2, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newWizziTable.save(function(err: any, doc: any) {
                
                    if (err) {
                        console.log("[31m%s[0m", myname, 'createWizziTable', 'newWizziTable.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'createWizziTable', 
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
        // 'updateWizziTable'
        // owner
        // name
        // field1
        // field2
*/
async function updateWizziTable(id?: string, owner?: string, name?: string, field1?: string, field2?: string):  Promise<CRUDResult> {

    
    
    const WizziTable = GetWizziTableModel();
    
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
            if (typeof field1 !== 'undefined') {
                update['field1'] = field1;
            }
            if (typeof field2 !== 'undefined') {
                update['field2'] = field2;
            }
            update['updated_at'] = new Date();
            
            WizziTable.findOneAndUpdate(query, update, {}, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'updateWizziTable', 'WizziTable.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                if (!result) {
                    console.log("[31m%s[0m", myname, 'updateWizziTable', 'WizziTable.findOneAndUpdate', 'error', 'document not found');
                    return reject({
                            oper: 'updateWizziTable', 
                            ok: false, 
                            message: ' document not found: ' + id
                         });
                }
                
                return resolve({
                        oper: 'updateWizziTable', 
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
        // 'deleteWizziTable'
        // owner
        // name
*/
async function deleteWizziTable(id?: string, owner?: string, name?: string):  Promise<CRUDResult> {

    
    
    const WizziTable = GetWizziTableModel();
    
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
            
            WizziTable.deleteOne(query, (err: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'deleteWizziTable', 'WizziTable.deleteOne', 'error', err);
                    return reject(err);
                }
                resolve({
                    oper: 'deleteWizziTable', 
                    ok: true, 
                    message: ''
                 })
            }
            )
        }
        );
}
