/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\site\controllers\home.ts.ittf
    utc time: Sun, 25 Feb 2024 13:18:08 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendError, sendFailure} from '../../utils/sendResponse';
import {restParamsCheck} from '../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../utils/error';
import {statusCode} from '../../utils';

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

export class HomeController implements ControllerType {
    
    public path = '';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering HomeController.initialize');
        this.router.get("/", makeHandlerAwareOfAsyncErrors(this.home))
    };
    
    private home = async (request: Request, response: Response) => 
    
        response.render('home/index.html.ittf', {
            title: 'wizzi.studio'
         })
    
    ;
}
