/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\controllers\tfolder.tsx.ittf
    utc time: Tue, 19 Jul 2022 19:18:05 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import ReactDOMServer from 'react-dom/server';
import PageFormDocument from '../../../pages/PageFormDocument';
import {CRUDResult} from '../../types';
import {createTFolder, updateTFolder, deleteTFolder, getTFolderObject, getTFolderObjectById} from '../api/tfolder';

const myname = 'features/production/controllers/tfolder';

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

export class TFolderController implements ControllerType {
    
    public path = '/tfolder';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering TFolderController.initialize');
        this.router.get('/new', this.getNewTFolderForm);
        this.router.post('/new', this.postTFolder);
        this.router.get('/update/:id', this.getUpdateTFolderForm);
        this.router.post('/update', this.putTFolder);
        this.router.get('/delete/:id', this.getDeleteTFolderForm);
        this.router.post('/delete', this.deleteTFolder);
    };
    
    private getNewTFolderForm = 
    // loog myname, 'getNewTFolderForm', JSON.stringify(request.query, null, 2)
    async (request: Request, response: Response) => 
    
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'CreateTFolder', 
            formData: {
                owner: request.query.owner, 
                name: request.query.name
             }
         }, {})
    
    ;
    
    private postTFolder = 
    // loog myname + '.postNewTFolder.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.postNewTFolder.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => 
    
        createTFolder((request.session as any).user.username, request.body.tf_name, request.body.tf_description, JSON.stringify(getPackiFiles('readme.md.ittf'))).then(
        // loog myname + '.postNewTFolder.createTFolder.result', JSON.stringify(result, null, 2)
        (result: CRUDResult) => {
        
            if (result.ok) {
                response.redirect('/productions/tfolders');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'creating a new tfolder', 
                    error: result
                 })
            }
        }
        ).catch((err: any) => 
        
            response.render('error.html.ittf', {
                message: 'creating a new tfolder', 
                error: err
             })
        )
    
    ;
    
    private getUpdateTFolderForm = 
    // loog myname + '.getUpdateTFolderForm', request.path
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        console.log(myname + '.getUpdateTFolderForm.id', id);
        getTFolderObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'UpdateTFolder', 
                formData: {
                    _id: id, 
                    userid: result.owner, 
                    name: result.name, 
                    description: result.description
                 }
             }, {})
        )
    }
    ;
    
    private putTFolder = 
    // loog myname + '.putTFolder.request.path', request.path
    
    // loog myname + '.putTFolder.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.putTFolder.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => {
    
        const obj = request.body;
        updateTFolder(obj.tf_id, obj.tf_owner, obj.tf_name, obj.tf_description).then((result: any) => {
        
            if (result.ok) {
                response.redirect('/productions/tfolders');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'updating a tFolder production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
    
    private getDeleteTFolderForm = 
    // loog myname + '.getDeleteTFolderForm', request.path
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        console.log(myname + '.getDeleteTFolderForm.id', id);
        getTFolderObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'DeleteTFolder', 
                formData: {
                    _id: result._id, 
                    userid: result.owner, 
                    name: result.name, 
                    description: result.description
                 }
             }, {})
        )
    }
    ;
    
    private deleteTFolder = 
    // loog myname + '.deleteTFolder.request.body', JSON.stringify(request.body, null, 2)
    
    // loog myname + '.deleteTFolder.request.session.user', JSON.stringify((request.session as any).user, null, 2)
    async (request: Request, response: Response) => {
    
        console.log(myname + '.deleteTFolder.request.path', request.path);
        const obj = request.body;
        deleteTFolder(obj.tf_id, obj.tf_owner, obj.tf_name, obj.tf_description).then((result: any) => {
        
            if (result.ok) {
                return sendSuccess(response, {
                        body: request.body, 
                        user: (request.session as any).user, 
                        result: result
                     });
            }
            if (result.ok) {
                response.redirect('/productions/tfolders');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'deleting a tFolder production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
}
