/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\data\packages\demo.express.hello\.wizzi\src\site\controllers\demoHome.ts.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../utils/error';
import {statusCode} from '../../utils';

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

export class DemoHomeController implements ControllerType {
    
    public path = '/demo/home';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering DemoHomeController.initialize');
        this.router.get(`/`, this.home)
    };
    
    private home = async (request: Request, response: Response) => 
    
        response.render('demoHome/index.html.ittf', {
            title: 'Hello demo home'
         })
    
    ;
}
