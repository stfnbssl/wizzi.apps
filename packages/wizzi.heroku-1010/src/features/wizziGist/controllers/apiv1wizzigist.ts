/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\wizziGist\controllers\apiv1wizzigist.ts.ittf
    utc time: Thu, 14 Mar 2024 11:34:02 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {createGist, updateGist, deleteGist} from '../api/wizziGist';

const myname = 'features/wizzigist/controllers/apiv1wizzigist';

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

export class ApiV1WizziGistController implements ControllerType {
    
    public path = '/api/v1/gist';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1WizziGistController.initialize');
        this.router.post('/', this.execCreateGist);
        this.router.put('/', this.execUpdateGist);
    };
    
    private execCreateGist = async (request: Request, response: Response) => {
    
        console.log('execCreateGist.request.params', request.params, __filename);
        var __check = restParamsCheck(request);
        var kind = __check.notEmpty('query', 'kind');
        var name = __check.notEmpty('query', 'name');
        var schema = __check.notEmpty('query', 'schema');
        if (__check.hasErrors()) {
            return __check.sendErrors(response);
        }
        createGist(kind, name, schema).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'ApiV1WizziGist.execCreateGist', err);
            sendFailure(response, {
                err: err, 
                method: 'ApiV1WizziGist.execCreateGist'
             }, 501)
        }
        )
    }
    ;
    
    private execUpdateGist = async (request: Request, response: Response) => {
    
        console.log('request.body', request.body, __filename);
        console.log('request.query', request.query, __filename);
        var __check = restParamsCheck(request);
        var hash = __check.notEmpty('body', 'hash');
        var content = __check.notEmpty('body', 'content');
        if (__check.hasErrors()) {
            return __check.sendErrors(response);
        }
        updateGist(hash, content).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'ApiV1WizziGist.execUpdateGist', err);
            sendFailure(response, {
                err: err, 
                method: 'ApiV1WizziGist.execUpdateGist'
             }, 501)
        }
        )
    }
    ;
}
