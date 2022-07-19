/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\packi\controllers\packiEditing.tsx.ittf
    utc time: Tue, 19 Jul 2022 19:18:05 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import ReactDOMServer from 'react-dom/server';
import {artifactApi, packageApi, metaApi, pluginApi, tFolderApi} from '../../production';
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

export class PackiEditingController implements ControllerType {
    
    public path = '/~~';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering PackiEditingController.initialize');
        this.router.get('/:userid', this.getPackiItemList);
        this.router.get('/a/:userid/:name', this.getPackiArtifactProductionByUsername_Name);
        this.router.get('/a/:userid/:name/*', this.getPackiArtifactProductionByUsername_Name);
        this.router.get('/p/:userid/:name', this.getPackiPackageProductionByUsername_Name);
        this.router.get('/p/:userid/:name/*', this.getPackiPackageProductionByUsername_Name);
        this.router.get('/m/:userid/:name', this.getPackiMetaProductionByUsername_Name);
        this.router.get('/m/:userid/:name/*', this.getPackiMetaProductionByUsername_Name);
        this.router.get('/l/:userid/:name', this.getPackiPluginProductionByUsername_Name);
        this.router.get('/l/:userid/:name/*', this.getPackiPluginProductionByUsername_Name);
        this.router.get('/t/:userid/:name', this.getPackiTFolderByUsername_Name);
        this.router.get('/t/:userid/:name/*', this.getPackiTFolderByUsername_Name);
    };
    
    private getPackiItemList = async (request: Request, response: Response) => {
    
        return response.redirect('/productions/artifacts');
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
        
            console.log('getPackiArtifactProductionByUsername_Name.error', err);
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
        // loog myname + '.getPackiPackageProductionByUsername_Name.result', result
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
        
            console.log('getPackiPackageProductionByUsername_Name.error', err);
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
        
            console.log('getPackiMetaProductionByUsername_Name.error', err);
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
        
            console.log('getPackiPluginProductionByUsername_Name.error', err);
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
        
            console.log('getPackiTFolderByUsername_Name.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
