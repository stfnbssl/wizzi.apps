/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\middlewares\packiBrowse.ts.ittf
    utc time: Sat, 02 Jul 2022 04:01:54 GMT
*/
import util from 'util';
import path from 'path';
import stringify from 'json-stringify-safe';
import parseUrl from 'parseurl';
import {Application, RequestHandler, Request, Response} from 'express';
import {artifactApi} from '../features/production';
import {MiddlewareType} from '../features/app/types';
import {config} from '../features/config';
import {sendFailure} from '../utils/sendResponse';

const myname = 'express.middleware.packiBrowse';
const packiUserBrowsePath = '/~';
const packiSiteBrowsePath = '/~-';

export const PackiBrowseMiddleware: MiddlewareType = (app: Application) => {

    app.use(packiUserBrowsePath, packiUserBrowseMiddleware());
    app.use(packiSiteBrowsePath, packiSiteBrowseMiddleware());
}
;
function packiUserBrowseMiddleware():  RequestHandler {

    return async (request: Request, response: Response, next: Function) => {
        
            if (request.method !== 'GET' && request.method !== 'HEAD') {
                return next();
            }
            const parsedUrl = parseUrl(request);
            if (!parsedUrl || !parsedUrl.pathname) {
                return next();
            }
            const pathname = decodeURIComponent(parsedUrl.pathname);
            const parts = pathname.split('/');
            const owner = parts[1];
            const packiName = parts.slice(2).join('/');
            
            artifactApi.getDefaultContext_withCache(owner).then((defaultContext: any) => 
            
                artifactApi.getArtifactContext(owner, request.query.context as string, defaultContext).then((resultContext: any) => 
                
                    artifactApi.getArtifactGeneration(owner, packiName, resultContext).then((result: any) => {
                    
                        response.status(200);
                        response.set('Content-Type', result.contentType);
                        response.set('Content-Length', result.contentLength.toString());
                        response.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
                        response.set('Expires', '-1');
                        response.set('Pragma', 'no-cache');
                        response.send(result.content);
                    }
                    ).catch((err: any) => {
                    
                        console.log('artifactApi.getPackiGeneration.error', err);
                        sendFailure(response, {
                            err: err
                         }, 501)
                    }
                    )
                
                ).catch((err: any) => {
                
                    console.log('artifactApi.getArtifactContext.error', err);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            
            ).catch((err: any) => {
            
                console.log('artifactApi.getDefaultContext.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        }
    ;
}
function packiSiteBrowseMiddleware():  RequestHandler {

    return async (request: Request, response: Response, next: Function) => {
        
            if (request.method !== 'GET' && request.method !== 'HEAD') {
                return next();
            }
            const parsedUrl = parseUrl(request);
            if (!parsedUrl || !parsedUrl.pathname) {
                return next();
            }
            const pathname = decodeURIComponent(parsedUrl.pathname);
            const parts = pathname.split('/');
            const owner = "stfnbssl";
            const packiName = parts.slice(1).join('/');
            
            artifactApi.getDefaultContext_withCache(owner).then((defaultContext: any) => 
            
                artifactApi.getArtifactContext(owner, request.query.context as string, defaultContext).then((resultContext: any) => 
                
                    artifactApi.getArtifactGeneration(owner, packiName, resultContext).then((result: any) => {
                    
                        response.status(200);
                        response.set('Content-Type', result.contentType);
                        response.set('Content-Length', result.contentLength.toString());
                        response.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
                        response.set('Expires', '-1');
                        response.set('Pragma', 'no-cache');
                        response.send(result.content);
                    }
                    ).catch((err: any) => {
                    
                        console.log('artifactApi.getPackiGeneration.error', err);
                        sendFailure(response, {
                            err: err
                         }, 501)
                    }
                    )
                
                ).catch((err: any) => {
                
                    console.log('artifactApi.getArtifactContext.error', err);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            
            ).catch((err: any) => {
            
                console.log('artifactApi.getDefaultContext.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        }
    ;
}
