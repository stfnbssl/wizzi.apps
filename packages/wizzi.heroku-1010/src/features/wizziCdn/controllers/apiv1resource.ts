/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\wizziCdn\controllers\apiv1resource.ts.ittf
    utc time: Fri, 05 Apr 2024 18:03:04 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {getWizziCdnResourceList, validateWizziCdnResource, getWizziCdnResource, getWizziCdnResourceById, updateWizziCdnResource, createWizziCdnResource, deleteWizziCdnResource, invalidateCache} from '../api/resource';

const myname = 'features/wizziCdn/controllers/apiv1resource';

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

export class ApiV1WizziCdnResourceController implements ControllerType {
    
    public path = '/api/v1/wizzicdn';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1WizziCdnResourceController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(this.getWizziCdnResourceList))
        this.router.get("/checkname/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getCheckResourceName))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getWizziCdnResource))
        this.router.put("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.putWizziCdnResource))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(this.putWizziCdnResourceById))
        this.router.post("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.postWizziCdnResource))
        this.router.delete("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.deleteWizziCdnResource))
    };
    
    private getWizziCdnResourceList = async (request: Request, response: Response) => 
    
        getWizziCdnResourceList({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getWizziCdnResourceList.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCheckResourceName = async (request: Request, response: Response) => 
    
        validateWizziCdnResource(request.params.owner, request.params.name).then(
        // loog 'getCheckResourceName.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getCheckResourceName', err);
            sendFailure(response, {
                err: err, 
                method: 'getCheckResourceName'
             }, 501)
        }
        )
    
    ;
    
    private getWizziCdnResource = async (request: Request, response: Response) => 
    
        getWizziCdnResource(request.params.owner, request.params.name).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getWizziCdnResource.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postWizziCdnResource = async (request: Request, response: Response) => 
    
        createWizziCdnResource(request.params.owner, request.params.name, request.body.contents).then(
        // loog 'postWizziCdnResource.create.result', result
        (result: any) => {
        
            invalidateCache(request.params.owner, request.params.name)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'postWizziCdnResource.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putWizziCdnResource = async (request: Request, response: Response) => 
    
        updateWizziCdnResource(null, request.params.owner, request.params.name, request.body.contents).then((result: any) => {
        
            invalidateCache(request.params.id)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putWizziCdnResource.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putWizziCdnResourceById = async (request: Request, response: Response) => 
    
        updateWizziCdnResource(request.params.id, null, null, request.body.contents).then((result: any) => {
        
            invalidateCache(request.params.id)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putWizziCdnResourceById.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private deleteWizziCdnResource = async (request: Request, response: Response) => 
    
        deleteWizziCdnResource(request.params.owner, request.params.name).then((result: any) => {
        
            invalidateCache(request.params.id)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'deleteWizziCdnResource.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
