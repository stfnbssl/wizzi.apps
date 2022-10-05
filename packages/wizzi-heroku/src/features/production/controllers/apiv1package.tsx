/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi-override\src\features\production\controllers\apiv1package.tsx.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {apiSecured} from '../../../middlewares/index';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {packiTypes} from '../../packi';
import {getListPackageProduction, validatePackageProduction, getPackageProduction, updatePackageProduction, createPackageProduction, getWizziMetaFolderById} from '../api/package';

const myname = 'features/production/controllers/apiv1packageproduction';

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

export class ApiV1PackageProductionController implements ControllerType {
    
    public path = '/api/v1/production/package';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1PackageProductionController.initialize');
        this.router.get("/checkname/:owner/:name", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.getCheckPackageName))
        this.router.get("/meta/:id", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.getWizziMetaFolder))
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.getPackageProductionList))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.getPackageProduction))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.putPackageProduction))
        this.router.post("/:owner/:name", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.postPackageProduction))
    };
    
    private getPackageProductionList = async (request: Request, response: Response) => 
    
        getListPackageProduction({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getPackageProductionList.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCheckPackageName = 
    // loog 'getCheckPackageName.request.params', request.params
    async (request: Request, response: Response) => 
    
        validatePackageProduction(request.params.owner, request.params.name).then(
        // loog 'getCheckPackageName.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getCheckPackageName.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getPackageProduction = async (request: Request, response: Response) => 
    
        getPackageProduction(request.params.owner, request.params.name).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getPackageProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postPackageProduction = async (request: Request, response: Response) => 
    
        createPackageProduction(request.params.owner, request.params.name, request.body.description, JSON.stringify(request.body.packiFiles)).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'postPackageProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putPackageProduction = async (request: Request, response: Response) => 
    
        updatePackageProduction(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(request.body.packiFiles)).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putPackageProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getWizziMetaFolder = 
    // loog 'getWizziMetaFolder.request.params', request.params
    async (request: Request, response: Response) => 
    
        getWizziMetaFolderById(request.params.id, {}).then((packiFiles: packiTypes.PackiFiles) => 
        
            sendSuccess(response, packiFiles)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getWizziMetaFolder.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
