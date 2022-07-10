/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\packi\controllers\productions.ts.ittf
    utc time: Sat, 09 Jul 2022 08:31:38 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import fs from 'fs';
import {fsTypes} from '../../filesystem';
import {wizziTypes, wizziProds, WizziFactory} from '../../wizzi';
import {artifactApi} from '../../production';
import {PackiFiles, TemplateList, Template} from '../types';
import {file} from 'wizzi';
const myname = 'features/packi/controllers/productions';

export class ProductionsController implements ControllerType {
    
    public path = '/api/v1/productions';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ProductionsController.initialize');
        this.router.post(`/mtree/:id`, this.mTree);
        this.router.post(`/mtreedebuginfo/:id`, this.mTreeDebugInfo);
        this.router.post(`/artifact/:id`, this.generateArtifact);
        this.router.post(`/transform/:id/:transformer`, this.transformModel);
        this.router.post(`/job`, this.executeJob);
        this.router.post(`/wizzify`, this.wizzify);
    };
    
    private mTree = async (request: Request, response: Response) => {
    
        const id = request.params.id;
        const req_files: PackiFiles = request.body;
        console.log(myname, 'mTree.received files', Object.keys(req_files));
        artifactApi.prepareGenerationFromWizziJson(req_files).then((result: any) => 
        
            wizziProds.mTree(id, result.packiFiles, result.context).then(
            // loog myname, 'mTree.result', value
            (value: any) => 
            
                sendSuccess(response, {
                    mTreeIttf: value
                 })
            ).catch((err: any) => {
            
                console.log('features.packi.controllers.productions.mTree.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        )
    }
    ;
    
    private mTreeDebugInfo = 
    // loog myname, 'mTreeDebugInfo.received files', Object.keys(req_files)
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        const req_files: PackiFiles = request.body;
        artifactApi.prepareGenerationFromWizziJson(req_files).then((result: any) => 
        
            wizziProds.mTreeDebugInfo(id, result.packiFiles, result.context).then(
            // loog myname, 'mTreeDebugInfo.result', value
            value => 
            
                sendSuccess(response, {
                    mTreeBuildUpScript: value
                 })
            ).catch((err: any) => {
            
                console.log('features.packi.controllers.productions.mTreeDebugInfo.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        )
    }
    ;
    
    private generateArtifact = 
    // loog myname, 'generateArtifact.received files', Object.keys(req_files)
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        const req_files: PackiFiles = request.body;
        artifactApi.prepareGenerationFromWizziJson(req_files).then((result: any) => 
        
            wizziProds.generateArtifact(id, result.packiFiles, result.context).then(
            // loog myname, 'generateArtifact.result', value
            value => 
            
                sendSuccess(response, {
                    generatedArtifact: value
                 })
            ).catch((err: any) => {
            
                console.log('features.packi.controllers.production.generateArtifact.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
        
            console.log('features.packi.controllers.production.prepareGenerationPackiFiles.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private transformModel = 
    // loog myname, 'transformModel.received files', Object.keys(req_files)
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        const transformer = request.params.transformer;
        const req_files: PackiFiles = request.body;
        artifactApi.prepareGenerationFromWizziJson(req_files).then((result: any) => 
        
            wizziProds.transformModel(id, result.packiFiles, result.context, {
                transformer: transformer
             }).then(
            // loog 'generateArtifact.result', value
            value => 
            
                sendSuccess(response, {
                    transformedModel: value.transformResult
                 })
            ).catch((err: any) => {
            
                console.log('features.packi.controllers.production.transformModel.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        )
    }
    ;
    
    private executeJob = 
    // loog 'ProductionsController.executeJob.received files', Object.keys(req_files)
    async (request: Request, response: Response) => {
    
        const req_files: PackiFiles = request.body;
        artifactApi.prepareGenerationFromWizziJson(req_files).then((result: any) => 
        
            wizziProds.executeJobs(result.packiFiles, result.context).then(
            // loog 'features.packi.controllers.production.executeJob.generatedArtifacts', Object.keys(files)
            async (fsJson) => {
            
                const files = await WizziFactory.extractGeneratedFiles(fsJson);
                sendSuccess(response, {
                    generatedArtifacts: files
                 })
            }
            ).catch((err: any) => {
            
                console.log('features.packi.controllers.production.executeJob.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        )
    }
    ;
    
    private wizzify = 
    // loog 'wizzify.received files', Object.keys(files)
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        const files: PackiFiles = request.body;
        wizziProds.wizzify(files).then(
        // loog 'features.packi.controllers.production.wizzify.ittfResult', ittfResult
        async (ittfResult: PackiFiles) => 
        
            sendSuccess(response, {
                packiResult: ittfResult
             })
        
        ).catch((err) => {
        
            console.log('features.packi.controllers.production.wizzify.err', err);
            sendFailure(response, err, 501);
        }
        )
    }
    ;
}
