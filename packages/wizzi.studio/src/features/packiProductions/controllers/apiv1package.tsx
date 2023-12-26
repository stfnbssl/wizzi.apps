/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\packiProductions\controllers\apiv1package.tsx.ittf
    utc time: Mon, 24 Jul 2023 09:37:47 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {wizziTypes, wizziProds, WizziFactory} from '../../wizzi';
import {packiTypes, PackiBuilder} from '../../packi';
import {mergePackiFiles} from '../utils';
import {getPackageProductionList, validatePackageProduction, getPackageProduction, getPackageProductionObjectById, updatePackageProduction, createPackageProduction, invalidateCache} from '../api/package';
import {getWizziMetaFolderById} from '../api/package';

const myname = 'features/production/controllers/apiv1packageproduction';

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

export class ApiV1PackageProductionController implements ControllerType {
    
    public path = '/api/v1/production/package';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1PackageProductionController.initialize');
        this.router.get("/checkname/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getCheckPackageName))
        this.router.get("/meta/:id", makeHandlerAwareOfAsyncErrors(this.getWizziMetaFolder))
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(this.getPackageProductions))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getPackageProduction))
        this.router.put("/:id", makeHandlerAwareOfAsyncErrors(this.putPackageProduction))
        this.router.put("/packidiffs/:id", makeHandlerAwareOfAsyncErrors(this.putPackageProductionPackiDiffs))
        this.router.post("/:owner/:name", makeHandlerAwareOfAsyncErrors(this.postPackageProduction))
    };
    
    private getPackageProductions = async (request: Request, response: Response) => 
    
        getPackageProductionList({
            query: {
                owner: request.params.owner
             }
         }).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getPackageProductions.error', err);
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
    
    private putPackageProductionPackiDiffs = async (request: Request, response: Response) => {
    
        console.log('putPackageProductionPackiDiffs.request.params', request.params, __filename);
        console.log('putPackageProductionPackiDiffs.request.body.options', Object.keys(request.body.options), __filename);
        console.log('putPackageProductionPackiDiffs.request.body.packiDiffs', Object.keys(request.body.packiDiffs), __filename);
        const options = request.body.options || {};
        getPackageProductionObjectById(request.params.id).then((prevPackage: any) => {
        
            console.log('putPackageProductionPackiDiffs.prevPackiFiles', Object.keys(prevPackage.packiFiles), __filename);
            const pm = new PackiBuilder(prevPackage.packiFiles);
            pm.applyPatch_ChangesOnly(request.body.packiDiffs)
            return exec_updatePackageProduction(request, response, pm.packiFiles);
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'putPackageProductionPackiDiffs.getPackageProductionObjectById.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
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
function exec_updatePackageProduction(request: any, response: any, packiFiles: any) {

    updatePackageProduction(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(packiFiles)).then(
    // loog 'putPackageProduction.update.result', result
    (result: any) => {
    
        invalidateCache(request.params.id)
        sendSuccess(response, result)
    }
    ).catch((err: any) => {
    
        if (typeof err === 'object' && err !== null) {
        }
        console.log("[31m%s[0m", 'exec_updatePackageProduction.updatePackageProduction.error', err);
        sendFailure(response, {
            err: err
         }, 501)
    }
    )
}
