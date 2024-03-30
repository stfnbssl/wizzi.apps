/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\packiProductions\controllers\package.tsx.ittf
    utc time: Mon, 25 Mar 2024 04:46:07 GMT
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
import {createPackageProduction, updatePackageProduction, deletePackageProduction, getPackageProductionObject, getPackageProductionObjectById, getWizziMetaFolder} from '../api/package';
import {mergePackiFiles} from '../utils';
import {packiTypes} from '../../packi';

const myname = 'features/production/controllers/package';

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
                    '            $$ artifactName "..name.."'
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

export class PackageProductionController implements ControllerType {
    
    public path = '/package';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering PackageProductionController.initialize');
        this.router.get("/new", makeHandlerAwareOfAsyncErrors(this.getNewPackageForm))
        this.router.post("/new", makeHandlerAwareOfAsyncErrors(this.postPackage))
        this.router.get("/update/:id", makeHandlerAwareOfAsyncErrors(this.getUpdatePackageForm))
        this.router.post("/update", makeHandlerAwareOfAsyncErrors(this.putPackage))
        this.router.get("/delete/:id", makeHandlerAwareOfAsyncErrors(this.getDeletePackageForm))
        this.router.post("/delete", makeHandlerAwareOfAsyncErrors(this.deletePackage))
        this.router.get("/props/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getPackageProperties))
        this.router.get("/meta/:owner/:name", makeHandlerAwareOfAsyncErrors(this.getWizziMetaFolderByName))
    };
    
    private getNewPackageForm = async (request: Request, response: Response) => 
    
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'CreatePackageProduction', 
            formData: {
                owner: (request.session as any).user.username
             }
         }, {})
    
    ;
    
    private postPackage = 
    // loog myname + '.postNewPackage.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.postNewPackage.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => 
    
        getTemplatePackiFiles(request.body.meta_id, request.body.meta_propsValues ? JSON.parse(request.body.meta_propsValues) : {}, request.query.context as string, request.body.context ? JSON.parse(request.body.context) : {}, {
            wizziSchema: null, 
            mainIttf: null
         }).then((packiFiles: packiTypes.PackiFiles) => 
        
            createPackageProduction((request.session as any).user.username, request.body.pp_name, request.body.pp_description, JSON.stringify(mergePackiFiles(packiFiles, getPackiConfigFile()))).then((result: CRUDResult) => {
            
                if (result.ok) {
                    response.redirect('/~~/p/' + (request.session as any).user.username + '/' + request.body.pp_name)
                }
                else {
                    response.render('error.html.ittf', {
                        message: 'creating a new package production', 
                        error: result
                     })
                }
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'creating a new package production', err);
                response.render('error.html.ittf', {
                    message: 'creating a new package production', 
                    error: err
                 })
            }
            )
        
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getting template packi files while creating a new package production', err);
            response.render('error.html.ittf', {
                message: 'getting template packi files while creating a new package production', 
                error: err
             })
        }
        )
    
    ;
    
    private getUpdatePackageForm = 
    // loog myname + '.getUpdatePackageForm.id', id
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        getPackageProductionObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'UpdatePackageProduction', 
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
    
    private putPackage = async (request: Request, response: Response) => {
    
        const obj = request.body;
        updatePackageProduction(obj.pp_id, obj.pp_owner, obj.pp_name, obj.pp_description).then((result: any) => {
        
            if (result.ok) {
                response.redirect('/productions/packages');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'updating a package production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
    
    private getDeletePackageForm = 
    // loog myname + '.getDeletePackageForm.id', id
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        getPackageProductionObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'DeletePackageProduction', 
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
    
    private deletePackage = 
    // loog myname + '.deletePackage.request.path', request.path
    async (request: Request, response: Response) => {
    
        const obj = request.body;
        deletePackageProduction(obj.pp_id, obj.pp_owner, obj.pp_name).then((result: any) => {
        
            if (result.ok) {
                response.redirect('/productions/packages');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'deleting a package production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
    
    private getPackageProperties = async (request: Request, response: Response) => 
    
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
    
    private getWizziMetaFolderByName = async (request: Request, response: Response) => 
    
        getWizziMetaFolder(request.params.owner, request.params.name, {}).then((packiFiles: packiTypes.PackiFiles) => 
        
            sendSuccess(response, packiFiles)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getting wizzi meta folder', err);
            response.render('error.html.ittf', {
                message: 'getting wizzi meta folder', 
                error: err
             })
        }
        )
    
    ;
}
