/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\site\controllers\account.ts.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {webSecured} from '../../middlewares/index';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../utils/error';
import {statusCode} from '../../utils';
import * as queryString from 'query-string';
import axios from 'axios';
import {userApi} from '../../features/account';
const myname = 'site.controllers.account';

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

export class AccountController implements ControllerType {
    
    public path = '/account';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering AccountController.initialize');
        this.router.get("/profile", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.profile))
        this.router.get("/profile/github", makeHandlerAwareOfAsyncErrors(this.profileGithub))
        this.router.get("/profile/google", makeHandlerAwareOfAsyncErrors(this.profileGoogle))
    };
    
    private profile = async (request: Request, response: Response) => 
    
        response.render('account/profile.html.ittf', {
            title: (request as any).session.user ? (request as any).session.user.name + ' profile · Wizzi' : 'User unknown'
         })
    
    ;
    
    private profileGithub = async (request: Request, response: Response) => 
    
        axios({
            method: 'get', 
            url: `https://api.github.com/user`, 
            headers: {
                Authorization: 'token ' + (request as any).session.github_access_token
             }
         }).then((githubResult: any) => {
        
            if (githubResult.data.email == null) {
                response.render('account/error-github-email-private.html.ittf', {
                    profile: githubResult.data, 
                    message: 'trying to create your wizzi account'
                 })
            }
            else {
                userApi.getUserByEmail(githubResult.data.email).then((wizziresult: any) => {
                
                    
                    // _ response.send('<pre><code>' +  JSON.stringify({ userData: user /*result.data*/ }, null, 2) + '</code></pre>')
                    if (wizziresult.found) {
                        (request as any).session.user = wizziresult.user;
                        response.redirect('/account/profile');
                    }
                    else {
                        const queryParams = queryString.stringify({
                            name: githubResult.data.name, 
                            email: githubResult.data.email, 
                            avatar_url: githubResult.data.avatar_url, 
                            openid_provider: 'github'
                         });
                        response.redirect(`/user/new?${queryParams}`);
                    }
                }
                ).catch((err: any) => {
                
                    console.log("[31m%s[0m", myname, 'profileGithub', 'getUserByEmail', 'error', err);
                    response.render('error.html.ittf', {
                        error: err, 
                        message: 'Error getting user data by email from mongodb'
                     })
                }
                )
            }
        }
        )
    
    ;
    
    private profileGoogle = async (request: Request, response: Response) => 
    
        axios({
            method: 'get', 
            url: `https://www.googleapis.com/oauth2/v2/userinfo`, 
            headers: {
                Authorization: 'Bearer ' + (request as any).session.google_access_token
             }
         }).then((googleResult: any) => {
        
            if (googleResult.data.email == null) {
                response.render('account/error-google-email-private.html.ittf', {
                    profile: googleResult.data, 
                    message: 'trying to create your wizzi account'
                 })
            }
            else {
                userApi.getUserByEmail(googleResult.data.email).then((wizziresult: any) => {
                
                    
                    // _ response.send('<pre><code>' +  JSON.stringify({ userData: user /*result.data*/ }, null, 2) + '</code></pre>')
                    if (wizziresult.found) {
                        (request as any).session.user = wizziresult.user;
                        response.redirect('/account/profile');
                    }
                    else {
                        const queryParams = queryString.stringify({
                            name: googleResult.data.name, 
                            email: googleResult.data.email, 
                            avatar_url: googleResult.data.picture, 
                            openid_provider: 'google'
                         });
                        response.redirect(`/user/new?${queryParams}`);
                    }
                }
                ).catch((err: any) => 
                
                    response.render('error.html.ittf', {
                        error: err, 
                        message: 'getting user data by email'
                     })
                )
            }
        }
        )
    
    ;
}
