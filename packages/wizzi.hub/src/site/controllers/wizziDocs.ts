/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub\.wizzi-override\src\site\controllers\wizziDocs.ts.ittf
    utc time: Fri, 12 Apr 2024 14:33:31 GMT
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
    
    private cheatsheet = 
    // loog '*** calling cheatsheetApi.getCheatsheetList'
    async (request: Request, response: Response) => 
    
        cheatsheetApi.getCheatsheetList().then(
        // loog '*** csList', csList
        
        // loog '*** exists', exists
        (csList: any) => {
        
            const exists = csList.filter(item => 
            
                item.name == request.params.name
            );
            
            // loog '*** calling cheatsheetApi.getCheatsheetList', request.params.name
            if (exists.length > 0) {
                cheatsheetApi.getCheatsheet(request.params.name).then(
                // loog '*** 0 result', result
                (result: any) => 
                
                    response.render('wizzi/docs/cheatsheet.html.ittf', {
                        csList: csList, 
                        cs: result, 
                        csStatus: 0
                     })
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
            
            // loog '*** calling cheatsheetApi.getCheatsheetList', csList[0].name
            else if (csList.length > 0) {
                cheatsheetApi.getCheatsheet(csList[0].name).then(
                // loog '*** 1 result', result
                (result: any) => 
                
                    response.render('wizzi/docs/cheatsheet.html.ittf', {
                        csList: csList, 
                        cs: result, 
                        csStatus: 1, 
                        csMessage: "Cheatsheet for schema " + request.params.name + " unavailable"
                     })
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
            // loog '*** 3 render'
            else {
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
    
    ;
}
