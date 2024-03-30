/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\site\controllers\wizziDocs.ts.ittf
    utc time: Mon, 25 Mar 2024 04:46:06 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';
import {restParamsCheck} from '../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../utils/error';
import {statusCode} from '../../utils';
import {cheatsheetApi} from '../../features/wizziDocs';

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

export class DocsController implements ControllerType {
    
    public path = '/wizzi/docs';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering DocsController.initialize');
        this.router.get("/cheatsheet/:name", makeHandlerAwareOfAsyncErrors(this.cheatsheet))
    };
    
    private cheatsheet = async (request: Request, response: Response) => {
    
        console.log('*** calling cheatsheetApi.getCheatsheetList', __filename);
        cheatsheetApi.getCheatsheetList().then((csList: any) => {
        
            console.log('*** csList', csList, __filename);
            const exists = csList.filter(item => 
            
                item.name == request.params.name
            );
            console.log('*** exists', exists, __filename);
            if (exists.length > 0) {
                console.log('*** calling cheatsheetApi.getCheatsheetList', request.params.name, __filename);
                cheatsheetApi.getCheatsheet(request.params.name).then((result: any) => {
                
                    console.log('*** 0 result', result, __filename);
                    response.render('wizzi/docs/cheatsheet.html.ittf', {
                        csList: csList, 
                        cs: result, 
                        csStatus: 0
                     })
                }
                ).catch((err: any) => {
                
                    var content = err;
                    if (typeof err === 'object' && err !== null) {
                        content = '<html><body><pre><code>' + JSON.stringify(err, null, 4) + '</code></pre></body></html>';
                    }
                    console.log("[31m%s[0m", 'docs.cheatsheet.error', err);
                    sendHtml(response, content)
                }
                )
            }
            else if (csList.length > 0) {
                console.log('*** calling cheatsheetApi.getCheatsheetList', csList[0].name, __filename);
                cheatsheetApi.getCheatsheet(csList[0].name).then((result: any) => {
                
                    console.log('*** 1 result', result, __filename);
                    response.render('wizzi/docs/cheatsheet.html.ittf', {
                        csList: csList, 
                        cs: result, 
                        csStatus: 1, 
                        csMessage: "Cheatsheet for schema " + request.params.name + " unavailable"
                     })
                }
                ).catch((err: any) => {
                
                    var content = err;
                    if (typeof err === 'object' && err !== null) {
                        content = '<html><body><pre><code>' + JSON.stringify(err, null, 4) + '</code></pre></body></html>';
                    }
                    console.log("[31m%s[0m", 'docs.cheatsheet.error', err);
                    sendHtml(response, content)
                }
                )
            }
            else {
                console.log('*** 3 render', __filename);
                response.render('wizzi/docs/cheatsheet.html.ittf', {
                    csList: [
                        
                    ], 
                    cs: {
                        elements: [
                            
                        ]
                     }, 
                    csStatus: 2, 
                    csMessage: "No available cheatsheet"
                 })
            }
        }
        )
    }
    ;
}
