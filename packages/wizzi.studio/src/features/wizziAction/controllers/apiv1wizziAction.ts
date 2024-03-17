/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziAction\controllers\apiv1wizziAction.ts.ittf
    utc time: Fri, 08 Mar 2024 06:29:02 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendError, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {getWizziAction, getWizziActionById, getWizziActionList, createWizziAction, updateWizziAction, deleteWizziAction} from '../api/wizziAction';
const myname = 'src/features/wizziAction/controllers/apiv1wizziAction';

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

export class ApiV1WizziActionController implements ControllerType {
    
    public path = '/api/v1/wizziAction';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1WizziActionController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(this.getWizziActions))
        this.router.get("/checkname/:owner/:kind/:name", makeHandlerAwareOfAsyncErrors(this.getCheckArtifactName))
        this.router.get("/:owner/:kind/:name", makeHandlerAwareOfAsyncErrors(this.getWizziAction))
        this.router.post("/:owner/:kind/:name", makeHandlerAwareOfAsyncErrors(this.postWizziAction))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(this.putWizziAction))
        this.router.delete("/:id", makeHandlerAwareOfAsyncErrors(this.deleteWizziAction))
    };
    
    private getCheckArtifactName = async (request: Request, response: Response) => 
    
        getWizziAction(request.params.owner, request.params.kind, request.params.name).then((result: any) => {
        
            if (result.length == 1) {
                sendSuccess(response, {
                    isValid: false, 
                    message: ' already exists'
                 })
            }
            else {
                sendSuccess(response, {
                    isValid: true
                 })
            }
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getWizziAction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getWizziActions = async (request: Request, response: Response) => 
    
        getWizziActionList({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getWizziActions.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getWizziAction = async (request: Request, response: Response) => 
    
        getWizziAction(request.params.owner, request.params.kind, request.params.name).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getWizziAction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postWizziAction = async (request: Request, response: Response) => 
    
        createWizziAction(request.params.owner, request.params.kind, request.params.name, request.body.description).then(
        /**
            * invalidateCache
                * request.params.owner
                * request.params.kind
                * request.params.name
        */
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'postWizziAction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putWizziAction = async (request: Request, response: Response) => {
    
        console.log('putWizziAction.request.params', request.params, __filename);
        console.log('putWizziAction.request.body', Object.keys(request.body), __filename);
        updateWizziAction(request.params.id, request.body.owner, request.body.kind, request.body.name, request.body.description).then(
        /**
            * invalidateCache
                * request.params.id
        */
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putWizziAction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private deleteWizziAction = async (request: Request, response: Response) => {
    
        console.log('deleteWizziAction.request.params', request.params, __filename);
        deleteWizziAction(request.params.id, request.params.owner, request.params.kind, request.params.name).then(
        /**
            * invalidateCache
                * request.params.id
        */
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'deleteWizziAction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
