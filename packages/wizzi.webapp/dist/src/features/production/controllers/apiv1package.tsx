/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\apiv1package.tsx.ittf
    utc time: Sat, 23 Jul 2022 04:18:24 GMT
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
        console.log('Entering ApiV1PackageProductionController.initialize', __filename);
        this.router.get('/:owner', this.getPackageProductionList);
        this.router.get('/checkname/:owner/:name', this.getCheckPackageName);
        this.router.get('/:owner/:name', this.getPackageProduction);
        this.router.put('/:id', this.putPackageProduction);
        this.router.post('/:owner/:name', this.postPackageProduction);
    };
    
    private getPackageProductionList = 
    // loog 'getPackageProductionList.request.params', request.params
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        getListPackageProduction({
            query: {
                owner: request.params.owner
             }
         }).then(
        // loog 'getPackageProductionList.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getPackageProductionList.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getCheckPackageName = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log('getCheckPackageName.request.params', request.params, __filename);
        validatePackageProduction(request.params.owner, request.params.name).then((result: any) => {
        
            console.log('getCheckPackageName.result', result, __filename);
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            console.log('getCheckPackageName.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getPackageProduction = 
    // loog 'getPackageProduction.request.params', request.params
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        getPackageProduction(request.params.owner, request.params.name).then(
        // loog 'getPackageProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getPackageProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private postPackageProduction = 
    // loog 'postPackageProduction.request.params', request.params
    
    // loog 'postPackageProduction.request.body', request.body
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        createPackageProduction(request.params.owner, request.params.name, request.body.description, JSON.stringify(request.body.packiFiles)).then(
        // loog 'postPackageProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('postPackageProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private putPackageProduction = 
    // loog 'putPackageProduction.request.params', request.params
    
    // loog 'putPackageProduction.request.body', request.body
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        updatePackageProduction(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(request.body.packiFiles)).then(
        // loog 'putPackageProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('putPackageProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
