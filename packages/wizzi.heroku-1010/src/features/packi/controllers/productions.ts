/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\packi\controllers\productions.ts.ittf
    utc time: Mon, 25 Mar 2024 04:46:06 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {wizziTypes, wizziProds, WizziFactory} from '../../wizzi';
import {artifactApi} from '../../packiProductions';
import {PackiFiles} from '../types';
const myname = 'features/packi/controllers/productions';

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

export class ProductionsController implements ControllerType {
    
    public path = '/api/v1/productions';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ProductionsController.initialize');
        this.router.post(`/mtree/:id`, this.mTree);
        this.router.post(`/mtreescript/:id`, this.mTreeBuildUpScript);
        this.router.post(`/artifact/:id`, this.generateArtifact);
        this.router.post(`/transform/:id/:transformer`, this.transformModel);
        this.router.post(`/job`, this.executeJob);
        this.router.post(`/wizzify`, this.wizzify);
    };
    
    private mTree = async (request: Request, response: Response) => {
    
        const id = request.params.id;
        const req_files: PackiFiles = request.body;
        artifactApi.prepareGenerationFromWizziJson(req_files).then((result: any) => 
        
            wizziProds.mTree(id, result.packiFiles, result.context).then(
            // loog 'value.mTreeIttf', value.mTreeIttf
            (value: any) => {
            
                console.log('value', value, __filename);
                sendSuccess(response, {
                    mTreeIttf: value.mTreeIttf
                 })
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.packi.controllers.productions.mTree.wizziProds.mTree', err);
                sendFailure(response, {
                    err: err, 
                    method: 'features.packi.controllers.productions.mTree.wizziProds.mTree'
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'features.packi.controllers.productions.mTree.prepareGenerationFromWizziJson', err);
            sendFailure(response, {
                err: err, 
                method: 'features.packi.controllers.productions.mTree.prepareGenerationFromWizziJson'
             }, 501)
        }
        )
    }
    ;
    
    private mTreeBuildUpScript = async (request: Request, response: Response) => {
    
        const id = request.params.id;
        const req_files: PackiFiles = request.body;
        artifactApi.prepareGenerationFromWizziJson(req_files).then((result: any) => 
        
            wizziProds.mTreeBuildUpScript(id, result.packiFiles, result.context).then(value => 
            
                sendSuccess(response, {
                    mTreeBuildUpScript: value
                 })
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.packi.controllers.productions.mTreeBuildUpScript', err);
                sendFailure(response, {
                    err: err, 
                    method: 'features.packi.controllers.productions.mTreeBuildUpScript'
                 }, 501)
            }
            )
        
        )
    }
    ;
    
    private generateArtifact = async (request: Request, response: Response) => {
    
        const id = request.params.id;
        const req_files: PackiFiles = request.body;
        artifactApi.prepareGenerationFromWizziJson(req_files).then((result: any) => 
        
            wizziProds.generateArtifact(id, result.packiFiles, result.context).then(value => 
            
                sendSuccess(response, {
                    generatedArtifact: value
                 })
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.packi.controllers.production.generateArtifact', err);
                sendFailure(response, {
                    err: err, 
                    method: 'features.packi.controllers.production.generateArtifact'
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'features.packi.controllers.production.prepareGenerationPackiFiles', err);
            sendFailure(response, {
                err: err, 
                method: 'features.packi.controllers.production.prepareGenerationPackiFiles'
             }, 501)
        }
        )
    }
    ;
    
    private transformModel = async (request: Request, response: Response) => {
    
        const id = request.params.id;
        const transformer = request.params.transformer;
        const req_files: PackiFiles = request.body;
        artifactApi.prepareGenerationFromWizziJson(req_files).then((result: any) => 
        
            wizziProds.loadAndTransformModel(id, result.packiFiles, result.context, {
                transformer: transformer
             }).then(value => 
            
                sendSuccess(response, {
                    transformedModel: value.transformResult
                 })
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.packi.controllers.production.transformModel', err);
                sendFailure(response, {
                    err: err, 
                    method: 'features.packi.controllers.production.transformModel'
                 }, 501)
            }
            )
        
        )
    }
    ;
    
    private executeJob = async (request: Request, response: Response) => {
    
        const req_files: PackiFiles = request.body;
        artifactApi.prepareGenerationFromWizziJson(req_files).then((result: any) => 
        
            wizziProds.executeJobs(result.packiFiles, result.context).then(async (fsJson) => {
            
                const files = await WizziFactory.extractGeneratedFiles(fsJson);
                sendSuccess(response, {
                    generatedArtifacts: files
                 })
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.packi.controllers.production.executeJob', err);
                sendFailure(response, {
                    err: err, 
                    method: 'features.packi.controllers.production.executeJob'
                 }, 501)
            }
            )
        
        )
    }
    ;
    
    private wizzify = async (request: Request, response: Response) => {
    
        const id = request.params.id;
        const files: PackiFiles = request.body;
        wizziProds.wizzify(files).then(async (ittfResult: PackiFiles) => 
        
            sendSuccess(response, {
                packiResult: ittfResult
             })
        
        ).catch(err => 
        
            sendFailure(response, err, 501)
        )
    }
    ;
}
