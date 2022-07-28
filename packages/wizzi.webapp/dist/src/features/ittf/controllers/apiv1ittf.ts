/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\ittf\controllers\apiv1ittf.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import * as ittfFsApi from '../api/ittfFsApi';

const myname = 'features/ittf/controllers/apiv1ittffs';

export class ApiV1IttfFsController implements ControllerType {
    
    public path = '/api/v1/ittf/fs/';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ApiV1IttfFsController.initialize', __filename);
        this.router.get('', this.getIttfDocument);
        this.router.put('', this.putIttfDocument);
    };
    
    private getIttfDocument = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log('getIttfDocument.request.params', request.params, __filename);
        var check = paramsCheck(request);
        var hash = check.notEmpty('body', 'hash');
        if (check.errors.length > 0) {
            return sendFailure(response, {
                    err: check.errors
                 }, 400);
        }
        ittfFsApi.getIttfDocument({
            hash: request.body.hash
         }).then((result: any) => {
        
            console.log('getIttfDocument.result', result, __filename);
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            console.log('getIttfDocument.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private putIttfDocument = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log('putIttfDocument.request.params', request.params, __filename);
        console.log('putIttfDocument.request.body', request.body, __filename);
        var check = paramsCheck(request);
        var hash = check.notEmpty('body', 'hash');
        var content = check.notEmpty('body', 'content');
        var prettify = check.optional('body', 'prettify');
        if (check.errors.length > 0) {
            return sendFailure(response, {
                    err: check.errors
                 }, 400);
        }
        ittfFsApi.putIttfDocument({
            hash: request.body.hash, 
            content: request.body.content, 
            prettify: request.body.prettify
         }).then((result: any) => {
        
            console.log('putIttfDocument.result', result, __filename);
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            console.log('putIttfDocument.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
