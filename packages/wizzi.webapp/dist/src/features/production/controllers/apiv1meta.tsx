/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\apiv1meta.tsx.ittf
    utc time: Sat, 23 Jul 2022 04:18:24 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {validateMetaProduction, getListMetaProduction, getMetaProduction, getMetaProductionObjectById, updateMetaProduction, createMetaProduction} from '../api/meta';

import {wizziTypes, wizziProds, WizziFactory} from '../../wizzi';
import {artifactApi, productionApi} from '../../production';
const myname = 'features/production/controllers/apiv1metaproduction';

export class ApiV1MetaProductionController implements ControllerType {
    
    public path = '/api/v1/production/meta';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ApiV1MetaProductionController.initialize', __filename);
        this.router.get('/:owner', this.getMetaProductionList);
        this.router.get('/props/:id', this.getMetaProperties);
        this.router.get('/checkname/:owner/:name', this.getCheckMetaName);
        this.router.get('/:owner/:name', this.getMetaProduction);
        this.router.put('/:id', this.putMetaProduction);
        this.router.post('/:owner/:name', this.postMetaProduction);
    };
    
    private getMetaProductionList = 
    // loog 'getMetaProductionList.request.params', request.params
    
    // loog 'getMetaProductionList.request.session.user.username', (request.session as any).user.username
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        getListMetaProduction({
            query: {
                owner: request.params.owner
             }
         }).then(
        // loog 'getMetaProductionList.result', result
        (result: any) => {
        
            if (result.ok) {
                const items = [];
                var i, i_items=result.item, i_len=result.item.length, meta;
                for (i=0; i<i_len; i++) {
                    meta = result.item[i];
                    items.push({
                        id: meta.id, 
                        owner: meta.owner, 
                        name: meta.name, 
                        description: meta.description
                     })
                }
                sendSuccess(response, items)
            }
            else {
                console.log('getMetaProductionList.error', result, __filename);
                sendFailure(response, {
                    err: result
                 }, 501)
            }
        }
        ).catch((err: any) => {
        
            console.log('getMetaProductionList.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getMetaProperties = 
    // loog 'getMetaProperties.request.params', request.params
    
    // loog 'getMetaProperties.request.session.user.username', (request.session as any).user.username
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        productionApi.prepareProductionById('meta', request.params.id, '', {}).then((metaProductionSet: any) => 
        
            wizziProds.generateArtifact('properties/index.json.ittf', metaProductionSet.packiFiles, metaProductionSet.context).then((value) => {
            
                console.log(myname, 'getMetaProperties.generateArtifact.result', value, __filename);
                sendSuccess(response, {
                    meta: JSON.parse(value.artifactContent)
                 })
            }
            ).catch((err: any) => {
            
                console.log('features.packi.controllers.production.generateArtifact.error', err, __filename);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
        
            console.log('getMetaProperties.prepareProductionById.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getCheckMetaName = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log('getCheckMetaName.request.params', request.params, __filename);
        validateMetaProduction(request.params.owner, request.params.name).then((result: any) => {
        
            console.log('getCheckMetaName.result', result, __filename);
            sendSuccess(response, result)
        }
        ).catch((err: any) => {
        
            console.log('getCheckMetaName.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getMetaProduction = 
    // loog 'getMetaProduction.request.params', request.params
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        getMetaProduction(request.params.owner, request.params.name).then(
        // loog 'getMetaProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('getMetaProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private postMetaProduction = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log('postMetaProduction.request.params', request.params, __filename);
        console.log('postMetaProduction.request.body', request.body, __filename);
        createMetaProduction(request.params.owner, request.params.name, request.body.description, JSON.stringify(request.body.packiFiles)).then(
        // loog 'postMetaProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('postMetaProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private putMetaProduction = 
    // loog 'putMetaProduction.request.params', request.params
    
    // loog 'putMetaProduction.request.body', request.body
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        updateMetaProduction(request.params.id, request.body.owner, request.body.name, request.body.description, JSON.stringify(request.body.packiFiles)).then(
        // loog 'putMetaProduction.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('putMetaProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
