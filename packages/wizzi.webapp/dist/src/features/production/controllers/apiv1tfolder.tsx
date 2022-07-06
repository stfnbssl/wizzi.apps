/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\apiv1tfolder.tsx.ittf
    utc time: Tue, 05 Jul 2022 18:30:34 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {validateTFolder, getTFolder, updateTFolder, invalidateCache} from '../api/tfolder';

const myname = 'features/production/controllers/apiv1tfolder';

export class ApiV1TFolderController implements ControllerType {
    
    public path = '/api/v1/production/tfolder';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ApiV1TFolderController.initialize');
        this.router.get('/checkname/:name', this.getCheckTFolderName);
        this.router.get('/:owner/:name', this.getTFolder);
        this.router.put('/:owner/:name', this.putTFolder);
    };
    
    private getCheckTFolderName = 
    // loog 'getCheckTFolderName.request.session.user.username', (request.session as any).user.username
    async (request: Request, response: Response) => {
    
        console.log('getCheckTFolderName.request.params', request.params);
        validateTFolder((request.session as any).user.username, request.params.name).then(
        // loog 'getCheckTFolderName.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getCheckTFolderName.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getTFolder = 
    // loog 'getTFolder.request.params', request.params
    async (request: Request, response: Response) => 
    
        getTFolder(request.params.owner, request.params.name).then(
        // loog 'getTFolder.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getTFolder.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putTFolder = 
    // loog 'putTFolder.request.params', request.params
    
    // loog 'putTFolder.request.body', request.body
    async (request: Request, response: Response) => 
    
        updateTFolder(request.params.owner, request.params.name, request.body.description, JSON.stringify(request.body.packiFiles)).then(
        // loog 'putTFolder.result', result
        (result: any) => {
        
            invalidateCache(request.params.owner, request.params.name)
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            console.log('putTFolder.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
