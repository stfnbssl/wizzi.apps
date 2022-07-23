/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\account\controllers\user.tsx.ittf
    utc time: Sat, 23 Jul 2022 04:18:24 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import ReactDOMServer from 'react-dom/server';
import PageFormDocument from '../../../pages/PageFormDocument';
import {CreateUserResult} from '../types';
import {validateUsername, createUserFromSignup} from '../api/user';

const myname = 'features/account/controllers/user';

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
        console.log('Entering UserController.initialize', __filename);
        this.router.get('/new', this.getNewUserForm);
        this.router.post('/new', this.postNewUser);
        this.router.get('/update', this.getUpdateUserForm);
        this.router.post('/update', this.postUpdateUser);
        this.router.get('/delete', this.getDeleteUserForm);
        this.router.delete('/delete', this.deleteUser);
    };
    
    private getNewUserForm = 
    // loog myname, 'getNewUserForm', JSON.stringify(request.query, null, 2)
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        renderPackiPageForm(request, response, {
            type: 'success', 
            formName: 'CreateUser', 
            formData: {
                name: request.query.name, 
                email: request.query.email, 
                avatar_url: request.query.avatar_url, 
                openid_provider: request.query.openid_provider
             }
         }, {})
    }
    ;
    
    private postNewUser = 
    // loog myname + '.postNewUser.request.body', JSON.stringify(request.body, null, 2)
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        createUserFromSignup({
            name: request.body.u_name, 
            email: request.body.u_email, 
            avatarUrl: request.body.u_avatar_url, 
            openidProvider: request.body.u_openid_provider, 
            wizziUserName: request.body.u_username
         }).then(
        // loog myname + '.postNewUser.createUserFromSignup.result', JSON.stringify(result, null, 2)
        (result: CreateUserResult) => {
        
            if (result.created) {
                (request.session as any).user = result.user;
                response.redirect('/profile');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'creating a new wizzi user', 
                    error: result
                 })
            }
        }
        ).catch((err: any) => 
        
            response.render('error.html.ittf', {
                message: 'creating a new wizzi user', 
                error: err
             })
        )
    }
    ;
    
    private getUpdateUserForm = 
    // # loog myname + '.getUpdateUserForm',
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        renderPackiPageForm(request, response, {
            type: 'success', 
            formName: 'UpdateUser', 
            formData: {
                website: 'http://dummy.com'
             }
         }, {})
    }
    ;
    
    private postUpdateUser = 
    // loog myname + '.postUpdateUser',
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
    }
    ;
    
    private getDeleteUserForm = 
    // loog myname + '.getDeleteUserForm',
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
    }
    ;
    
    private deleteUser = 
    // loog myname + '.deleteUser',
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
    }
    ;
}
