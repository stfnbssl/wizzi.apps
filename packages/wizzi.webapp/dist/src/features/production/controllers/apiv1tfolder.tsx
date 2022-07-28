/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\apiv1tfolder.tsx.ittf
    utc time: Thu, 28 Jul 2022 09:18:22 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {getListTFolder, validateTFolder, getTFolder, updateTFolder, createTFolder, invalidateCache} from '../api/tfolder';

const myname = 'features/production/controllers/apiv1tfolder';

export class ApiV1TFolderController implements ControllerType {
    
    public path = '/api/v1/production/tfolder';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ApiV1TFolderController.initialize', __filename);
        this.router.get('/:owner', this.getTFolderList);
        this.router.get('/checkname/:owner/:name', this.getCheckTFolderName);
        this.router.get('/:owner/:name', this.getTFolder);
        this.router.put('/:id', this.putTFolder);
        this.router.post('/:owner/:name', this.postTFolder);
    };
    
    private getTFolderList = 
    // loog 'getTFolderList.request.params', request.params
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        getListTFolder({
            query: {
                owner: request.params.owner
             }
         }).then(
        // loog 'getTFolderList.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getTFolderList.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getCheckTFolderName = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log('getCheckTFolderName.request.params', request.params, __filename);
        validateTFolder(request.params.owner, request.params.name).then((result: any) => {
        
            console.log('getCheckTFolderName.result', result, __filename);
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            console.log('getCheckTFolderName.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getTFolder = 
    // loog 'getTFolder.request.params', request.params
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        getTFolder(request.params.owner, request.params.name).then(
        // loog 'getTFolder.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getTFolder.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private postTFolder = 
    // loog 'postTFolder.request.params', request.params
    
    // loog 'postTFolder.request.body', request.body
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        createTFolder(request.params.owner, request.params.name, request.body.description, JSON.stringify(request.body.packiFiles)).then(
        // loog 'postTFolder.result', result
        (result: any) => {
        
            invalidateCache(request.params.owner, request.params.name)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            console.log('postTFolder.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private putTFolder = 
    // loog 'putTFolder.request.params', request.params
    
    // loog 'putTFolder.request.body', request.body
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        updateTFolder(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(request.body.packiFiles)).then(
        // loog 'putTFolder.result', result
        (result: any) => {
        
            invalidateCache(request.params.owner, request.params.name)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            console.log('putTFolder.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
