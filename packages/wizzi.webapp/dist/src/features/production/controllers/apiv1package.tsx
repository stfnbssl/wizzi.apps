/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\apiv1package.tsx.ittf
    utc time: Tue, 19 Jul 2022 19:18:05 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {getListPackageProduction, validatePackageProduction, getPackageProduction, updatePackageProduction, createPackageProduction} from '../api/package';

const myname = 'features/production/controllers/apiv1packageproduction';

export class ApiV1PackageProductionController implements ControllerType {
    
    public path = '/api/v1/production/package';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ApiV1PackageProductionController.initialize');
        this.router.get('/:owner', this.getPackageProductionList);
        this.router.get('/checkname/:name', this.getCheckPackageName);
        this.router.get('/:owner/:name', this.getPackageProduction);
        this.router.put('/:id', this.putPackageProduction);
        this.router.post('/:owner/:name', this.postPackageProduction);
    };
    
    private getPackageProductionList = 
    // loog 'getPackageProductionList.request.params', request.params
    async (request: Request, response: Response) => 
    
        getListPackageProduction({
            query: {
                owner: request.params.owner
             }
         }).then(
        // loog 'getPackageProductionList.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getPackageProductionList.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getCheckPackageName = 
    // loog 'getCheckPackageName.request.params', request.params
    
    // loog 'getCheckPackageName.request.session.user.username', (request.session as any).user.username
    async (request: Request, response: Response) => 
    
        validatePackageProduction((request.session as any).user.username, request.params.name).then(
        // loog 'getCheckPackageName.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getCheckPackageName.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getPackageProduction = 
    // loog 'getPackageProduction.request.params', request.params
    async (request: Request, response: Response) => 
    
        getPackageProduction(request.params.owner, request.params.name).then(
        // loog 'getPackageProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getPackageProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private postPackageProduction = 
    // loog 'postPackageProduction.request.params', request.params
    
    // loog 'postPackageProduction.request.body', request.body
    async (request: Request, response: Response) => 
    
        createPackageProduction(request.params.owner, request.params.name, request.body.description, JSON.stringify(request.body.packiFiles)).then(
        // loog 'postPackageProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('postPackageProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private putPackageProduction = 
    // loog 'putPackageProduction.request.params', request.params
    
    // loog 'putPackageProduction.request.body', request.body
    async (request: Request, response: Response) => 
    
        updatePackageProduction(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(request.body.packiFiles)).then(
        // loog 'putPackageProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('putPackageProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
