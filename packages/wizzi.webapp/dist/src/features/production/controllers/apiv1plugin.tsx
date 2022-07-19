/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\apiv1plugin.tsx.ittf
    utc time: Tue, 19 Jul 2022 19:18:05 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {getListPluginProduction, validatePluginProduction, getPluginProduction, updatePluginProduction, createPluginProduction} from '../api/plugin';

const myname = 'features/production/controllers/apiv1pluginproduction';

export class ApiV1PluginProductionController implements ControllerType {
    
    public path = '/api/v1/production/plugin';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ApiV1PluginProductionController.initialize');
        this.router.get('/:owner', this.getPluginProductionList);
        this.router.get('/checkname/:name', this.getCheckPluginName);
        this.router.get('/:owner/:name', this.getPluginProduction);
        this.router.put('/:id', this.putPluginProduction);
        this.router.post('/:post', this.postPluginProduction);
    };
    
    private getPluginProductionList = 
    // loog 'getPluginProductionList.request.params', request.params
    async (request: Request, response: Response) => 
    
        getListPluginProduction({
            query: {
                owner: request.params.owner
             }
         }).then(
        // loog 'getPluginProductionList.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getPluginProductionList.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCheckPluginName = 
    // loog 'getCheckPluginName.request.params', request.params
    
    // loog 'getCheckPluginName.request.session.user.username', (request.session as any).user.username
    async (request: Request, response: Response) => 
    
        validatePluginProduction((request.session as any).user.username, request.params.name).then(
        // loog 'getCheckPluginName.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getCheckPluginName.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getPluginProduction = 
    // loog 'getPluginProduction.request.params', request.params
    async (request: Request, response: Response) => 
    
        getPluginProduction(request.params.owner, request.params.name).then(
        // loog 'getPluginProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getPluginProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postPluginProduction = 
    // loog 'postPluginProduction.request.params', request.params
    
    // loog 'postPluginProduction.request.body', request.body
    async (request: Request, response: Response) => 
    
        createPluginProduction(request.params.owner, request.params.name, request.body.description, JSON.stringify(request.body.packiFiles)).then(
        // loog 'postPluginProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('postPluginProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putPluginProduction = 
    // loog 'putPluginProduction.request.params', request.params
    
    // loog 'putPluginProduction.request.body', request.body
    async (request: Request, response: Response) => 
    
        updatePluginProduction(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(request.body.packiFiles)).then(
        // loog 'putPluginProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('putPluginProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
