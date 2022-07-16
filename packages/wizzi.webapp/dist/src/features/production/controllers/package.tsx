/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\package.tsx.ittf
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
import {createPackageProduction, updatePackageProduction, deletePackageProduction, getPackageProductionObject} from '../api/package';
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
function getPackiFiles(mainIttf: string) {

    return {
            [mainIttf]: {
                type: 'CODE', 
                contents: ''
             }
         };
}

export class PackageProductionController implements ControllerType {
    
    public path = '/package';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering PackageProductionController.initialize');
        this.router.get('/new', this.getNewPackageForm);
        this.router.post('/new', this.postPackage);
        this.router.get('/update/:userid/*', this.getUpdatePackageForm);
        this.router.post('/update', this.putPackage);
        this.router.get('/delete/:userid/*', this.getDeletePackageForm);
        this.router.post('/delete', this.deletePackage);
        this.router.get('/props', this.getPackageProperties);
    };
    
    private getNewPackageForm = 
    // loog myname, 'getNewPackageForm', JSON.stringify(request.query, null, 2)
    async (request: Request, response: Response) => 
    
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'CreatePackageProduction', 
            formData: {
                owner: request.query.owner, 
                name: request.query.name
             }
         }, {})
    
    ;
    
    private postPackage = 
    // loog myname + '.postNewPackage.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.postNewPackage.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => 
    
        getTemplatePackiFiles(request.body.meta_id, request.body.meta_propsValues ? JSON.parse(request.body.meta_propsValues) : {}).then((packiFiles: packiTypes.PackiFiles) => 
        
            createPackageProduction((request.session as any).user.username, request.body.pp_name, request.body.pp_description, JSON.stringify(packiFiles)).then(
            // loog myname + '.postNewPackage.createPackageProduction.result', JSON.stringify(result, null, 2)
            (result: CRUDResult) => {
            
                if (result.ok) {
                    response.redirect('/productions/packages');
                }
                else {
                    response.render('error.html.ittf', {
                        message: 'creating a new package production', 
                        error: result
                     })
                }
            }
            ).catch((err: any) => 
            
                response.render('error.html.ittf', {
                    message: 'creating a new package production', 
                    error: err
                 })
            )
        
        ).catch((err: any) => 
        
            response.render('error.html.ittf', {
                message: 'getting template packi files while creating a new package production', 
                error: err
             })
        )
    
    ;
    
    private getUpdatePackageForm = 
    // loog myname + '.getUpdatePackageForm', request.path
    
    // loog myname + '.getUpdatePackageForm', parts[2], parts.slice(3).join('/')
    async (request: Request, response: Response) => {
    
        const parts = request.path.split('/');
        const userid = parts[2];
        const name = parts.slice(3).join('/');
        getPackageProductionObject(userid, name).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'UpdatePackageProduction', 
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
    
    private putPackage = 
    // loog myname + '.putPackage.request.path', request.path
    
    // loog myname + '.putPackage.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.putPackage.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => {
    
        const obj = request.body;
        updatePackageProduction(obj.pp_id, obj.pp_owner, obj.pp_name, obj.pp_description).then((result: any) => {
        
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
    
    private getDeletePackageForm = 
    // loog myname + '.getDeletePackageForm', request.path
    
    // loog myname + '.getDeletePackageForm', parts[2], parts.slice(3).join('/')
    async (request: Request, response: Response) => {
    
        const parts = request.path.split('/');
        const userid = parts[2];
        const name = parts.slice(3).join('/');
        getPackageProductionObject(userid, name).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'DeletePackageProduction', 
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
    
    private deletePackage = 
    // loog myname + '.deletePackage.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.deletePackage.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => {
    
        console.log(myname + '.deletePackage', request.path);
        sendSuccess(response, {
            body: request.body, 
            user: (request.session as any).user
         })
    }
    ;
    
    private getPackageProperties = 
    // loog myname, 'getPackageProperties', JSON.stringify(request.query, null, 2)
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
