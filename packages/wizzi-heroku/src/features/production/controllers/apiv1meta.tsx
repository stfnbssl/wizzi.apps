/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi-override\src\features\production\controllers\apiv1meta.tsx.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {apiSecured} from '../../../middlewares/index';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {validateMetaProduction, getListMetaProduction, getMetaProduction, getMetaProductionObjectById, updateMetaProduction, createMetaProduction, generateMetaProduction} from '../api/meta';

import {wizziTypes, wizziProds, WizziFactory} from '../../wizzi';
import {artifactApi, productionApi} from '../../production';
const myname = 'features/production/controllers/apiv1metaproduction';

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

export class ApiV1MetaProductionController implements ControllerType {
    
    public path = '/api/v1/production/meta';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1MetaProductionController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.getMetaProductionList))
        this.router.get("/props/:id", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.getMetaProperties))
        this.router.get("/checkname/:owner/:name", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.getCheckMetaName))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.getMetaProduction))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.putMetaProduction))
        this.router.post("'/:owner/:name", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.postMetaProduction))
        this.router.post("'/generate/:owner/:name", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.generateMetaProductionByName))
    };
    
    private getMetaProductionList = async (request: Request, response: Response) => 
    
        getListMetaProduction({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => {
        
            if (result.ok) {
                const items = [];
                var i, i_items=result.item, i_len=result.item.length, meta;
                for (i=0; i<i_len; i++) {
                    meta = result.item[i];
                    items.push({
                        id: meta.id, 
                        owner: meta.owner, 
                        name: meta.name, 
                        description: meta.description
                     })
                }
                sendSuccess(response, items)
            }
            else {
                console.log("[31m%s[0m", 'getMetaProductionList.error', result);
                sendFailure(response, {
                    err: result
                 }, 501)
            }
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getMetaProductionList.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getMetaProperties = async (request: Request, response: Response) => 
    
        productionApi.prepareProductionById('meta', request.params.id, '', {}).then((metaProductionSet: any) => 
        
            wizziProds.generateArtifact('properties/index.json.ittf', metaProductionSet.packiFiles, metaProductionSet.context).then(
            // loog myname, 'getMetaProperties.generateArtifact.result', value
            value => 
            
                sendSuccess(response, {
                    meta: JSON.parse(value.artifactContent)
                 })
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.packi.controllers.production.generateArtifact.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getMetaProperties.prepareProductionById.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCheckMetaName = 
    // loog 'getCheckMetaName.request.params', request.params
    async (request: Request, response: Response) => 
    
        validateMetaProduction(request.params.owner, request.params.name).then(
        // loog 'getCheckMetaName.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getCheckMetaName.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getMetaProduction = async (request: Request, response: Response) => 
    
        getMetaProduction(request.params.owner, request.params.name).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getMetaProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postMetaProduction = 
    // loog 'postMetaProduction.request.params', request.params
    
    // loog 'postMetaProduction.request.body', request.body
    async (request: Request, response: Response) => 
    
        createMetaProduction(request.params.owner, request.params.name, request.body.description, JSON.stringify(request.body.packiFiles)).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'postMetaProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putMetaProduction = async (request: Request, response: Response) => 
    
        updateMetaProduction(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(request.body.packiFiles)).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putMetaProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private generateMetaProductionByName = async (request: Request, response: Response) => 
    
        generateMetaProduction(request.params.owner, request.params.name, request.body.cliCtx).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'generateMetaProductionByName.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
