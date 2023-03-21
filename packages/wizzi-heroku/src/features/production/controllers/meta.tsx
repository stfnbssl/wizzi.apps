/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi-override\src\features\production\controllers\meta.tsx.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {webSecured} from '../../../middlewares/index';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import ReactDOMServer from 'react-dom/server';
import PageFormDocument from '../../../pages/PageFormDocument';
import {CRUDResult} from '../../types';
import {createMetaProduction, updateMetaProduction, deleteMetaProduction, getMetaProductionObject, getMetaProductionObjectById, generateMetaProduction} from '../api/meta';
import {mergePackiFiles} from '../utils';
import {packiTypes} from '../../packi';

const myname = 'features/production/controllers/meta';

function renderPageForm(req: Request, res: Response, data: object, queryParams: object) {

    const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
    <PageFormDocument
     data={data} queryParams={queryParams} />
    ));
    res.set('Content-Type', 'text/html');
    res.set('Content-Length', index.length.toString());
    res.send(index);
}
function getPackiConfigFile() {

    return {
            ['.packi/config.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    [ tfolders', 
                    '        {', 
                    '            $$ name "..."', 
                    '    [ contexts', 
                    '        {', 
                    '            $$ propertyName "..."', 
                    '            $$ artifactName "..."'
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
                    '        string( kind )'
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

export class MetaProductionController implements ControllerType {
    
    public path = '/meta';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering MetaProductionController.initialize');
        this.router.get("/new", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.getNewMetaForm))
        this.router.post("/new", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.postMeta))
        this.router.get("/update/:id", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.getUpdateMetaForm))
        this.router.post("/update", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.putMeta))
        this.router.get("/delete/:id", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.getDeleteMetaForm))
        this.router.post("/delete", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.deleteMeta))
        this.router.post("/generate", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.generateMeta))
    };
    
    private getNewMetaForm = async (request: Request, response: Response) => 
    
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'CreateMetaProduction', 
            formData: {
                owner: (request.session as any).user.username
             }
         }, {})
    
    ;
    
    private postMeta = async (request: Request, response: Response) => 
    
        createMetaProduction((request.session as any).user.username, request.body.mp_name, request.body.mp_description, JSON.stringify(getPackiConfigFile())).then((result: CRUDResult) => {
        
            if (result.ok) {
                response.redirect('/~~/m/' + (request.session as any).user.username + '/' + request.body.mp_name)
            }
            else {
                response.render('error.html.ittf', {
                    message: 'creating a new meta production', 
                    error: result
                 })
            }
        }
        ).catch((err: any) => 
        
            response.render('error.html.ittf', {
                message: 'creating a new meta production', 
                error: err
             })
        )
    
    ;
    
    private getUpdateMetaForm = 
    // loog myname + '.getUpdateMetaForm.id', id
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        getMetaProductionObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'UpdateMetaProduction', 
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
    
    private putMeta = async (request: Request, response: Response) => {
    
        const obj = request.body;
        updateMetaProduction(obj.mp_id, obj.mp_owner, obj.mp_name, obj.mp_description).then((result: any) => {
        
            if (result.ok) {
                response.redirect('/productions/metas');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'updating a meta production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
    
    private getDeleteMetaForm = 
    // loog myname + '.getDeleteMetaForm.id', id
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        getMetaProductionObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'DeleteMetaProduction', 
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
    
    private deleteMeta = 
    // loog myname + '.deleteMeta.request.path', request.path
    async (request: Request, response: Response) => {
    
        const obj = request.body;
        deleteMetaProduction(obj.mp_id, obj.mp_owner, obj.mp_name, obj.mp_description).then((result: any) => {
        
            if (result.ok) {
                response.redirect('/productions/metas');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'deleting a meta production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
    
    private generateMeta = async (request: Request, response: Response) => {
    
        generateMetaProduction(request.body.owner, request.body.name, request.body.cliCtx).then(
        // loog myname, 'getWizziMetaFolderByPackageProductionObject.generateMetaProduction', Object.keys(wizziPackiFiles)
        (wizziPackiFiles: packiTypes.PackiFiles) => 
        
            sendSuccess(response, wizziPackiFiles)
        )
        .catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            response.render('error.html.ittf', {
                message: 'MetaProductionController.generateMeta', 
                error: err
             })
        }
        )
    }
    ;
}
