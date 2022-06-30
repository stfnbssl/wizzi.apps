/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\packi\controllers\user.tsx.ittf
    utc time: Fri, 02 Jul 2021 09:09:26 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import ReactDOMServer from 'react-dom/server';
import wizziProto from 'wizzi.proto';
import PageFormDocument from '../pages/PageFormDocument';

const myname = 'features/packi/controller/user';

function renderPackiPageForm(req: Request, res: Response, data: object, queryParams: object) {

    const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
    <PageFormDocument
     data={data} queryParams={queryParams} />
    ));
    res.set('Content-Type', 'text/html');
    res.set('Content-Length', index.length.toString());
    res.send(index);
}

export class UserController implements ControllerType {
    
    public path = '/user';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering UserController.initialize');
        wizziProto.start('stfnbssl', {}, () => {
        
        }
        )
        this.router.get('/new', this.getNewUserForm);
        this.router.post('/new', this.postNewUser);
        this.router.get('/update', this.getUpdateUserForm);
        this.router.post('/update', this.postUpdateUser);
        this.router.get('/delete', this.getDeleteUserForm);
        this.router.delete('/delete', this.deleteUser);
    };
    
    private getNewUserForm = 
    // log myname + '.getNewUserForm',
    async (request: Request, response: Response) => 
    
        renderPackiPageForm(request, response, {
            type: 'success', 
            formName: 'CreateUser', 
            formData: {
                name: request.query.name, 
                email: request.query.email, 
                avatar_url: request.query.avatar_url
             }
         }, {})
    
    ;
    
    private postNewUser = async (request: Request, response: Response) => {
    
        console.log(myname + '.postNewUser.request.body', JSON.stringify(request.body, null, 2));
        response.json(JSON.stringify(request.body, null, 2));
    }
    ;
    
    private getUpdateUserForm = 
    // log myname + '.getUpdateUserForm',
    async (request: Request, response: Response) => 
    
        renderPackiPageForm(request, response, {
            type: 'success', 
            formName: 'UpdateUser', 
            formData: {
                website: 'http://dummy.com'
             }
         }, {})
    
    ;
    
    private postUpdateUser = 
    // log myname + '.postUpdateUser',
    async (request: Request, response: Response) => {
    
    }
    ;
    
    private getDeleteUserForm = 
    // log myname + '.getDeleteUserForm',
    async (request: Request, response: Response) => {
    
    }
    ;
    
    private deleteUser = 
    // log myname + '.deleteUser',
    async (request: Request, response: Response) => {
    
    }
    ;
}
