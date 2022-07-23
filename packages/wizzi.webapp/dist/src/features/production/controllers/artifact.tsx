/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\artifact.tsx.ittf
    utc time: Sat, 23 Jul 2022 04:18:24 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import ReactDOMServer from 'react-dom/server';
import PageFormDocument from '../../../pages/PageFormDocument';
import {CRUDResult} from '../../types';
import {createArtifactProduction, updateArtifactProduction, deleteArtifactProduction, getArtifactProductionObject, getArtifactProductionObjectById} from '../api/artifact';

const myname = 'features/production/controllers/artifact';

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

export class ArtifactProductionController implements ControllerType {
    
    public path = '/artifact';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ArtifactProductionController.initialize', __filename);
        this.router.get('/new', this.getNewArtifactForm);
        this.router.post('/new', this.postArtifact);
        this.router.get('/update/:id', this.getUpdateArtifactForm);
        this.router.post('/update', this.putArtifact);
        this.router.get('/delete/:id', this.getDeleteArtifactForm);
        this.router.post('/delete', this.deleteArtifact);
    };
    
    private getNewArtifactForm = 
    // loog og myname, 'getNewArtifactForm', JSON.stringify(request.query, null, 2)
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'CreateArtifactProduction', 
            formData: {
                owner: username, 
                name: request.query.name, 
                mainIttf: request.query.mainIttf, 
                schema: request.query.schema
             }
         }, {})
    }
    ;
    
    private postArtifact = 
    // loog og myname + '.postNewArtifact.request.body', JSON.stringify(request.body, null, 2)
    
    // loog og myname + '.postNewArtifact.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        createArtifactProduction((request.session as any).user.username, request.body.ap_name, request.body.ap_description, request.body.ap_main_ittf, request.body.ap_wizzi_schema, JSON.stringify(getPackiFiles(request.body.ap_main_ittf))).then(
        // loog og myname + '.postNewArtifact.createArtifactProduction.result', JSON.stringify(result, null, 2)
        (result: CRUDResult) => {
        
            if (result.ok) {
                response.redirect('/productions/artifacts');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'creating a new artifact production', 
                    error: result
                 })
            }
        }
        ).catch((err: any) => 
        
            response.render('error.html.ittf', {
                message: 'creating a new artifact production', 
                error: err
             })
        )
    }
    ;
    
    private getUpdateArtifactForm = 
    // loog myname + '.getUpdateArtifactForm', request.path
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        const id = request.params.id;
        console.log(myname + '.getUpdateArtifactForm.id', id, __filename);
        getArtifactProductionObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'UpdateArtifactProduction', 
                formData: {
                    _id: id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description, 
                    mainIttf: result.mainIttf, 
                    wizziSchema: result.wizziSchema
                 }
             }, {})
        )
    }
    ;
    
    private putArtifact = 
    // loog myname + '.putArtifact.request.path', request.path
    
    // loog myname + '.putArtifact.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.putArtifact.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        const obj = request.body;
        updateArtifactProduction(obj.ap_id, obj.ap_owner, obj.ap_name, obj.ap_description, obj.ap_mainIttf, obj.ap_wizziSchema).then((result: any) => {
        
            if (result.ok) {
                response.redirect('/productions/artifacts');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'updating a artifact production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
    
    private getDeleteArtifactForm = 
    // loog myname + '.getDeleteArtifactForm', request.path
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        const id = request.params.id;
        console.log(myname + '.getDeleteArtifactForm.id', id, __filename);
        getArtifactProductionObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'DeleteArtifactProduction', 
                formData: {
                    _id: result._id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description, 
                    mainIttf: result.mainIttf, 
                    wizziSchema: result.wizziSchema
                 }
             }, {})
        )
    }
    ;
    
    private deleteArtifact = 
    // loog myname + '.deleteArtifact.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.deleteArtifact.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log(myname + '.deleteArtifact.request.path', request.path, __filename);
        const obj = request.body;
        deleteArtifactProduction(obj.ap_id, obj.ap_owner, obj.ap_name, obj.ap_description, obj.ap_mainIttf, obj.ap_wizziSchema).then((result: any) => {
        
            if (result.ok) {
                response.redirect('/productions/artifacts');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'deleting a artifact production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
}
