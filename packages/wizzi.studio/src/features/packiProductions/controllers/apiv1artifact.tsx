/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packiProductions\controllers\apiv1artifact.tsx.ittf
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
import {getArtifactProductionList, validateArtifactProduction, getArtifactProduction, getArtifactProductionObjectById, updateArtifactProduction, createArtifactProduction, invalidateCache} from '../api/artifact';
const myname = 'features/production/controllers/apiv1artifact';

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

export class ApiV1ArtifactProductionController implements ControllerType {
    
    public path = '/api/v1/production/artifact';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1ArtifactProductionController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(this.getArtifactProductions))
        this.router.get("/checkname/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getCheckArtifactName))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getArtifactProduction))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(this.putArtifactProduction))
        this.router.put("/packidiffs/:id", makeHandlerAwareOfAsyncErrors(this.putArtifactProductionPackiDiffs))
        this.router.post("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.postArtifactProduction))
    };
    
    private getArtifactProductions = async (request: Request, response: Response) => 
    
        getArtifactProductionList({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getArtifactProductions.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCheckArtifactName = async (request: Request, response: Response) => 
    
        validateArtifactProduction(request.params.owner, request.params.name).then((result: any) => 
        
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
    
    private getArtifactProduction = async (request: Request, response: Response) => 
    
        getArtifactProduction(request.params.owner, request.params.name).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getArtifactProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postArtifactProduction = async (request: Request, response: Response) => 
    
        createArtifactProduction(request.params.owner, request.params.name, request.body.description, request.body.mainIttf, request.body.wizziSchema, JSON.stringify(request.body.packiFiles)).then((result: any) => {
        
            invalidateCache(request.params.owner, request.params.name)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'postArtifactProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putArtifactProduction = async (request: Request, response: Response) => {
    
        console.log('putArtifactProduction.request.params', request.params, __filename);
        console.log('putArtifactProduction.request.body', Object.keys(request.body), __filename);
        if (request.body.packiFiles) {
            console.log('putArtifactProduction.request.body.packiFiles', Object.keys(request.body.packiFiles), __filename);
        }
        const options = request.body.options || {};
        if (options.wizzify) {
            wizziProds.wizzify(request.body.packiFiles).then((resultPackiFiles: any) => {
            
                console.log('putArtifactProduction.wizzify.resultPackiFiles', Object.keys(resultPackiFiles), __filename);
                return exec_updateArtifactProduction(request, response, resultPackiFiles);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putArtifactProduction.wizzify.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        }
        else if (options.merge) {
            getArtifactProductionObjectById(request.params.id).then((prevArtifact: any) => {
            
                const resultPackiFiles = mergePackiFiles(prevArtifact.packiFiles, request.body.packiFiles);
                console.log('putArtifactProduction.merge.resultPackiFiles', Object.keys(resultPackiFiles), __filename);
                return exec_updateArtifactProduction(request, response, resultPackiFiles);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putArtifactProduction.merge.getArtifactProductionById.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        }
        else {
            exec_updateArtifactProduction(request, response, request.body.packiFiles)
        }
    }
    ;
    
    private putArtifactProductionPackiDiffs = async (request: Request, response: Response) => {
    
        console.log('putArtifactProductionPackiDiffs.request.params', request.params, __filename);
        console.log('putArtifactProductionPackiDiffs.request.body.options', Object.keys(request.body.options), __filename);
        console.log('putArtifactProductionPackiDiffs.request.body.packiDiffs', Object.keys(request.body.packiDiffs), __filename);
        const options = request.body.options || {};
        getArtifactProductionObjectById(request.params.id).then((prevArtifact: any) => {
        
            console.log('putArtifactProductionPackiDiffs.prevPackiFiles', Object.keys(prevArtifact.packiFiles), __filename);
            const pm = new PackiBuilder(prevArtifact.packiFiles);
            pm.applyPatch_ChangesOnly(request.body.packiDiffs)
            return exec_updateArtifactProduction(request, response, pm.packiFiles);
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putArtifactProductionPackiDiffs.getArtifactProductionObjectById.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
function exec_updateArtifactProduction(request: any, response: any, packiFiles: any) {

    updateArtifactProduction(request.params.id, request.body.owner, request.body.name, request.body.description, request.body.mainIttf, request.body.wizziSchema, JSON.stringify(packiFiles)).then((result: any) => {
    
        invalidateCache(request.params.id)
        sendSuccess(response, result)
    }
    ).catch((err: any) => {
    
        if (typeof err === 'object' && err !== null) {
        }
        console.log("[31m%s[0m", 'exec_updateArtifactProduction.updateArtifactProduction.error', err);
        sendFailure(response, {
            err: err
         }, 501)
    }
    )
}
