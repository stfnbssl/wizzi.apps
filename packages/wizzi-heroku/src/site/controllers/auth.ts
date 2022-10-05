/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\site\controllers\auth.ts.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../utils/error';
import {statusCode} from '../../utils';
import * as queryString from 'query-string';
import {config} from '../../features/config';
const myname = 'site.controllers.auth';

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

export class AuthController implements ControllerType {
    
    public path = '/auth';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering AuthController.initialize');
        this.router.get("/login", makeHandlerAwareOfAsyncErrors(this.login))
        this.router.get("/login/github", makeHandlerAwareOfAsyncErrors(this.loginGithub))
        this.router.get("/login/google", makeHandlerAwareOfAsyncErrors(this.loginGoogle))
        this.router.get("/logout", makeHandlerAwareOfAsyncErrors(this.logout))
    };
    
    private login = async (request: Request, response: Response) => 
    
        response.render('auth/login.html.ittf', {
            title: 'Sign in to Wizzi · Wizzi'
         })
    
    ;
    
    private loginGithub = async (request: Request, response: Response) => 
    
        response.redirect(`https://github.com/login/oauth/authorize?client_id=${config.githubClientId}`);
    
    ;
    
    private loginGoogle = async (request: Request, response: Response) => {
    
        const queryParams = queryString.stringify({
            client_id: config.googleClientId, 
            scope: 'openid email profile', 
            redirect_uri: 'https://www.wizzihub.com/api/v1/authenticate/google/callback', 
            nonce: 'gartps', 
            response_type: 'code'
         });
        response.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${queryParams}`);
    }
    ;
    
    private logout = async (request: Request, response: Response) => {
    
        (request as any).session.user = null;
        (request as any).session.github_access_token = null;
        (request as any).session.google_access_token = null;
        response.redirect('/');
    }
    ;
}
