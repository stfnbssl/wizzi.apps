/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi-override\src\features\cdn\controllers\apiv1resource.tsx.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {getCdnResourceList, validateCdnResource, getCdnResource, getCdnResourceById, updateCdnResource, createCdnResource, deleteCdnResource, invalidateCache} from '../api/resource';

const myname = 'features/cdn/controllers/apiv1resource';

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

export class ApiV1CdnResourceController implements ControllerType {
    
    public path = '/api/v1/cdn';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1CdnResourceController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(this.getCdnResourceList))
        this.router.get("/checkname/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getCheckResourceName))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getCdnResource))
        this.router.put("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.putCdnResource))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(this.putCdnResourceById))
        this.router.post("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.postCdnResource))
        this.router.delete("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.deleteCdnResource))
    };
    
    private getCdnResourceList = async (request: Request, response: Response) => 
    
        getCdnResourceList({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getCdnResourceList.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCheckResourceName = async (request: Request, response: Response) => 
    
        validateCdnResource(request.params.owner, request.params.name).then(
        // loog 'getCheckResourceName.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getCheckResourceName.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCdnResource = async (request: Request, response: Response) => 
    
        getCdnResource(request.params.owner, request.params.name).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getCdnResource.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postCdnResource = async (request: Request, response: Response) => 
    
        createCdnResource(request.params.owner, request.params.name, request.body.contents).then(
        // loog 'postCdnResource.create.result', result
        (result: any) => {
        
            invalidateCache(request.params.owner, request.params.name)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'postCdnResource.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putCdnResource = async (request: Request, response: Response) => 
    
        updateCdnResource(null, request.params.owner, request.params.name, request.body.contents).then((result: any) => {
        
            invalidateCache(request.params.id)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putCdnResource.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putCdnResourceById = async (request: Request, response: Response) => 
    
        updateCdnResource(request.params.id, null, null, request.body.contents).then((result: any) => {
        
            invalidateCache(request.params.id)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putCdnResourceById.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private deleteCdnResource = async (request: Request, response: Response) => 
    
        deleteCdnResource(request.params.owner, request.params.name).then((result: any) => {
        
            invalidateCache(request.params.id)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'deleteCdnResource.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
