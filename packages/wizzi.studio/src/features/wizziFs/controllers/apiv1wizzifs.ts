/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziFs\controllers\apiv1wizzifs.ts.ittf
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {getIttfDocument, putIttfDocument} from '../api/wizziFs';

const myname = 'features/wizzifs/controllers/apiv1wizzifs';

function makeHandlerAwareOfAsyncErrors(handler) {

    return async function(request: Request, response: Response, next: NextFunction) {
        
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

export class ApiV1WizziFsController implements ControllerType {
    
    public path = '/api/v1/wizzifs';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1WizziFsController.initialize');
        this.router.get('/ittf', this.getIttfDocument);
        this.router.put('/ittf', this.putIttfDocument);
    };
    
    private getIttfDocument = async (request: Request, response: Response) => {
    
        console.log('getIttfDocument.request.params', request.params, __filename);
        var __check = restParamsCheck(request);
        var hash = __check.notEmpty('query', 'hash');
        if (__check.hasErrors) {
            return __check.sendErrors(response);
        }
        getIttfDocument(hash).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'ApiV1WizziFs.getIttfDocument.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private putIttfDocument = async (request: Request, response: Response) => {
    
        console.log('request.body', request.body, __filename);
        console.log('request.query', request.query, __filename);
        var __check = restParamsCheck(request);
        var hash = __check.notEmpty('body', 'hash');
        var content = __check.notEmpty('body', 'content');
        var prettify = __check.optional('body', 'prettify');
        if (__check.hasErrors) {
            return __check.sendErrors(response);
        }
        putIttfDocument(hash, content, prettify).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'ApiV1WizziFs.putIttfDocument.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
