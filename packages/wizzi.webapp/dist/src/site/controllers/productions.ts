/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\site\controllers\productions.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';
import jsesc from 'jsesc';
import {artifactApi, packageApi, pluginApi, metaApi, tFolderApi} from '../../features/production';

export class ProductionsController implements ControllerType {
    
    public path = '/productions';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ProductionsController.initialize', __filename);
        this.router.get('/artifacts', this.artifacts);
        this.router.get('/packages', this.packages);
        this.router.get('/plugins', this.plugins);
        this.router.get('/metas', this.metas);
        this.router.get('/tfolders', this.tfolders);
    };
    
    private artifacts = async (request: Request, response: Response) => 
    
        artifactApi.getListArtifactProduction().then(result => 
        
            response.render('productions/artifacts.html.ittf', {
                title: 'Artifact productions · Wizzi', 
                artifacts: result.item, 
                __INITIAL_DATA__: `  window.__INITIAL_DATA__ = ${jsesc({
                    data: {
                        type: 'success', 
                        formName: 'ListArtifactProduction', 
                        formData: {
                            artifacts: result.item
                         }
                     }, 
                    queryParams: {
                        
                     }
                 }, {
                    quotes: 'double', 
                    isScriptContext: true
                 })}`
             })
        ).catch((err) => {
        
            console.log('artifact productions.err', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private packages = async (request: Request, response: Response) => 
    
        packageApi.getListPackageProduction().then(result => 
        
            response.render('productions/packages.html.ittf', {
                title: 'Package productions · Wizzi', 
                packages: result.item, 
                __INITIAL_DATA__: `  window.__INITIAL_DATA__ = ${jsesc({
                    data: {
                        type: 'success', 
                        formName: 'ListPackageProduction', 
                        formData: {
                            packages: result.item
                         }
                     }, 
                    queryParams: {
                        
                     }
                 }, {
                    quotes: 'double', 
                    isScriptContext: true
                 })}`
             })
        ).catch((err) => {
        
            console.log('package productions.err', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private plugins = async (request: Request, response: Response) => 
    
        pluginApi.getListPluginProduction().then(result => 
        
            response.render('productions/plugins.html.ittf', {
                title: 'Plugin productions · Wizzi', 
                plugins: result.item, 
                __INITIAL_DATA__: `  window.__INITIAL_DATA__ = ${jsesc({
                    data: {
                        type: 'success', 
                        formName: 'ListPluginProduction', 
                        formData: {
                            plugins: result.item
                         }
                     }, 
                    queryParams: {
                        
                     }
                 }, {
                    quotes: 'double', 
                    isScriptContext: true
                 })}`
             })
        ).catch((err) => {
        
            console.log('plugin productions.err', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private metas = async (request: Request, response: Response) => 
    
        metaApi.getListMetaProduction().then(result => 
        
            response.render('productions/metas.html.ittf', {
                title: 'Meta productions · Wizzi', 
                metas: result.item, 
                __INITIAL_DATA__: `  window.__INITIAL_DATA__ = ${jsesc({
                    data: {
                        type: 'success', 
                        formName: 'ListMetaProduction', 
                        formData: {
                            metas: result.item
                         }
                     }, 
                    queryParams: {
                        
                     }
                 }, {
                    quotes: 'double', 
                    isScriptContext: true
                 })}`
             })
        ).catch((err) => {
        
            console.log('meta productions.err', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private tfolders = async (request: Request, response: Response) => 
    
        tFolderApi.getListTFolder().then(result => 
        
            response.render('productions/tfolders.html.ittf', {
                title: 'tFolder · Wizzi', 
                tfolders: result.item, 
                __INITIAL_DATA__: `  window.__INITIAL_DATA__ = ${jsesc({
                    data: {
                        type: 'success', 
                        formName: 'ListTFolder', 
                        formData: {
                            tfolders: result.item
                         }
                     }, 
                    queryParams: {
                        
                     }
                 }, {
                    quotes: 'double', 
                    isScriptContext: true
                 })}`
             })
        ).catch((err) => {
        
            console.log('tFolders.err', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
