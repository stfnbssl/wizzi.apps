/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\packi\controllers\packiEditing.tsx.ittf
    utc time: Sat, 06 May 2023 11:50:26 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import ReactDOMServer from 'react-dom/server';
import {artifactApi, packageApi, metaApi, pluginApi, tFolderApi} from '../../packiProductions';
import EditorDocument from '../../../pages/EditorDocument';
import PackiItemList from '../components/PackiItemList';
const myname = 'features/packi/controller/packiEditing';

function renderPackiEditor(req: Request, res: Response, packiItemObject: object, loggedUser: object, queryParams: object) {

    const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
    <EditorDocument
     data={packiItemObject} queryParams={queryParams} loggedUser={loggedUser} />
    ));
    res.set('Content-Type', 'text/html');
    res.set('Content-Length', index.length.toString());
    res.send(index);
}

function makeHandlerAwareOfAsyncErrors(handler: any) {

    return async function(request: Request, response: Response, next: NextFunction) {
        
            try {
                await handler(request, response, next);
            } 
            catch (error: any) {
                if (error instanceof FcError) {
                    response.status(statusCode.BAD_REQUEST).send({
                        code: error.code, 
                        message: error.message, 
                        data: error.data || {}
                     })
                }
                else {
                    const fcError = new FcError(SYSTEM_ERROR);
                    response.status(statusCode.BAD_REQUEST).send({
                        code: fcError.code, 
                        message: error.message, 
                        data: fcError.data || {}
                     })
                }
            } 
        };
}

export class PackiEditingController implements ControllerType {
    
