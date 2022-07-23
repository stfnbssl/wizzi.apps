/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\middlewares\packiBrowse.ts.ittf
    utc time: Sat, 23 Jul 2022 04:18:23 GMT
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
            console.log(myname + '.parsedUrl', parsedUrl, __filename);
            const pathname = decodeURIComponent(parsedUrl.pathname);
            const parts = pathname.split('/');
            const owner = parts[1];
            const productionName = parts.slice(2).join('/');
            console.log(myname + '.owner', owner, 'productionName', productionName, 'context', request.query.context, __filename);
            
            _executeBrowse(owner, productionName, request, response)
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
            console.log(myname + '.parsedUrl', parsedUrl, __filename);
            const pathname = decodeURIComponent(parsedUrl.pathname);
            const parts = pathname.split('/');
            const owner = "stfnbssl";
            const productionName = parts.slice(1).join('/');
            console.log(myname + '.owner', owner, 'productionName', productionName, 'context', request.query.context, __filename);
            
            _executeBrowse(owner, productionName, request, response)
        }
    ;
}
function _executeBrowse(owner: string, productionName: string, request: Request, response: Response) {

    if (request.query.meta && (request.query.meta as string).toLowerCase() == 'mtree') {
        artifactApi.getArtifactMTree_withPrepare(owner, productionName, request.query.context as string, {}).then((result: any) => {
        
            console.log(myname + 'getArtifactMTree_withPrepare.result.length:', result.length, __filename);
            response.status(200);
            response.set('Content-Type', result.contentType);
            response.set('Content-Length', result.contentLength.toString());
            response.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
            response.set('Expires', '-1');
            response.set('Pragma', 'no-cache');
            response.send(result.content);
        }
        ).catch((err: any) => {
        
            console.log('_executeBrowse.artifactApi.getArtifactMTree.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    else if (request.query.meta && (request.query.meta as string).toLowerCase() == 'script') {
        artifactApi.getArtifactMTreeBuildupScript_withPrepare(owner, productionName, request.query.context as string, {}).then((result: any) => {
        
            console.log(myname + 'getArtifactMTreeBuildupScript_withPrepare.result.length:', result.length, __filename);
            response.status(200);
            response.set('Content-Type', result.contentType);
            response.set('Content-Length', result.contentLength.toString());
            response.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
            response.set('Expires', '-1');
            response.set('Pragma', 'no-cache');
            response.send(result.content);
        }
        ).catch((err: any) => {
        
            console.log('_executeBrowse.artifactApi.getArtifactMTree.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    else if (request.query.meta && (request.query.meta as string).toLowerCase() == 'raw') {
        artifactApi.getArtifactGeneration_withPrepare(owner, productionName, request.query.context as string, {}).then((result: any) => {
        
            console.log(myname + 'getArtifactGeneration_withPrepare.result.length:', result.length, __filename);
            response.status(200);
            response.set('Content-Type', 'text/plain');
            response.set('Content-Length', result.contentLength.toString());
            response.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
            response.set('Expires', '-1');
            response.set('Pragma', 'no-cache');
            response.send(result.content);
        }
        ).catch((err: any) => {
        
            console.log('_executeBrowse.artifactApi.getArtifactGeneration.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    else {
        artifactApi.getArtifactGeneration_withPrepare(owner, productionName, request.query.context as string, {}).then((result: any) => {
        
            console.log(myname + 'getArtifactGeneration_withPrepare.result.length:', result.length, __filename);
            response.status(200);
            response.set('Content-Type', result.contentType);
            response.set('Content-Length', result.contentLength.toString());
            response.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
            response.set('Expires', '-1');
            response.set('Pragma', 'no-cache');
            response.send(result.content);
        }
        ).catch((err: any) => {
        
            console.log('_executeBrowse.artifactApi.getArtifactGeneration.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
}
function _executeBrowse_old(owner: string, productionName: string, request: Request, response: Response) {

    artifactApi.getDefaultContext_withCache(owner).then((defaultContext: any) => {
    
        console.log(myname + '.defaultContext:', Object.keys(defaultContext), __filename);
        artifactApi.getArtifactContext(owner, request.query.context as string, defaultContext).then((resultContext: any) => {
        
            console.log(myname + '.resultContext:', Object.keys(resultContext), __filename);
            if (request.query.meta && (request.query.meta as string).toLowerCase() == 'mtree') {
                artifactApi.getArtifactMTree(owner, productionName, resultContext).then((result: any) => {
                
                    response.status(200);
                    response.set('Content-Type', result.contentType);
                    response.set('Content-Length', result.contentLength.toString());
                    response.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
                    response.set('Expires', '-1');
                    response.set('Pragma', 'no-cache');
                    response.send(result.content);
                }
                ).catch((err: any) => {
                
                    console.log('artifactApi.getArtifactMTree.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (request.query.meta && (request.query.meta as string).toLowerCase() == 'script') {
                artifactApi.getArtifactMTreeBuildupScript(owner, productionName, resultContext).then((result: any) => {
                
                    response.status(200);
                    response.set('Content-Type', result.contentType);
                    response.set('Content-Length', result.contentLength.toString());
                    response.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
                    response.set('Expires', '-1');
                    response.set('Pragma', 'no-cache');
                    response.send(result.content);
                }
                ).catch((err: any) => {
                
                    console.log('artifactApi.getArtifactMTree.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (request.query.meta && (request.query.meta as string).toLowerCase() == 'raw') {
                artifactApi.getArtifactGeneration(owner, productionName, resultContext).then((result: any) => {
                
                    response.status(200);
                    response.set('Content-Type', 'text/plain');
                    response.set('Content-Length', result.contentLength.toString());
                    response.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
                    response.set('Expires', '-1');
                    response.set('Pragma', 'no-cache');
                    response.send(result.content);
                }
                ).catch((err: any) => {
                
                    console.log('artifactApi.getArtifactGeneration.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else {
                artifactApi.getArtifactGeneration(owner, productionName, resultContext).then((result: any) => {
                
                    response.status(200);
                    response.set('Content-Type', result.contentType);
                    response.set('Content-Length', result.contentLength.toString());
                    response.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
                    response.set('Expires', '-1');
                    response.set('Pragma', 'no-cache');
                    response.send(result.content);
                }
                ).catch((err: any) => {
                
                    console.log('artifactApi.getArtifactGeneration.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
        }
        ).catch((err: any) => {
        
            console.log('artifactApi.getArtifactContext.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ).catch((err: any) => {
    
        console.log('artifactApi.getDefaultContext.error', err, __filename);
        sendFailure(response, {
            err: err
         }, 501)
    }
    )
}
