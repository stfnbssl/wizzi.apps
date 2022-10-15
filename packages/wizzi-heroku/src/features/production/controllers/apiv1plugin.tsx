/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi-override\src\features\production\controllers\apiv1plugin.tsx.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {getListPluginProduction, validatePluginProduction, getPluginProduction, updatePluginProduction, createPluginProduction} from '../api/plugin';

const myname = 'features/production/controllers/apiv1pluginproduction';

function makeHandlerAwareOfAsyncErrors(handler) {

    return async function(request: Request, response: Response, next: Function) {
        
            try {
                await handler(request, response, next);
            } 
            catch (error) {
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
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1PluginProductionController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(this.getPluginProductionList))
        this.router.get("/checkname/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getCheckPluginName))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getPluginProduction))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(this.putPluginProduction))
        this.router.post("/:post", makeHandlerAwareOfAsyncErrors(this.postPluginProduction))
    };
    
    private getPluginProductionList = async (request: Request, response: Response) => 
    
        getListPluginProduction({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getPluginProductionList.error', err);
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
            console.log("[31m%s[0m", 'getCheckPluginName.error', err);
            sendFailure(response, {
                err: err
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
}
