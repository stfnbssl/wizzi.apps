/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi-override\src\features\production\controllers\apiv1artifact.tsx.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {getListArtifactProduction, validateArtifactProduction, getArtifactProduction, getArtifactProductionById, updateArtifactProduction, createArtifactProduction, invalidateCache} from '../api/artifact';
import {wizziTypes, wizziProds, WizziFactory} from '../../wizzi';
import {mergePackiFiles} from '../utils';

const myname = 'features/production/controllers/apiv1artifactproduction';

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

export class ApiV1ArtifactProductionController implements ControllerType {
    
    public path = '/api/v1/production/artifact';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1ArtifactProductionController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(this.getArtifactProductionList))
        this.router.get("/checkname/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getCheckArtifactName))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getArtifactProduction))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(this.putArtifactProduction))
        this.router.post("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.postArtifactProduction))
    };
    
    private getArtifactProductionList = async (request: Request, response: Response) => 
    
        getListArtifactProduction({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getArtifactProductionList.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCheckArtifactName = 
    // loog 'getCheckArtifactName.request.params', request.params
    async (request: Request, response: Response) => 
    
        validateArtifactProduction(request.params.owner, request.params.name).then(
        // loog 'getCheckArtifactName.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getCheckArtifactName.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getArtifactProduction = async (request: Request, response: Response) => 
    
        getArtifactProduction(request.params.owner, request.params.name).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getArtifactProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postArtifactProduction = async (request: Request, response: Response) => 
    
        createArtifactProduction(request.params.owner, request.params.name, request.body.description, request.body.mainIttf, request.body.wizziSchema, JSON.stringify(request.body.packiFiles)).then(
        // loog 'postArtifactProduction.create.result', result
        (result: any) => {
        
            invalidateCache(request.params.owner, request.params.name)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'postArtifactProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putArtifactProduction = async (request: Request, response: Response) => {
    
        console.log('putArtifactProduction.request.params', request.params, __filename);
        console.log('putArtifactProduction.request.body', Object.keys(request.body), __filename);
        if (request.body.packiFiles) {
            console.log('putArtifactProduction.request.body.packiFiles', Object.keys(request.body.packiFiles), __filename);
        }
        const options = request.body.options || {};
        if (options.wizzify) {
            wizziProds.wizzify(request.body.packiFiles).then((resultPackiFiles: any) => {
            
                console.log('putArtifactProduction.wizzify.resultPackiFiles', Object.keys(resultPackiFiles), __filename);
                return exec_updateArtifactProduction(request, response, resultPackiFiles);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putArtifactProduction.wizzify.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        }
        else if (options.merge) {
            getArtifactProductionById(request.params.id).then((prevArtifact: any) => {
            
                const resultPackiFiles = mergePackiFiles(prevArtifact.packiFiles, request.body.packiFiles);
                console.log('putArtifactProduction.merge.resultPackiFiles', Object.keys(resultPackiFiles), __filename);
                return exec_updateArtifactProduction(request, response, resultPackiFiles);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putArtifactProduction.merge.getArtifactProductionById.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        }
        else {
            exec_updateArtifactProduction(request, response, request.body.packiFiles)
        }
    }
    ;
}
function exec_updateArtifactProduction(request: any, response: any, packiFiles: any) {

    updateArtifactProduction(request.params.id, request.body.owner, request.body.name, request.body.description, request.body.mainIttf, request.body.wizziSchema, JSON.stringify(packiFiles)).then(
    // loog 'putArtifactProduction.update.result', result
    (result: any) => {
    
        invalidateCache(request.params.id)
        sendSuccess(response, result)
    }
    ).catch((err: any) => {
    
        if (typeof err === 'object' && err !== null) {
        }
        console.log("[31m%s[0m", 'putArtifactProduction.error', err);
        sendFailure(response, {
            err: err
         }, 501)
    }
    )
}
