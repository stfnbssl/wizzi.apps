/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziTable\controllers\apiv1wizziTable.ts.ittf
    utc time: Mon, 24 Jul 2023 09:37:44 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {getWizziTable, getWizziTableById, getWizziTableList, createWizziTable, updateWizziTable, deleteWizziTable} from '../api/wizziTable';
const myname = 'src/features/wizziTable/controllers/apiv1wizziTable';

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

export class ApiV1WizziTableController implements ControllerType {
    
    public path = '/api/v1/wizziTable';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1WizziTableController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(this.getWizziTables))
        this.router.get("/checkname/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getCheckArtifactName))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getWizziTable))
        this.router.post("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.postWizziTable))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(this.putWizziTable))
        this.router.delete("/:id", makeHandlerAwareOfAsyncErrors(this.deleteWizziTable))
    };
    
    private getCheckArtifactName = async (request: Request, response: Response) => 
    
        getWizziTable(request.params.owner, request.params.name).then((result: any) => {
        
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
            console.log("[31m%s[0m", 'getWizziTable.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getWizziTables = async (request: Request, response: Response) => 
    
        getWizziTableList({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getWizziTables.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getWizziTable = async (request: Request, response: Response) => 
    
        getWizziTable(request.params.owner, request.params.name).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getWizziTable.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postWizziTable = async (request: Request, response: Response) => 
    
        createWizziTable(request.params.owner, request.params.name, request.body.field1, request.body.field2).then(
        // loog 'postWizziTable.create.result', result
        
        /**
            * invalidateCache
                * request.params.owner
                * request.params.name
        */
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'postWizziTable.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putWizziTable = async (request: Request, response: Response) => {
    
        console.log('putWizziTable.request.params', request.params, __filename);
        console.log('putWizziTable.request.body', Object.keys(request.body), __filename);
        updateWizziTable(request.params.id, request.body.owner, request.body.name, request.body.field1, request.body.field2).then(
        // loog 'putWizziTable.update.result', result
        
        /**
            * invalidateCache
                * request.params.id
        */
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putWizziTable.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private deleteWizziTable = async (request: Request, response: Response) => {
    
        console.log('deleteWizziTable.request.params', request.params, __filename);
        deleteWizziTable(request.params.id, request.params.owner, request.params.name).then(
        // loog 'deleteWizziTable.delete.result', result
        
        /**
            * invalidateCache
                * request.params.id
        */
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'deleteWizziTable.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
