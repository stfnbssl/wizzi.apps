/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packiProductions\controllers\apiv1job.tsx.ittf
    utc time: Thu, 11 Apr 2024 13:29:19 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendError, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {wizziTypes, wizziProds, wizziFactory} from '../../wizzi';
import {packiTypes, PackiBuilder} from '../../packi';
import {mergePackiFiles} from '../utils';
import {getJobList, validateJob, getJob, getJobObjectById, updateJob, createJob, invalidateCache} from '../api/job';

const myname = 'features/production/controllers/apiv1job';

function makeHandlerAwareOfAsyncErrors(handler: any) {

    return async function(request: Request, response: Response, next: NextFunction) {
        
            try {
                await handler(request, response, next);
            } 
            catch (error: any) {
                if (error instanceof FcError) {
                    response.status(statusCode.BAD_REQUEST).send({
                        code: error.code, 
                        message: error.message, 
                        data: error.data || {}
                     })
                }
                else {
                    const fcError = new FcError(SYSTEM_ERROR);
                    response.status(statusCode.BAD_REQUEST).send({
                        code: fcError.code, 
                        message: error.message, 
                        data: fcError.data || {}
                     })
                }
            } 
        };
}

export class ApiV1JobController implements ControllerType {
    
    public path = '/api/v1/production/job';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1JobController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(this.getJobs))
        this.router.get("/checkname/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getCheckJobName))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getJob))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(this.putJob))
        this.router.put("/packidiffs/:id", makeHandlerAwareOfAsyncErrors(this.putJobPackiDiffs))
        this.router.post("/:post", makeHandlerAwareOfAsyncErrors(this.postJob))
    };
    
    private getJobs = async (request: Request, response: Response) => 
    
        getJobList({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getJobs.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCheckJobName = async (request: Request, response: Response) => 
    
        validateJob(request.params.owner, request.params.name).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getJob = async (request: Request, response: Response) => 
    
        getJob(request.params.owner, request.params.name).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getJob.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postJob = async (request: Request, response: Response) => 
    
        createJob(request.params.owner, request.params.name, request.body.description, JSON.stringify(request.body.packiFiles)).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'postJob.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putJob = async (request: Request, response: Response) => 
    
        updateJob(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(request.body.packiFiles)).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putJob.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putJobPackiDiffs = async (request: Request, response: Response) => {
    
        console.log('putJobPackiDiffs.request.params', request.params, __filename);
        console.log('putJobPackiDiffs.request.body.options', Object.keys(request.body.options), __filename);
        console.log('putJobPackiDiffs.request.body.packiDiffs', Object.keys(request.body.packiDiffs), __filename);
        const options = request.body.options || {};
        getJobObjectById(request.params.id).then((prevJob: any) => {
        
            console.log('putJobPackiDiffs.prevPackiFiles', Object.keys(prevJob.packiFiles), __filename);
            const pm = new PackiBuilder(prevJob.packiFiles);
            pm.applyPatch_ChangesOnly(request.body.packiDiffs)
            return exec_updateJob(request, response, pm.packiFiles);
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putJobPackiDiffs.getJobObjectById.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
function exec_updateJob(request: any, response: any, packiFiles: any) {

    updateJob(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(packiFiles)).then((result: any) => {
    
        invalidateCache(request.params.id)
        sendSuccess(response, result)
    }
    ).catch((err: any) => {
    
        if (typeof err === 'object' && err !== null) {
        }
        console.log("[31m%s[0m", 'exec_updateJob.updateJob.error', err);
        sendFailure(response, {
            err: err
         }, 501)
    }
    )
}
