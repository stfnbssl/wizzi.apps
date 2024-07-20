/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.lab\.wizzi\src\features\wizziHubProductions\controllers\apiv1generations.ts.ittf
    utc time: Wed, 03 Jul 2024 08:24:51 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '#/src/features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure, sendError} from '#/src/utils/sendResponse';
import {restParamsCheck} from '#/src/utils/rest';
import {FcError, SYSTEM_ERROR} from '#/src/utils/error';
import {statusCode} from '#/src/utils';
import {wizziProductionsTypes, wizziProds, wizziFactory} from '#/src/features/wizziProductions';
import {artifactApi, productionApi} from '#/src/features/wizziHubProductions';
import {PackiFiles} from '#/src/features/packi/types';
import {PackiProduction} from '../types';
const myname = 'features/production/controllers/apiv1generations';

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

export class ApiV1GenerationsController implements ControllerType {
    
    public path = '/api/v1/production/generations';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1GenerationsController.initialize');
        this.router.post("/mtree/:id", makeHandlerAwareOfAsyncErrors(this.mTree))
        this.router.post("/mtreescript/:id", makeHandlerAwareOfAsyncErrors(this.mTreeBuildUpScript))
        this.router.post("/artifact/:id", makeHandlerAwareOfAsyncErrors(this.generateArtifact))
        this.router.post("/transform/:id/:transformer", makeHandlerAwareOfAsyncErrors(this.transformModel))
        this.router.post("/job", makeHandlerAwareOfAsyncErrors(this.executeJob))
        this.router.post("/wizzify", makeHandlerAwareOfAsyncErrors(this.wizzify))
        this.router.post("/codeast", makeHandlerAwareOfAsyncErrors(this.codeAST))
    };
    
    private mTree = async (request: Request, response: Response) => {
        const owner = (request.session as any).user.username;
        var __check = restParamsCheck(request);
        var id = __check.notEmpty('params', 'id');
        if (__check.hasErrors()) {
            return __check.sendErrors(response);
        }
        const req_files: PackiFiles = request.body.packiFiles;
        const productionKind: PackiProduction = request.body.productionKind;
        const productionName: string = request.body.productionName;
        productionApi.prepareProduction(productionKind, owner, productionName, '', {}).then((packageProductionSet: any) => 
            wizziProds.mTree(id, packageProductionSet.packiFiles, packageProductionSet.context).then((result: any) => 
                sendSuccess(response, {
                    mTreeIttf: result.mTreeIttf
                 })
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.production.controllers.productions.mTree.execute.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'features.production.controllers.productions.mTree.prepareProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private mTreeBuildUpScript = async (request: Request, response: Response) => {
        const owner = (request.session as any).user.username;
        var __check = restParamsCheck(request);
        var id = __check.notEmpty('params', 'id');
        if (__check.hasErrors()) {
            return __check.sendErrors(response);
        }
        const req_files: PackiFiles = request.body.packiFiles;
        const productionKind: PackiProduction = request.body.productionKind;
        const productionName: string = request.body.productionName;
        productionApi.prepareProduction(productionKind, owner, productionName, '', {}).then((packageProductionSet: any) => 
            wizziProds.mTreeBuildUpScript(id, packageProductionSet.packiFiles, packageProductionSet.context).then(result => 
                sendSuccess(response, result)
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.production.controllers.productions.mTreeBuildUpScript.execute.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'features.production.controllers.productions.mTreeBuildUpScript.prepareProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private generateArtifact = async (request: Request, response: Response) => {
        const owner = (request.session as any).user.username;
        var __check = restParamsCheck(request);
        var id = __check.notEmpty('params', 'id');
        if (__check.hasErrors()) {
            return __check.sendErrors(response);
        }
        const req_files: PackiFiles = request.body.packiFiles;
        const productionKind: PackiProduction = request.body.productionKind;
        const productionName: string = request.body.productionName;
        productionApi.prepareProduction(productionKind, owner, productionName, '', {}).then((packageProductionSet: any) => 
            wizziProds.generateArtifact(id, packageProductionSet.packiFiles, packageProductionSet.context).then(value => 
                sendSuccess(response, {
                    generatedArtifact: value
                 })
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.production.controllers.production.generateArtifact.execute.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'features.production.controllers.production.generateArtifact.prepareProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private transformModel = async (request: Request, response: Response) => {
        const owner = (request.session as any).user.username;
        var __check = restParamsCheck(request);
        var id = __check.notEmpty('params', 'id');
        var transformer = __check.notEmpty('params', 'transformer');
        if (__check.hasErrors()) {
            return __check.sendErrors(response);
        }
        const req_files: PackiFiles = request.body.packiFiles;
        const productionKind: PackiProduction = request.body.productionKind;
        const productionName: string = request.body.productionName;
        productionApi.prepareProduction(productionKind, owner, productionName, '', {}).then((packageProductionSet: any) => 
            wizziProds.loadAndTransformModel(id, packageProductionSet.packiFiles, packageProductionSet.context, {
                transformer: transformer
             }).then(value => 
                sendSuccess(response, {
                    transformedModel: value.transformResult
                 })
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.production.controllers.production.transformModel.execute.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'features.production.controllers.production.transformModel.prepareProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private executeJob = async (request: Request, response: Response) => {
        const owner = (request.session as any).user.username;
        const req_files: PackiFiles = request.body.packiFiles;
        const productionKind: PackiProduction = request.body.productionKind;
        const productionName: string = request.body.productionName;
        productionApi.prepareProduction(productionKind, owner, productionName, '', {}).then((packageProductionSet: any) => 
            wizziProds.executeJobs(packageProductionSet.packiFiles, packageProductionSet.context).then(async (fsJson) => {
                const files = await wizziFactory.extractGeneratedFiles(fsJson);
                sendSuccess(response, {
                    generatedArtifacts: files
                 })
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.production.controllers.production.executeJob.execute.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'features.production.controllers.production.executeJob.prepareProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private wizzify = async (request: Request, response: Response) => {
        const files: PackiFiles = request.body.packiFiles;
        if (files) {
        }
        wizziProds.wizzify(files).then(async (result: PackiFiles) => 
            sendSuccess(response, {
                wizzifiedPackiFiles: result
             })
        
        ).catch((err: any) => {
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'features.production.controllers.production.wizzify.execute.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private codeAST = async (request: Request, response: Response) => {
        const files: PackiFiles = request.body.packiFiles;
        if (files) {
        }
        wizziProds.getCodeAST(files).then(async (result: PackiFiles) => 
            sendSuccess(response, {
                codeASTPackiFiles: result
             })
        
        ).catch((err: any) => {
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'features.production.controllers.production.codeAST.execute.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}