    public path = '/~~';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering PackiEditingController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(this.getPackiItemList))
        this.router.get("/a/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getPackiArtifactProductionByUsername_Name))
        this.router.get("/a/:owner/:name/*", makeHandlerAwareOfAsyncErrors(this.getPackiArtifactProductionByUsername_Name))
        this.router.get("/p/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getPackiPackageProductionByUsername_Name))
        this.router.get("/p/:owner/:name/*", makeHandlerAwareOfAsyncErrors(this.getPackiPackageProductionByUsername_Name))
        this.router.get("/m/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getPackiMetaProductionByUsername_Name))
        this.router.get("/m/:owner/:name/*", makeHandlerAwareOfAsyncErrors(this.getPackiMetaProductionByUsername_Name))
        this.router.get("/l/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getPackiPluginProductionByUsername_Name))
        this.router.get("/l/:owner/:name/*", makeHandlerAwareOfAsyncErrors(this.getPackiPluginProductionByUsername_Name))
        this.router.get("/t/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getPackiTFolderByUsername_Name))
        this.router.get("/t/:owner/:name/*", makeHandlerAwareOfAsyncErrors(this.getPackiTFolderByUsername_Name))
    };
    
    private getPackiItemList = async (request: Request, response: Response) => {
    
        return response.redirect('/packi/productions/artifacts');
    }
    ;
    
    private getPackiArtifactProductionByUsername_Name = 
    // TODO
    
    // loog myname + '.getPackiArtifactProductionByUsername_Name', request.path
    
    // loog myname + '.getPackiArtifactProductionByUsername_Name', parts[1], parts.slice(2).join('/')
    async (request: Request, response: Response) => {
    
        const queryParams = {};
        const parts = request.path.split('/');
        artifactApi.getArtifactProductionObject(parts[2], parts.slice(3).join('/')).then(
        // loog myname + '.getPackiArtifactProductionByUsername_Name.result', result
        (result: any) => {
        
            const user = (request.session as any).user;
            const loggedUser = {
                id: user._id, 
                username: user.username, 
                displayName: user.name, 
                picture: user.avatar_url
             };
            renderPackiEditor(request, response, {
                type: 'success', 
                packi: {
                    _id: result._id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description, 
                    mainIttf: result.mainIttf, 
                    wizziSchema: result.wizziSchema, 
                    packiFiles: result.packiFiles, 
                    packiProduction: 'artifact'
                 }
             }, loggedUser, queryParams)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getPackiPackageProductionByUsername_Name = 
    // TODO
    
    // loog myname + '.getPackiPackageProductionByUsername_Name', request.path
    
    // loog myname + '.getPackiPackageProductionByUsername_Name', parts[1], parts.slice(2).join('/')
    async (request: Request, response: Response) => {
    
        const queryParams = {};
        const parts = request.path.split('/');
        packageApi.getPackageProductionObject(parts[2], parts.slice(3).join('/')).then(
        // loog myname + '.getPackiPackageProductionByUsername_Name.result', Object.keys(result)
        (result: any) => {
        
            const user = (request.session as any).user;
            const loggedUser = {
                id: user._id, 
                username: user.username, 
                displayName: user.name, 
                picture: user.avatar_url
             };
            renderPackiEditor(request, response, {
                type: 'success', 
                packi: {
                    _id: result._id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description, 
                    packiFiles: result.packiFiles, 
                    packiProduction: 'package'
                 }
             }, loggedUser, queryParams)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getPackiMetaProductionByUsername_Name = 
    // TODO
    
    // loog myname + '.getPackiMetaProductionByUsername_Name', request.path
    
    // loog myname + '.getPackiMetaProductionByUsername_Name', parts[1], parts.slice(2).join('/')
    async (request: Request, response: Response) => {
    
        const queryParams = {};
        const parts = request.path.split('/');
        metaApi.getMetaProductionObject(parts[2], parts.slice(3).join('/')).then(
        // loog myname + '.getPackiMetaProductionByUsername_Name.result', result
        (result: any) => {
        
            const user = (request.session as any).user;
            const loggedUser = {
                id: user._id, 
                username: user.username, 
                displayName: user.name, 
                picture: user.avatar_url
             };
            renderPackiEditor(request, response, {
                type: 'success', 
                packi: {
                    _id: result._id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description, 
                    packiFiles: result.packiFiles, 
                    packiProduction: 'meta'
                 }
             }, loggedUser, queryParams)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getPackiPluginProductionByUsername_Name = 
    // TODO
    
    // loog myname + '.getPackiPluginProductionByUsername_Name', request.path
    
    // loog myname + '.getPackiPluginProductionByUsername_Name', parts[1], parts.slice(2).join('/')
    async (request: Request, response: Response) => {
    
        const queryParams = {};
        const parts = request.path.split('/');
        pluginApi.getPluginProductionObject(parts[2], parts.slice(3).join('/')).then(
        // loog myname + '.getPackiPluginProductionByUsername_Name.result', result
        (result: any) => {
        
            const user = (request.session as any).user;
            const loggedUser = {
                id: user._id, 
                username: user.username, 
                displayName: user.name, 
                picture: user.avatar_url
             };
            renderPackiEditor(request, response, {
                type: 'success', 
                packi: {
                    _id: result._id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description, 
                    packiFiles: result.packiFiles, 
                    packiProduction: 'plugin'
                 }
             }, loggedUser, queryParams)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getPackiTFolderByUsername_Name = 
    // TODO
    
    // loog myname + '.getPackiTFolderByUsername_Name', request.path
    
    // loog myname + '.getPackiTFolderByUsername_Name', parts[1], parts.slice(2).join('/')
    async (request: Request, response: Response) => {
    
        const queryParams = {};
        const parts = request.path.split('/');
        tFolderApi.getTFolderObject(parts[2], parts.slice(3).join('/')).then(
        // loog myname + '.getPackiTFolderByUsername_Name.result', result
        (result: any) => {
        
            const user = (request.session as any).user;
            const loggedUser = {
                id: user._id, 
                username: user.username, 
                displayName: user.name, 
                picture: user.avatar_url
             };
            renderPackiEditor(request, response, {
                type: 'success', 
                packi: {
                    _id: result._id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description, 
                    packiFiles: result.packiFiles, 
                    packiProduction: 'tfolder'
                 }
             }, loggedUser, queryParams)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}