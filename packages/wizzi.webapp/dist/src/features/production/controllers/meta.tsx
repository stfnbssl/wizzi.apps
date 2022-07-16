/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\meta.tsx.ittf
    utc time: Fri, 15 Jul 2022 15:38:04 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import ReactDOMServer from 'react-dom/server';
import PageFormDocument from '../../../pages/PageFormDocument';
import {CRUDResult} from '../../types';
import {createMetaProduction, updateMetaProduction, deleteMetaProduction, getMetaProductionObject} from '../api/meta';

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
                    '            type "string"'
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
        console.log('Entering MetaProductionController.initialize');
        this.router.get('/new', this.getNewMetaForm);
        this.router.post('/new', this.postMeta);
        this.router.get('/update/:userid/*', this.getUpdateMetaForm);
        this.router.post('/update', this.putMeta);
        this.router.get('/delete/:userid/*', this.getDeleteMetaForm);
        this.router.post('/delete', this.deleteMeta);
    };
    
    private getNewMetaForm = 
    // loog myname, 'getNewMetaForm', JSON.stringify(request.query, null, 2)
    async (request: Request, response: Response) => 
    
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'CreateMetaProduction', 
            formData: {
                owner: request.query.owner, 
                name: request.query.name
             }
         }, {})
    
    ;
    
    private postMeta = 
    // loog myname + '.postNewMeta.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.postNewMeta.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => 
    
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
    
    ;
    
    private getUpdateMetaForm = 
    // loog myname + '.getUpdateMetaForm', request.path
    
    // loog myname + '.getUpdateMetaForm', parts[2], parts.slice(3).join('/')
    async (request: Request, response: Response) => {
    
        const parts = request.path.split('/');
        const userid = parts[2];
        const name = parts.slice(3).join('/');
        getMetaProductionObject(userid, name).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'UpdateMetaProduction', 
                formData: {
                    _id: result._id, 
                    userid: userid, 
                    name: name, 
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
    
        const obj = request.body;
        updateMetaProduction(obj.mp_id, obj.mp_owner, obj.mp_name, obj.mp_description).then((result: any) => {
        
            if (result.ok) {
                sendSuccess(response, {
                    body: request.body, 
                    user: (request.session as any).user, 
                    result: result
                 })
            }
        }
        )
    }
    ;
    
    private getDeleteMetaForm = 
    // loog myname + '.getDeleteMetaForm', request.path
    
    // loog myname + '.getDeleteMetaForm', parts[2], parts.slice(3).join('/')
    async (request: Request, response: Response) => {
    
        const parts = request.path.split('/');
        const userid = parts[2];
        const name = parts.slice(3).join('/');
        getMetaProductionObject(userid, name).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'DeleteMetaProduction', 
                formData: {
                    _id: result._id, 
                    userid: userid, 
                    name: name, 
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
    
        console.log(myname + '.deleteMeta', request.path);
        sendSuccess(response, {
            body: request.body, 
            user: (request.session as any).user
         })
    }
    ;
}
