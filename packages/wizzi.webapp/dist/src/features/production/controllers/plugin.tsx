/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\plugin.tsx.ittf
    utc time: Fri, 15 Jul 2022 15:38:04 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import ReactDOMServer from 'react-dom/server';
import PageFormDocument from '../../../pages/PageFormDocument';
import {CRUDResult} from '../../types';
import {getTemplatePackiFiles} from '../api/meta';
import {createPluginProduction, updatePluginProduction, deletePluginProduction, getPluginProductionObject} from '../api/plugin';
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
function getPackiFiles(mainIttf: string) {

    return {
            [mainIttf]: {
                type: 'CODE', 
                contents: ''
             }
         };
}

export class PluginProductionController implements ControllerType {
    
    public path = '/plugin';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering PluginProductionController.initialize');
        this.router.get('/new', this.getNewPluginForm);
        this.router.post('/new', this.postPlugin);
        this.router.get('/update/:userid/*', this.getUpdatePluginForm);
        this.router.post('/update', this.putPlugin);
        this.router.get('/delete/:userid/*', this.getDeletePluginForm);
        this.router.post('/delete', this.deletePlugin);
        this.router.get('/props', this.getPluginProperties);
    };
    
    private getNewPluginForm = 
    // loog myname, 'getNewPluginForm', JSON.stringify(request.query, null, 2)
    async (request: Request, response: Response) => 
    
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'CreatePluginProduction', 
            formData: {
                owner: request.query.owner, 
                name: request.query.name
             }
         }, {})
    
    ;
    
    private postPlugin = 
    // loog myname + '.postNewPlugin.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.postNewPlugin.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => 
    
        getTemplatePackiFiles(request.body.meta_id, request.body.meta_propsValues ? JSON.parse(request.body.meta_propsValues) : {}).then((packiFiles: packiTypes.PackiFiles) => 
        
            createPluginProduction((request.session as any).user.username, request.body.pp_name, request.body.pp_description, JSON.stringify(packiFiles)).then(
            // loog myname + '.postNewPlugin.createPluginProduction.result', JSON.stringify(result, null, 2)
            (result: CRUDResult) => {
            
                if (result.ok) {
                    response.redirect('/productions/plugins');
                }
                else {
                    response.render('error.html.ittf', {
                        message: 'creating a new plugin production', 
                        error: result
                     })
                }
            }
            ).catch((err: any) => 
            
                response.render('error.html.ittf', {
                    message: 'creating a new plugin production', 
                    error: err
                 })
            )
        
        ).catch((err: any) => 
        
            response.render('error.html.ittf', {
                message: 'getting template packi files while creating a new plugin production', 
                error: err
             })
        )
    
    ;
    
    private getUpdatePluginForm = 
    // loog myname + '.getUpdatePluginForm', request.path
    
    // loog myname + '.getUpdatePluginForm', parts[2], parts.slice(3).join('/')
    async (request: Request, response: Response) => {
    
        const parts = request.path.split('/');
        const userid = parts[2];
        const name = parts.slice(3).join('/');
        getPluginProductionObject(userid, name).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'UpdatePluginProduction', 
                formData: {
                    userid: userid, 
                    name: name, 
                    description: result.description, 
                    _id: result._id
                 }
             }, {})
        )
    }
    ;
    
    private putPlugin = 
    // loog myname + '.putPlugin.request.path', request.path
    
    // loog myname + '.putPlugin.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.putPlugin.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => {
    
        const obj = request.body;
        updatePluginProduction(obj.ap_id, obj.ap_owner, obj.ap_name, obj.ap_description).then((result: any) => {
        
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
    
    private getDeletePluginForm = 
    // loog myname + '.getDeletePluginForm', request.path
    
    // loog myname + '.getDeletePluginForm', parts[2], parts.slice(3).join('/')
    async (request: Request, response: Response) => {
    
        const parts = request.path.split('/');
        const userid = parts[2];
        const name = parts.slice(3).join('/');
        getPluginProductionObject(userid, name).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'DeletePluginProduction', 
                formData: {
                    userid: userid, 
                    name: name, 
                    description: result.description, 
                    _id: result._id
                 }
             }, {})
        )
    }
    ;
    
    private deletePlugin = 
    // loog myname + '.deletePlugin.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.deletePlugin.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => {
    
        console.log(myname + '.deletePlugin', request.path);
        sendSuccess(response, {
            body: request.body, 
            user: (request.session as any).user
         })
    }
    ;
    
    private getPluginProperties = 
    // loog myname, 'getPluginProperties', JSON.stringify(request.query, null, 2)
    async (request: Request, response: Response) => 
    
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
