/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\meta.tsx.ittf
    utc time: Sat, 23 Jul 2022 04:18:24 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import ReactDOMServer from 'react-dom/server';
import PageFormDocument from '../../../pages/PageFormDocument';
import {CRUDResult} from '../../types';
import {createMetaProduction, updateMetaProduction, deleteMetaProduction, getMetaProductionObject, getMetaProductionObjectById} from '../api/meta';

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
function getPackiFiles() {

    return {
            ['properties/index.json.ittf']: {
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
            ['properties/t/string.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    $params name', 
                    '    name "${name}"', 
                    '    type "string"', 
                    '    $hook'
                ].join('\n')
             }, 
            ['properties/t/boolean.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    $params name', 
                    '    name "${name}"', 
                    '    type "boolean"', 
                    '    $hook'
                ].join('\n')
             }, 
            ['properties/t/number.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    $params name', 
                    '    name "${name}"', 
                    '    type "number"', 
                    '    $hook'
                ].join('\n')
             }, 
            ['properties/t/object.json.ittf']: {
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
            ['properties/t/array.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    $params name', 
                    '    name "${name}"', 
                    '    type "array"', 
                    '    [ properties', 
                    '        $hook'
                ].join('\n')
             }, 
            ['template/index.html.ittf.ittf']: {
                type: 'CODE', 
                contents: [
                    'html', 
                    '    body', 
                    '        div', 
                    '            h1', 
                    '                + Hello ${cliCtx.name}'
                ].join('\n')
             }
         };
}

export class MetaProductionController implements ControllerType {
    
    public path = '/meta';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering MetaProductionController.initialize', __filename);
        this.router.get('/new', this.getNewMetaForm);
        this.router.post('/new', this.postMeta);
        this.router.get('/update/:id', this.getUpdateMetaForm);
        this.router.post('/update', this.putMeta);
        this.router.get('/delete/:id', this.getDeleteMetaForm);
        this.router.post('/delete', this.deleteMeta);
    };
    
    private getNewMetaForm = 
    // loog myname, 'getNewMetaForm', JSON.stringify(request.query, null, 2)
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'CreateMetaProduction', 
            formData: {
                owner: username
             }
         }, {})
    }
    ;
    
    private postMeta = 
    // loog myname + '.postNewMeta.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.postNewMeta.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        createMetaProduction((request.session as any).user.username, request.body.mp_name, request.body.mp_description, JSON.stringify(getPackiFiles())).then(
        // loog myname + '.postNewMeta.createMetaProduction.result', JSON.stringify(result, null, 2)
        (result: CRUDResult) => {
        
            if (result.ok) {
                response.redirect('/productions/metas');
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
    }
    ;
    
    private getUpdateMetaForm = 
    // loog myname + '.getUpdateMetaForm', request.path
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        const id = request.params.id;
        console.log(myname + '.getUpdateMetaForm.id', id, __filename);
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
    
    private putMeta = 
    // loog myname + '.putMeta.request.path', request.path
    
    // loog myname + '.putMeta.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.putMeta.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
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
    // loog myname + '.getDeleteMetaForm', request.path
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        const id = request.params.id;
        console.log(myname + '.getDeleteMetaForm.id', id, __filename);
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
    // loog myname + '.deleteMeta.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.deleteMeta.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log(myname + '.deleteMeta.request.path', request.path, __filename);
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
}
