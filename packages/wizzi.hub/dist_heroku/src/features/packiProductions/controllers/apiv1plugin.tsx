/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub\.wizzi-override\src\features\packiProductions\controllers\apiv1plugin.tsx.ittf
    utc time: Sat, 06 Apr 2024 12:40:02 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {wizziTypes, wizziProds, WizziFactory} from '../../wizzi';
import {packiTypes, PackiBuilder} from '../../packi';
import {mergePackiFiles} from '../utils';
import {getPluginProductionList, validatePluginProduction, getPluginProduction, getPluginProductionObjectById, updatePluginProduction, createPluginProduction, invalidateCache} from '../api/plugin';

const myname = 'features/production/controllers/apiv1plugin';

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

export class ApiV1PluginProductionController implements ControllerType {
    
    public path = '/api/v1/production/plugin';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1PluginProductionController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(this.getPluginProductions))
        this.router.get("/checkname/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getCheckPluginName))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getPluginProduction))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(this.putPluginProduction))
        this.router.put("/packidiffs/:id", makeHandlerAwareOfAsyncErrors(this.putPluginProductionPackiDiffs))
        this.router.post("/:post", makeHandlerAwareOfAsyncErrors(this.postPluginProduction))
    };
    
    private getPluginProductions = async (request: Request, response: Response) => 
    
        getPluginProductionList({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getPluginProductions.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCheckPluginName = 
    // loog 'getCheckPluginName.request.params', request.params
    async (request: Request, response: Response) => 
    
        validatePluginProduction(request.params.owner, request.params.name).then(
        // loog 'getCheckPluginName.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getCheckPluginName', err);
            sendFailure(response, {
                err: err, 
                method: 'getCheckPluginName'
             }, 501)
        }
        )
    
    ;
    
    private getPluginProduction = async (request: Request, response: Response) => 
    
        getPluginProduction(request.params.owner, request.params.name).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getPluginProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postPluginProduction = async (request: Request, response: Response) => 
    
        createPluginProduction(request.params.owner, request.params.name, request.body.description, JSON.stringify(request.body.packiFiles)).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'postPluginProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putPluginProduction = async (request: Request, response: Response) => 
    
        updatePluginProduction(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(request.body.packiFiles)).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putPluginProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putPluginProductionPackiDiffs = async (request: Request, response: Response) => {
    
        console.log('putPluginProductionPackiDiffs.request.params', request.params, __filename);
        console.log('putPluginProductionPackiDiffs.request.body.options', Object.keys(request.body.options), __filename);
        console.log('putPluginProductionPackiDiffs.request.body.packiDiffs', Object.keys(request.body.packiDiffs), __filename);
        const options = request.body.options || {};
        getPluginProductionObjectById(request.params.id).then((prevPlugin: any) => {
        
            console.log('putPluginProductionPackiDiffs.prevPackiFiles', Object.keys(prevPlugin.packiFiles), __filename);
            const pm = new PackiBuilder(prevPlugin.packiFiles);
            pm.applyPatch_ChangesOnly(request.body.packiDiffs)
            return exec_updatePluginProduction(request, response, pm.packiFiles);
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putPluginProductionPackiDiffs.getPluginProductionObjectById.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
function exec_updatePluginProduction(request: any, response: any, packiFiles: any) {

    updatePluginProduction(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(packiFiles)).then(
    // loog 'putPluginProduction.update.result', result
    (result: any) => {
    
        invalidateCache(request.params.id)
        sendSuccess(response, result)
    }
    ).catch((err: any) => {
    
        if (typeof err === 'object' && err !== null) {
        }
        console.log("[31m%s[0m", 'exec_updatePluginProduction.updatePluginProduction.error', err);
        sendFailure(response, {
            err: err
         }, 501)
    }
    )
}
