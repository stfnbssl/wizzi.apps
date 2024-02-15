/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packiProductions\api\job.ts.ittf
    utc time: Thu, 15 Feb 2024 20:31:55 GMT
*/
import NodeCache from 'node-cache';
import {ValidateResult, CRUDResult} from '../../types';
import {packiTypes} from '../../packi';
import {packiConfigPath} from '../../config/env';
import {wizziProds, wizziMaps} from '../../wizzi';
import {GetJobModel} from '../mongo/job';
import {IJobModel} from '../types';
import {productionApi} from '../index';

const myname = 'features.production.api.Job';

const jobCache = new NodeCache({
    stdTTL: 120, 
    checkperiod: 60
 });
export async function validateJob(owner: string, name: string):  Promise<ValidateResult> {

    const Job = GetJobModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            Job.find(query, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'A Job defines a folder template for generating the tasks that execute a Wizzi production already exists'
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
        // 'getJobList'
        // 'options'
        // options
*/
async function getJobList(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    
    const Job = GetJobModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = Job.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find((err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getJobList', 'Job.find', 'error', err);
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
                    oper: 'getJobList', 
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
        // 'getJob'
        // owner
        // name
*/
async function getJob(owner: string, name: string):  Promise<CRUDResult> {

    
    
    const Job = GetJobModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            Job.find(query, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getJob', 'Job.find', 'error', err);
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
                    message: 'A Job defines a folder template for generating the tasks that execute a Wizzi production not found'
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'getJobById'
        // id
*/
async function getJobById(id: string):  Promise<CRUDResult> {

    
    
    const Job = GetJobModel();
    
    return new Promise((resolve, reject) => {
        
            
            Job.find({
                _id: id
             }, (err: any, result: IJobModel[]) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getJob', 'Job.find', 'error', err);
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
                    oper: 'getJob', 
                    ok: false, 
                    message: 'A Job defines a folder template for generating the tasks that execute a Wizzi production not found'
                 })
            }
            )
        }
        );
}

export async function getJobObject(owner: string, name: string, loadPackiConfig?: boolean) {

    return new Promise((resolve, reject) => 
        
            getJob(owner, name).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const job: IJobModel = result.item;
                return resolve(_createJobObject(job, loadPackiConfig));
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.production.api.job.getJobObject.getJob.error', err);
                return reject(err);
            }
            )
        
        );
}

export async function getJobObjectById(id: string, loadPackiConfig?: boolean) {

    return new Promise((resolve, reject) => 
        
            getJobById(id).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const job: IJobModel = result.item;
                return resolve(_createJobObject(job, loadPackiConfig));
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.production.api.job.getJobObjectById.getJobById.error', err);
                return reject(err);
            }
            )
        
        );
}
async function _createJobObject(job: IJobModel, loadPackiConfig?: boolean) {

    
    return new Promise((resolve, reject) => {
        
            const job_packiFiles_object: packiTypes.PackiFiles = JSON.parse(job.packiFiles);
            const obj = {
                ...job._doc, 
                packiFiles: job_packiFiles_object, 
                _id: job._id.toString(), 
                packiProduction: "Job", 
                packiConfig: job_packiFiles_object[packiConfigPath], 
                packiConfigObj: null
             };
            
            if (loadPackiConfig) {
                if (!obj.packiConfig) {
                    return reject({
                            message: 'Missing file ' + packiConfigPath + ' in Job'
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
                    console.log("[31m%s[0m", 'features.production.api.job.getJobObject._createJobObject.error', err);
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
        // 'createJob'
        // owner
        // name
        // description
        // packiFiles
*/
async function createJob(owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    
    const Job = GetJobModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            Job.find(query, 
            // loog myname, 'getJob', 'Job.find', 'result', result
            (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getJob', 'Job.find', 'error', err);
                    return reject(err);
                }
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'A Job defines a folder template for generating the tasks that execute a Wizzi production already exists'
                         });
                }
                const newJob = new Job({
                    owner: owner, 
                    name: name, 
                    description: description, 
                    packiFiles: packiFiles, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newJob.save(function(err: any, doc: any) {
                
                    if (err) {
                        console.log("[31m%s[0m", myname, 'createJob', 'newJob.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'createJob', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'A Job defines a folder template for generating the tasks that execute a Wizzi production created'
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
        // 'updateJob'
        // owner
        // name
        // description
        // packiFiles
*/
async function updateJob(id?: string, owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    
    const Job = GetJobModel();
    
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
            
            Job.findOneAndUpdate(query, update, {}, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'updateJob', 'Job.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                if (!result) {
                    console.log("[31m%s[0m", myname, 'updateJob', 'Job.findOneAndUpdate', 'error', 'document not found');
                    return reject({
                            oper: 'updateJob', 
                            ok: false, 
                            message: 'A Job defines a folder template for generating the tasks that execute a Wizzi production document not found: ' + id
                         });
                }
                
                return resolve({
                        oper: 'updateJob', 
                        ok: true, 
                        message: 'A Job defines a folder template for generating the tasks that execute a Wizzi production updated'
                     });
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'deleteJob'
        // owner
        // name
*/
async function deleteJob(id?: string, owner?: string, name?: string):  Promise<CRUDResult> {

    
    
    const Job = GetJobModel();
    
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
            
            Job.deleteOne(query, (err: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'deleteJob', 'Job.deleteOne', 'error', err);
                    return reject(err);
                }
                resolve({
                    oper: 'deleteJob', 
                    ok: true, 
                    message: 'A Job defines a folder template for generating the tasks that execute a Wizzi production'
                 })
            }
            )
        }
        );
}

export async function getJob_withCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    return new Promise((resolve, reject) => {
        
            let tfValue = {
                packiFiles: {
                    
                 }
             };
            getJob(owner, name).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: IJobModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                tfValue = {
                    packiFiles: tf_packiFiles_object
                 };
                return resolve(tfValue);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getJob_withCache.getArtifactProduction.error', err);
                return reject(err);
            }
            )
        }
        );
}

export function invalidateCache(owner: string, name?: string) {

    var cacheKey = owner + '|' + name;
    jobCache.del(cacheKey);
}
