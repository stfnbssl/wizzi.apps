/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\apiv1artifact.tsx.ittf
    utc time: Sat, 23 Jul 2022 04:18:24 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {getListArtifactProduction, validateArtifactProduction, getArtifactProduction, updateArtifactProduction, createArtifactProduction, invalidateCache} from '../api/artifact';

const myname = 'features/production/controllers/apiv1artifactproduction';

export class ApiV1ArtifactProductionController implements ControllerType {
    
    public path = '/api/v1/production/artifact';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ApiV1ArtifactProductionController.initialize', __filename);
        this.router.get('/:owner', this.getArtifactProductionList);
        this.router.get('/checkname/:owner/:name', this.getCheckArtifactName);
        this.router.get('/:owner/:name', this.getArtifactProduction);
        this.router.put('/:id', this.putArtifactProduction);
        this.router.post('/:owner/:name', this.postArtifactProduction);
    };
    
    private getArtifactProductionList = 
    // loog 'getArtifactProductionList.request.params', request.params
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        getListArtifactProduction({
            query: {
                owner: request.params.owner
             }
         }).then(
        // loog 'getArtifactProductionList.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getArtifactProductionList.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getCheckArtifactName = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log('getCheckArtifactName.request.params', request.params, __filename);
        validateArtifactProduction(request.params.owner, request.params.name).then((result: any) => {
        
            console.log('getCheckArtifactName.result', result, __filename);
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            console.log('getCheckArtifactName.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getArtifactProduction = 
    // loog 'getArtifactProduction.request.params', request.params
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        getArtifactProduction(request.params.owner, request.params.name).then(
        // loog 'getArtifactProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getArtifactProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private postArtifactProduction = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log('postArtifactProduction.request.params', request.params, __filename);
        console.log('postArtifactProduction.request.body', request.body, __filename);
        createArtifactProduction(request.params.owner, request.params.name, request.body.description, request.body.mainIttf, request.body.wizziSchema, JSON.stringify(request.body.packiFiles)).then((result: any) => {
        
            console.log('postArtifactProduction.create.result', result, __filename);
            invalidateCache(request.params.owner, request.params.name)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            console.log('postArtifactProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private putArtifactProduction = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log('putArtifactProduction.request.params', request.params, __filename);
        console.log('putArtifactProduction.request.body', request.body, __filename);
        updateArtifactProduction(request.params.id, request.body.owner, request.body.name, request.body.description, request.body.mainIttf, request.body.wizziSchema, JSON.stringify(request.body.packiFiles)).then((result: any) => {
        
            console.log('putArtifactProduction.update.result', result, __filename);
            invalidateCache(request.params.owner, request.params.name)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            console.log('putArtifactProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
