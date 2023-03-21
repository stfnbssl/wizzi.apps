/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi-override\src\features\packi\controllers\packiGenerating.tsx.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {webSecured} from '../../../middlewares/index';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import ReactDOMServer from 'react-dom/server';
import {wizziTypes, wizziProds, WizziFactory} from '../../wizzi';
import {packageApi, metaApi, pluginApi, productionApi} from '../../production';
import EditorDocument from '../../../pages/EditorDocument';
const myname = 'features/packi/controller/packiGenerating';

function renderPackiEditor(req: Request, res: Response, packiItemObject: object, loggedUser: object, queryParams: object) {

    const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
    <EditorDocument
     data={packiItemObject} queryParams={queryParams} loggedUser={loggedUser} />
    ));
    res.set('Content-Type', 'text/html');
    res.set('Content-Length', index.length.toString());
    res.send(index);
}

function makeHandlerAwareOfAsyncErrors(handler) {

    return async function(request: Request, response: Response, next: Function) {
        
            try {
                await handler(request, response, next);
            } 
            catch (error) {
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

export class PackiGeneratingController implements ControllerType {
    
    public path = '/~=';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering PackiGeneratingController.initialize');
        this.router.get("/p/:owner/:name", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.getPackiPackageGeneration))
        this.router.get("/p/:owner/:name/*", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.getPackiPackageGeneration))
        this.router.get("/m/:owner/:name", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.getPackiMetaGeneration))
        this.router.get("/m/:owner/:name/*", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.getPackiMetaGeneration))
        this.router.get("/l/:owner/:name", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.getPackiPluginGeneration))
        this.router.get("/l/:owner/:name/*", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.getPackiPluginGeneration))
    };
    
    private getPackiPackageGeneration = 
    // loog myname + '.getPackiPackageGeneration', request.path
    
    // loog myname + '.getPackiPackageGeneration', parts[1], parts.slice(2).join('/')
    async (request: Request, response: Response) => {
    
        const queryParams = {};
        const parts = request.path.split('/');
        productionApi.prepareProduction('package', parts[2], parts.slice(3).join('/'), '', {}).then((packageProductionSet: any) => 
        
            wizziProds.executeJobs(packageProductionSet.packiFiles, packageProductionSet.context).then((fsJson: any) => {
            
                WizziFactory.extractGeneratedFiles(fsJson).then((packiFiles) => {
                
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
                            _id: packageProductionSet._id, 
                            owner: packageProductionSet.owner, 
                            name: packageProductionSet.name, 
                            description: packageProductionSet.description, 
                            packiFiles: packiFiles, 
                            packiProduction: 'package', 
                            readOnly: true, 
                            generation: true
                         }
                     }, loggedUser, queryParams)
                }
                )
                .catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'getPackiPackageGeneration.extractGeneratedFiles.error', err);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getPackiPackageGeneration.executeJobs.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getPackiPackageGeneration.prepareProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getPackiMetaGeneration = 
    // loog myname + '.getPackiMetaGeneration', request.path
    
    // loog myname + '.getPackiMetaGeneration', parts[1], parts.slice(2).join('/')
    async (request: Request, response: Response) => {
    
        const queryParams = {};
        const parts = request.path.split('/');
    }
    ;
    
    private getPackiPluginGeneration = 
    // loog myname + '.getPackiPluginGeneration', request.path
    
    // loog myname + '.getPackiPluginGeneration', parts[1], parts.slice(2).join('/')
    async (request: Request, response: Response) => {
    
        const queryParams = {};
        const parts = request.path.split('/');
        productionApi.prepareProduction('plugin', parts[2], parts.slice(3).join('/'), '', {}).then((packageProductionSet: any) => 
        
            wizziProds.executeJobs(packageProductionSet.packiFiles, packageProductionSet.context).then((fsJson: any) => {
            
                WizziFactory.extractGeneratedFiles(fsJson).then((packiFiles) => {
                
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
                            _id: packageProductionSet._id, 
                            owner: packageProductionSet.owner, 
                            name: packageProductionSet.name, 
                            description: packageProductionSet.description, 
                            packiFiles: packiFiles, 
                            packiProduction: 'plugin', 
                            readOnly: true, 
                            generation: true
                         }
                     }, loggedUser, queryParams)
                }
                )
                .catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'getPackiPluginGeneration.extractGeneratedFiles.error', err);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getPackiPluginGeneration.executeJobs.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getPackiPluginGeneration.prepareProduction.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
