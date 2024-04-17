/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziMeta\controllers\apiv1wizzimeta.ts.ittf
    utc time: Thu, 11 Apr 2024 13:29:18 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendError, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {getProvidedMetas, getMetaParameters, executeMetaProduction, executeMetaProductionWithInMemoryPlugins} from '../api/wizziMeta';
import {WizziMetaRequest} from '../types';

const myname = 'features/wizzimeta/controllers/wizzimeta';

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

export class ApiV1WizziMetaController implements ControllerType {
    
    public path = '/api/v1/meta';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1WizziMetaController.initialize');
        this.router.get('/provides', this.provides);
        this.router.post('/parameters', this.metaParameters);
        this.router.post('/execute', this.execute);
        this.router.post('/executeinmemory', this.executeinmemory);
    };
    
    private provides = async (request: Request, response: Response) => 
    
        getProvidedMetas({}).then((result: any) => 
        
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
    
    private metaParameters = async (request: Request, response: Response) => {
    
        const metaRequest: WizziMetaRequest = request.body;
        getMetaParameters(metaRequest).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private execute = async (request: Request, response: Response) => {
    
        const metaRequest: WizziMetaRequest = request.body;
        executeMetaProduction(metaRequest).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private executeinmemory = async (request: Request, response: Response) => {
    
        const metaRequest: WizziMetaRequest = request.body;
        executeMetaProductionWithInMemoryPlugins(metaRequest).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
