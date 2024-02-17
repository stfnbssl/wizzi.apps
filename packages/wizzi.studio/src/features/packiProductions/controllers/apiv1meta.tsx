/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packiProductions\controllers\apiv1meta.tsx.ittf
    utc time: Sat, 17 Feb 2024 04:55:17 GMT
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
import {getMetaProductionList, validateMetaProduction, getMetaProduction, getMetaProductionObjectById, updateMetaProduction, createMetaProduction, invalidateCache} from '../api/meta';
import {generateMetaProduction} from '../api/meta';
import {artifactApi, productionApi} from '../../packiProductions';
const myname = 'features/production/controllers/apiv1metaproduction';

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

export class ApiV1MetaProductionController implements ControllerType {
    
    public path = '/api/v1/production/meta';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1MetaProductionController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(this.getMetaProductions))
        this.router.get("/props/:id", makeHandlerAwareOfAsyncErrors(this.getMetaProperties))
        this.router.get("/checkname/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getCheckMetaName))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getMetaProduction))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(this.putMetaProduction))
        this.router.put("/packidiffs/:id", makeHandlerAwareOfAsyncErrors(this.putMetaProductionPackiDiffs))
        this.router.post("'/:owner/:name", makeHandlerAwareOfAsyncErrors(this.postMetaProduction))
        this.router.post("'/generate/:owner/:name", makeHandlerAwareOfAsyncErrors(this.generateMetaProductionByName))
    };
    
    private getMetaProductions = async (request: Request, response: Response) => 
    
        getMetaProductionList({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => {
        
            if (result.ok) {
                sendSuccess(response, result)
            }
            else {
                console.log("[31m%s[0m", 'getMetaProductions.error', result);
                sendFailure(response, {
                    err: result
                 }, 501)
            }
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getMetaProductions.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getMetaProperties = async (request: Request, response: Response) => 
    
        productionApi.prepareProductionById('meta', request.params.id, '', {}).then((metaProductionSet: any) => 
        
            wizziProds.generateArtifact('properties/index.json.ittf', metaProductionSet.packiFiles, metaProductionSet.context).then(
            // loog myname, 'getMetaProperties.generateArtifact.result', value
            value => 
            
                sendSuccess(response, {
                    meta: JSON.parse(value.artifactContent)
                 })
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.packi.controllers.production.generateArtifact.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getMetaProperties.prepareProductionById.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCheckMetaName = 
    // loog 'getCheckMetaName.request.params', request.params
    async (request: Request, response: Response) => 
    
        validateMetaProduction(request.params.owner, request.params.name).then(
        // loog 'getCheckMetaName.result', result
        (result: any) => 
        
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
    
    private getMetaProduction = async (request: Request, response: Response) => 
    
        getMetaProduction(request.params.owner, request.params.name).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getMetaProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postMetaProduction = 
    // loog 'postMetaProduction.request.params', request.params
    
    // loog 'postMetaProduction.request.body', request.body
    async (request: Request, response: Response) => 
    
        createMetaProduction(request.params.owner, request.params.name, request.body.description, JSON.stringify(request.body.packiFiles)).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'postMetaProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putMetaProduction = async (request: Request, response: Response) => 
    
        updateMetaProduction(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(request.body.packiFiles)).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putMetaProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putMetaProductionPackiDiffs = async (request: Request, response: Response) => {
    
        console.log('putMetaProductionPackiDiffs.request.params', request.params, __filename);
        console.log('putMetaProductionPackiDiffs.request.body.options', Object.keys(request.body.options), __filename);
        console.log('putMetaProductionPackiDiffs.request.body.packiDiffs', Object.keys(request.body.packiDiffs), __filename);
        const options = request.body.options || {};
        getMetaProductionObjectById(request.params.id).then((prevMeta: any) => {
        
            console.log('putMetaProductionPackiDiffs.prevPackiFiles', Object.keys(prevMeta.packiFiles), __filename);
            const pm = new PackiBuilder(prevMeta.packiFiles);
            pm.applyPatch_ChangesOnly(request.body.packiDiffs)
            return exec_updateMetaProduction(request, response, pm.packiFiles);
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putMetaProductionPackiDiffs.getMetaProductionObjectById.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private generateMetaProductionByName = async (request: Request, response: Response) => 
    
        generateMetaProduction(request.params.owner, request.params.name, request.body.metaCtx).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'generateMetaProductionByName.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
function exec_updateMetaProduction(request: any, response: any, packiFiles: any) {

    updateMetaProduction(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(packiFiles)).then(
    // loog 'putMetaProduction.update.result', result
    (result: any) => {
    
        invalidateCache(request.params.id)
        sendSuccess(response, result)
    }
    ).catch((err: any) => {
    
        if (typeof err === 'object' && err !== null) {
        }
        console.log("[31m%s[0m", 'exec_updateMetaProduction.updateMetaProduction.error', err);
        sendFailure(response, {
            err: err
         }, 501)
    }
    )
}
