/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\account\controllers\user.tsx.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
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

export class UserController implements ControllerType {
    
    public path = '/user';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering UserController.initialize');
        this.router.get('/new', this.getNewUserForm);
        this.router.post('/new', this.postNewUser);
        this.router.get('/update', this.getUpdateUserForm);
        this.router.post('/update', this.postUpdateUser);
        this.router.get('/delete', this.getDeleteUserForm);
        this.router.delete('/delete', this.deleteUser);
    };
    
    private getNewUserForm = async (request: Request, response: Response) => 
    
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
    
    ;
    
    private postNewUser = async (request: Request, response: Response) => 
    
        createUserFromSignup({
            name: request.body.u_name, 
            email: request.body.u_email, 
            avatarUrl: request.body.u_avatar_url, 
            openidProvider: request.body.u_openid_provider, 
            wizziUserName: request.body.u_username
         }).then((result: CreateUserResult) => {
        
            if (result.created) {
                (request as any).session.user = result.user;
                response.redirect('/account/profile');
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
    
    ;
    
    private getUpdateUserForm = async (request: Request, response: Response) => 
    
        renderPackiPageForm(request, response, {
            type: 'success', 
            formName: 'UpdateUser', 
            formData: {
                website: 'http://dummy.com'
             }
         }, {})
    
    ;
    
    private postUpdateUser = async (request: Request, response: Response) => {
    
    }
    ;
    
    private getDeleteUserForm = async (request: Request, response: Response) => {
    
    }
    ;
    
    private deleteUser = async (request: Request, response: Response) => {
    
    }
    ;
}
