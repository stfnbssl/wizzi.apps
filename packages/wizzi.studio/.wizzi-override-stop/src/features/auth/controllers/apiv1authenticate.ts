/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\auth\controllers\apiv1authenticate.ts.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {config} from '../../config';
import axios from 'axios';
const myname = 'features.auth.controllers.apiv1authenticate';

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

export class ApiV1AuthenticateController implements ControllerType {
    
    public path = '/api/v1/authenticate';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1AuthenticateController.initialize');
        this.router.get('/github/callback', this.githubCallback);
        this.router.get('/google/callback', this.googleCallback);
    };
    
    private githubCallback = async (request: Request, response: Response) => {
    
        const body = {
            client_id: config.githubClientId, 
            client_secret: config.githubClientSecret, 
            code: request.query.code
         };
        const options = { headers: { accept: 'application/json' } };
        axios.post(`https://github.com/login/oauth/access_token`, body, options).then((result: any) => {
        
            return result.data['access_token'];
        }
        ).then((_token: string) => {
        
            (request as any).session.github_access_token = _token;
            (request as any).session.save(function(err) {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'githubCallback', 'error saving session', err);
                    return response.status(500).json({ message: err.message });
                }
                response.redirect('/account/profile/github');
            })
        }
        ).catch((err: any) => {
        
            console.log("[31m%s[0m", myname, 'githubCallback', 'error', err);
            response.status(500).json({ message: err.message });
        }
        )
    }
    ;
    
    private googleCallback = async (request: Request, response: Response) => {
    
        const body = {
            client_id: config.googleClientId, 
            client_secret: config.googleClientSecret, 
            code: request.query.code, 
            redirect_uri: 'http://localhost:5000/api/v1/authenticate/google/callback', 
            grant_type: 'authorization_code'
         };
        const options = { headers: { accept: 'application/json' } };
        axios.post(`https://oauth2.googleapis.com/token`, body, options).then((result: any) => {
        
            return result.data['access_token'];
        }
        ).then((_token: string) => {
        
            (request as any).session.google_access_token = _token;
            (request as any).session.save(function(err) {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'githubCallback', 'error saving session', err);
                    return response.status(500).json({ message: err.message });
                    console.log(myname, 'githubCallback', 'session saved before redirect to /account/profile/google', __filename);
                }
                response.redirect('/account/profile/google');
            })
        }
        ).catch((err: any) => 
        
            response.status(500).json({ message: err.message })
        )
    }
    ;
}
