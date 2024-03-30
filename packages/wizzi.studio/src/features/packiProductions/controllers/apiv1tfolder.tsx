/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packiProductions\controllers\apiv1tfolder.tsx.ittf
    utc time: Sun, 24 Mar 2024 21:38:42 GMT
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
import {getTFolderList, validateTFolder, getTFolder, getTFolderObjectById, updateTFolder, createTFolder, invalidateCache} from '../api/tfolder';

const myname = 'features/production/controllers/apiv1tfolder';

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

export class ApiV1TFolderController implements ControllerType {
    
    public path = '/api/v1/production/tfolder';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1TFolderController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(this.getTFolders))
        this.router.get("/checkname/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getCheckTFolderName))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getTFolder))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(this.putTFolder))
        this.router.put("/packidiffs/:id", makeHandlerAwareOfAsyncErrors(this.putTFolderPackiDiffs))
        this.router.post("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.postTFolder))
    };
    
    private getTFolders = async (request: Request, response: Response) => 
    
        getTFolderList({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getTFolders.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCheckTFolderName = async (request: Request, response: Response) => 
    
        validateTFolder(request.params.owner, request.params.name).then((result: any) => 
        
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
    
    private getTFolder = async (request: Request, response: Response) => 
    
        getTFolder(request.params.owner, request.params.name).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getTFolder.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postTFolder = async (request: Request, response: Response) => 
    
        createTFolder(request.params.owner, request.params.name, request.body.description, JSON.stringify(request.body.packiFiles)).then((result: any) => {
        
            invalidateCache(request.params.owner, request.params.name)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'postTFolder.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putTFolder = async (request: Request, response: Response) => 
    
        updateTFolder(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(request.body.packiFiles)).then((result: any) => {
        
            invalidateCache(request.params.owner, request.params.name)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putTFolder.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putTFolderPackiDiffs = async (request: Request, response: Response) => {
    
        console.log('putTFolderPackiDiffs.request.params', request.params, __filename);
        console.log('putTFolderPackiDiffs.request.body.options', Object.keys(request.body.options), __filename);
        console.log('putTFolderPackiDiffs.request.body.packiDiffs', Object.keys(request.body.packiDiffs), __filename);
        const options = request.body.options || {};
        getTFolderObjectById(request.params.id).then((prevTFolder: any) => {
        
            console.log('putTFolderPackiDiffs.prevPackiFiles', Object.keys(prevTFolder.packiFiles), __filename);
            const pm = new PackiBuilder(prevTFolder.packiFiles);
            pm.applyPatch_ChangesOnly(request.body.packiDiffs)
            return exec_updateTFolder(request, response, pm.packiFiles);
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putTFolderPackiDiffs.getTFolderObjectById.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
function exec_updateTFolder(request: any, response: any, packiFiles: any) {

    updateTFolder(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(packiFiles)).then((result: any) => {
    
        invalidateCache(request.params.id)
        sendSuccess(response, result)
    }
    ).catch((err: any) => {
    
        if (typeof err === 'object' && err !== null) {
        }
        console.log("[31m%s[0m", 'exec_updateTFolder.updateTFolder.error', err);
        sendFailure(response, {
            err: err
         }, 501)
    }
    )
}
