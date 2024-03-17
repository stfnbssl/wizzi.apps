/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\packiProductions\controllers\plugin.tsx.ittf
    utc time: Wed, 13 Mar 2024 07:19:42 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import ReactDOMServer from 'react-dom/server';
import PageFormDocument from '../../../pages/PageFormDocument';
import {CRUDResult} from '../../types';
import {getTemplatePackiFiles} from '../api/meta';
import {createPluginProduction, updatePluginProduction, deletePluginProduction, getPluginProductionObject, getPluginProductionObjectById} from '../api/plugin';
import {mergePackiFiles} from '../utils';
import {packiTypes} from '../../packi';

const myname = 'features/production/controllers/plugin';

function renderPageForm(req: Request, res: Response, data: object, queryParams: object) {

    const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
    <PageFormDocument
     data={data} queryParams={queryParams} />
    ));
    res.set('Content-Type', 'text/html');
    res.set('Content-Length', index.length.toString());
    res.send(index);
}
function getPackiConfigFile():  packiTypes.PackiFiles {

    return {
            ['.packi/config.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    { meta', 
                    '        $$ name "..name.."', 
                    '        { metaCtx"', 
                    '            kind "artifact" $$ file|artifact', 
                    '            $$ filePath ".packi/metaCtx.json.ittf" $$ when kind = "file"', 
                    '            { artifact', 
                    '                $$ name "..name.." $$ when kind = "artifact"', 
                    '            [ contexts', 
                    '                {', 
                    '                    $$ propertyName "..name.."', 
                    '                    $$ artifactName "..name.."', 
                    '    [ tfolders', 
                    '        {', 
                    '            $$ name "..name.."', 
                    '    [ contexts', 
                    '        {', 
                    '            $$ propertyName "..name.."', 
                    '            $$ aartifactName "..name.."'
                ].join('\n')
             }, 
            ['.packi/properties/index.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    [ properties', 
                    '        {', 
                    '            name "name"', 
                    '            type "string"', 
                    '        string$( kind )'
                ].join('\n')
             }, 
            ['.packi/properties/t/string.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    $params name', 
                    '    name "${name}"', 
                    '    type "string"', 
                    '    $hook'
                ].join('\n')
             }, 
            ['.packi/properties/t/boolean.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    $params name', 
                    '    name "${name}"', 
                    '    type "boolean"', 
                    '    $hook'
                ].join('\n')
             }, 
            ['.packi/properties/t/number.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    $params name', 
                    '    name "${name}"', 
                    '    type "number"', 
                    '    $hook'
                ].join('\n')
             }, 
            ['.packi/properties/t/object.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    $params name', 
                    '    name "${name}"', 
                    '    type "object"', 
                    '    [ properties', 
                    '        $hook'
                ].join('\n')
             }, 
            ['.packi/properties/t/array.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    $params name', 
                    '    name "${name}"', 
                    '    type "array"', 
                    '    [ properties', 
                    '        $hook'
                ].join('\n')
             }
         };
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

export class PluginProductionController implements ControllerType {
    
    public path = '/plugin';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering PluginProductionController.initialize');
        this.router.get("/new", makeHandlerAwareOfAsyncErrors(this.getNewPluginForm))
        this.router.post("/new", makeHandlerAwareOfAsyncErrors(this.postPlugin))
        this.router.get("/update/:id", makeHandlerAwareOfAsyncErrors(this.getUpdatePluginForm))
        this.router.post("/update", makeHandlerAwareOfAsyncErrors(this.putPlugin))
        this.router.get("/delete/:id", makeHandlerAwareOfAsyncErrors(this.getDeletePluginForm))
        this.router.post("/delete", makeHandlerAwareOfAsyncErrors(this.deletePlugin))
        this.router.get("/props", makeHandlerAwareOfAsyncErrors(this.getPluginProperties))
    };
    
    private getNewPluginForm = async (request: Request, response: Response) => 
    
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'CreatePluginProduction', 
            formData: {
                owner: (request.session as any).user.username
             }
         }, {})
    
    ;
    
    private postPlugin = async (request: Request, response: Response) => 
    
        getTemplatePackiFiles(request.body.meta_id, request.body.meta_propsValues ? JSON.parse(request.body.meta_propsValues) : {}, request.query.context as string, request.body.context ? JSON.parse(request.body.context) : {}, {
            wizziSchema: "js", 
            mainIttf: "index.js.ittf"
         }).then((packiFiles: packiTypes.PackiFiles) => 
        
            createPluginProduction((request.session as any).user.username, request.body.pp_name, request.body.pp_description, JSON.stringify(mergePackiFiles(packiFiles, getPackiConfigFile()))).then((result: CRUDResult) => {
            
                if (result.ok) {
                    response.redirect('/~~/l/' + (request.session as any).user.username + '/' + request.body.pp_name)
                }
                else {
                    response.render('error.html.ittf', {
                        message: 'creating a new plugin production', 
                        error: result
                     })
                }
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                response.render('error.html.ittf', {
                    message: 'creating a new plugin production', 
                    error: err
                 })
            }
            )
        
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            response.render('error.html.ittf', {
                message: 'getting template packi files while creating a new plugin production', 
                error: err
             })
        }
        )
    
    ;
    
    private getUpdatePluginForm = 
    // loog myname + '.getUpdatePluginForm.id', id
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        getPluginProductionObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'UpdatePluginProduction', 
                formData: {
                    _id: id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description
                 }
             }, {})
        )
    }
    ;
    
    private putPlugin = async (request: Request, response: Response) => {
    
        const obj = request.body;
        updatePluginProduction(obj.pl_id, obj.pl_owner, obj.pl_name, obj.pl_description).then((result: any) => {
        
            if (result.ok) {
                response.redirect('/productions/plugins');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'updating a plugin production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
    
    private getDeletePluginForm = 
    // loog myname + '.getDeletePluginForm.id', id
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        getPluginProductionObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'DeletePluginProduction', 
                formData: {
                    _id: result._id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description
                 }
             }, {})
        )
    }
    ;
    
    private deletePlugin = 
    // loog myname + '.deletePlugin.request.path', request.path
    async (request: Request, response: Response) => {
    
        const obj = request.body;
        deletePluginProduction(obj.pl_id, obj.pl_owner, obj.pl_name).then((result: any) => {
        
            if (result.ok) {
                response.redirect('/productions/plugins');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'deleting a plugin production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
    
    private getPluginProperties = async (request: Request, response: Response) => 
    
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'PropertyEditor', 
            formData: {
                owner: request.query.owner, 
                name: request.query.name, 
                schema: {
                    properties: [
                        {
                            name: 'name', 
                            type: 'string'
                         }, 
                        {
                            name: 'age', 
                            type: 'number'
                         }, 
                        {
                            name: 'jobs', 
                            type: 'array', 
                            properties: [
                                {
                                    name: 'title', 
                                    type: 'string'
                                 }, 
                                {
                                    name: 'year', 
                                    type: 'number'
                                 }
                            ]
                         }, 
                        {
                            name: 'react', 
                            type: 'object', 
                            properties: [
                                {
                                    name: 'useReact', 
                                    type: 'boolean', 
                                    isCondition: true
                                 }, 
                                {
                                    name: 'useRouter', 
                                    type: 'boolean'
                                 }, 
                                {
                                    name: 'useRedux', 
                                    type: 'boolean'
                                 }
                            ]
                         }
                    ]
                 }
             }
         }, {})
    
    ;
}
