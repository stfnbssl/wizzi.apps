/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\apiv1artifact.tsx.ittf
    utc time: Sat, 09 Jul 2022 08:31:39 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {getListArtifactProduction, validateArtifactProduction, getArtifactProduction, updateArtifactProduction, invalidateCache} from '../api/artifact';

const myname = 'features/production/controllers/apiv1artifactproduction';

export class ApiV1ArtifactProductionController implements ControllerType {
    
    public path = '/api/v1/production/artifact';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ApiV1ArtifactProductionController.initialize');
        this.router.get('/:owner', this.getArtifactProductionList);
        this.router.get('/checkname/:name', this.getCheckArtifactName);
        this.router.get('/:owner/:name', this.getArtifactProduction);
        this.router.put('/:owner/:name', this.putArtifactProduction);
    };
    
    private getArtifactProductionList = 
    // loog 'getArtifactProductionList.request.params', request.params
    async (request: Request, response: Response) => 
    
        getListArtifactProduction(request.params.owner).then(
        // loog 'getArtifactProductionList.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getArtifactProductionList.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCheckArtifactName = 
    // loog 'getCheckArtifactName.request.params', request.params
    
    // loog 'getCheckArtifactName.request.session.user.username', (request.session as any).user.username
    async (request: Request, response: Response) => 
    
        validateArtifactProduction((request.session as any).user.username, request.params.name).then(
        // loog 'getCheckArtifactName.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getCheckArtifactName.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getArtifactProduction = 
    // loog 'getArtifactProduction.request.params', request.params
    async (request: Request, response: Response) => 
    
        getArtifactProduction(request.params.owner, request.params.name).then(
        // loog 'getArtifactProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getArtifactProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putArtifactProduction = 
    // loog 'putArtifactProduction.request.params', request.params
    
    // loog 'putArtifactProduction.request.body', request.body
    async (request: Request, response: Response) => 
    
        updateArtifactProduction(request.params.owner, request.params.name, request.body.description, request.body.mainIttf, request.body.schema, JSON.stringify(request.body.packiFiles)).then(
        // loog 'putArtifactProduction.result', result
        (result: any) => {
        
            invalidateCache(request.params.owner, request.params.name)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            console.log('putArtifactProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
