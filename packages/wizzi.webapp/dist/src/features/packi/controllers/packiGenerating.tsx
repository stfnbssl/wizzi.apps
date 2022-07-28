/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\packi\controllers\packiGenerating.tsx.ittf
    utc time: Thu, 28 Jul 2022 09:18:22 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
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

export class PackiGeneratingController implements ControllerType {
    
    public path = '/~=';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering PackiGeneratingController.initialize', __filename);
        this.router.get('/p/:owner/:name', this.getPackiPackageGeneration);
        this.router.get('/p/:owner/:name/*', this.getPackiPackageGeneration);
        this.router.get('/m/:owner/:name', this.getPackiMetaGeneration);
        this.router.get('/m/:owner/:name/*', this.getPackiMetaGeneration);
        this.router.get('/l/:owner/:name', this.getPackiPluginGeneration);
        this.router.get('/l/:owner/:name/*', this.getPackiPluginGeneration);
    };
    
    private getPackiPackageGeneration = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log(myname + '.getPackiPackageGeneration', request.path, __filename);
        const queryParams = {};
        const parts = request.path.split('/');
        console.log(myname + '.getPackiPackageGeneration', parts[1], parts.slice(2).join('/'), __filename);
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
                
                    console.log('getPackiPackageGeneration.extractGeneratedFiles.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            ).catch((err: any) => {
            
                console.log('getPackiPackageGeneration.executeJobs.error', err, __filename);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
        
            console.log('getPackiPackageGeneration.prepareProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getPackiMetaGeneration = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log(myname + '.getPackiMetaGeneration', request.path, __filename);
        const queryParams = {};
        const parts = request.path.split('/');
        console.log(myname + '.getPackiMetaGeneration', parts[1], parts.slice(2).join('/'), __filename);
    }
    ;
    
    private getPackiPluginGeneration = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log(myname + '.getPackiPluginGeneration', request.path, __filename);
        const queryParams = {};
        const parts = request.path.split('/');
        console.log(myname + '.getPackiPluginGeneration', parts[1], parts.slice(2).join('/'), __filename);
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
                
                    console.log('getPackiPluginGeneration.extractGeneratedFiles.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            ).catch((err: any) => {
            
                console.log('getPackiPluginGeneration.executeJobs.error', err, __filename);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        
        ).catch((err: any) => {
        
            console.log('getPackiPluginGeneration.prepareProduction.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
