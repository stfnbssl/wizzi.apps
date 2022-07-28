/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\apiv1plugin.tsx.ittf
    utc time: Thu, 28 Jul 2022 09:18:22 GMT
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
        console.log('Entering ApiV1PluginProductionController.initialize', __filename);
        this.router.get('/:owner', this.getPluginProductionList);
        this.router.get('/checkname/:owner/:name', this.getCheckPluginName);
        this.router.get('/:owner/:name', this.getPluginProduction);
        this.router.put('/:id', this.putPluginProduction);
        this.router.post('/:post', this.postPluginProduction);
    };
    
    private getPluginProductionList = 
    // loog 'getPluginProductionList.request.params', request.params
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        getListPluginProduction({
            query: {
                owner: request.params.owner
             }
         }).then(
        // loog 'getPluginProductionList.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getPluginProductionList.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getCheckPluginName = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log('getCheckPluginName.request.params', request.params, __filename);
        validatePluginProduction(request.params.owner, request.params.name).then((result: any) => {
        
            console.log('getCheckPluginName.result', result, __filename);
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            console.log('getCheckPluginName.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getPluginProduction = 
    // loog 'getPluginProduction.request.params', request.params
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        getPluginProduction(request.params.owner, request.params.name).then(
        // loog 'getPluginProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getPluginProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private postPluginProduction = 
    // loog 'postPluginProduction.request.params', request.params
    
    // loog 'postPluginProduction.request.body', request.body
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        createPluginProduction(request.params.owner, request.params.name, request.body.description, JSON.stringify(request.body.packiFiles)).then(
        // loog 'postPluginProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('postPluginProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private putPluginProduction = 
    // loog 'putPluginProduction.request.params', request.params
    
    // loog 'putPluginProduction.request.body', request.body
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        updatePluginProduction(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(request.body.packiFiles)).then(
        // loog 'putPluginProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('putPluginProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
