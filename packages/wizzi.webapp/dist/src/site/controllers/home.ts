/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\site\controllers\home.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';
import * as queryString from 'query-string';
import axios from 'axios';
import {userApi} from '../../features/account';
import {artifactApi, packageApi, tFolderApi} from '../../features/production';
import {config} from '../../features/config';
const myname = 'site.controllers.home';

export class HomeController implements ControllerType {
    
    public path = '';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering HomeController.initialize', __filename);
        this.router.get('/', this.home);
        this.router.get('/login', this.login);
        this.router.get('/login/github', this.loginGithub);
        this.router.get('/api/v1/authenticate/github/callback', this.githubCallback);
        this.router.get('/profile/github', this.profileGithub);
        this.router.get('/login/google', this.loginGoogle);
        this.router.get('/api/v1/authenticate/google/callback', this.googleCallback);
        this.router.get('/profile/google', this.profileGoogle);
        this.router.get('/profile', this.profile);
        this.router.get('/logout', this.logout);
        this.router.get('/privacy', this.sendPrivacy);
        this.router.get('/terms-of-services', this.sendTermsOfServices);
    };
    
    private home = async (request: Request, response: Response) => 
    
        response.render('home/index.html.ittf', {
            title: 'Wizzi: one machinery many production · Wizzi'
         })
    
    ;
    
    private login = async (request: Request, response: Response) => 
    
        response.render('home/login.html.ittf', {
            title: 'Sign in to Wizzi · Wizzi'
         })
    
    ;
    
    private loginGithub = async (request: Request, response: Response) => 
    
        response.redirect(`https://github.com/login/oauth/authorize?client_id=${config.githubClientId}`);
    
    ;
    
    private githubCallback = async (request: Request, response: Response) => {
    
        const body = {
            client_id: config.githubClientId, 
            client_secret: config.githubClientSecret, 
            code: request.query.code
         };
        const options = { headers: { accept: 'application/json' } };
        axios.post(`https://github.com/login/oauth/access_token`, body, options).then((result: any) => {
        
            console.log(myname, 'site.controllers.home.githubCallback', 'result', JSON.stringify(result.data,null,2), __filename);
            return result.data['access_token'];
        }
        ).then((_token: string) => {
        
            console.log(myname, 'site.controllers.home.githubCallback', '_token', _token, __filename);
            (request.session as any).github_access_token = _token;
            response.redirect('/profile/github');
        }
        ).catch((err: any) => {
        
            console.log(myname, 'githubCallback', 'error', err, __filename);
            response.status(500).json({ message: err.message });
        }
        )
    }
    ;
    
    private profileGithub = 
    // loog myname, 'profileGithub'
    async (request: Request, response: Response) => 
    
        axios({
            method: 'get', 
            url: `https://api.github.com/user`, 
            headers: {
                Authorization: 'token ' + (request.session as any).github_access_token
             }
         }).then((githubResult: any) => {
        
            console.log(myname, 'profileGithub', 'githubResult.data', githubResult.data, __filename);
            if (githubResult.data.email == null) {
                response.render('account/error-github-email-private.html.ittf', {
                    profile: githubResult.data, 
                    message: 'trying to create your wizzi account'
                 })
            }
            else {
                userApi.getUserByEmail(githubResult.data.email).then((wizziresult: any) => {
                
                    console.log(myname, 'profileGithub', 'getUserByEmail', 'wizziresult', wizziresult, __filename);
                    
                    // _ response.send('<pre><code>' +  JSON.stringify({ userData: user /*result.data*/ }, null, 2) + '</code></pre>')
                    if (wizziresult.found) {
                        (request.session as any).user = wizziresult.user;
                        response.redirect('/profile');
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
                ).catch(
                // loog myname, 'profileGithub', 'getUserByEmail', 'error', err
                (err: any) => 
                
                    response.render('error.html.ittf', {
                        error: err, 
                        message: 'getting user data by email'
                     })
                )
            }
        }
        )
    
    ;
    
    private loginGoogle = 
    // loog og myname, 'loginGoogle'
    async (request: Request, response: Response) => {
    
        const queryParams = queryString.stringify({
            client_id: config.googleClientId, 
            scope: 'openid email profile', 
            redirect_uri: 'http://localhost:5000/api/v1/authenticate/google/callback', 
            nonce: 'gartps', 
            response_type: 'code'
         });
        response.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${queryParams}`);
    }
    ;
    
    private googleCallback = 
    // loog og myname, 'googleCallback'
    async (request: Request, response: Response) => {
    
        const body = {
            client_id: config.googleClientId, 
            client_secret: config.googleClientSecret, 
            code: request.query.code, 
            redirect_uri: 'http://localhost:5000/api/v1/authenticate/google/callback', 
            grant_type: 'authorization_code'
         };
        const options = { headers: { accept: 'application/json' } };
        axios.post(`https://oauth2.googleapis.com/token`, body, options).then(
        // loog og myname, 'googleCallback:', JSON.stringify(result.data,null,2)
        (result: any) => {
        
            return result.data['access_token'];
        }
        ).then(
        // loog og myname, '_token:', _token
        (_token: string) => {
        
            (request.session as any).google_access_token = _token;
            response.redirect('/profile/google');
        }
        ).catch((err: any) => 
        
            response.status(500).json({ message: err.message })
        )
    }
    ;
    
    private profileGoogle = 
    // loog og myname, 'profileGoogle'
    async (request: Request, response: Response) => 
    
        axios({
            method: 'get', 
            url: `https://www.googleapis.com/oauth2/v2/userinfo`, 
            headers: {
                Authorization: 'Bearer ' + (request.session as any).google_access_token
             }
         }).then(
        // loog og myname, 'profileGoogle', 'googleResult.data', googleResult.data
        (googleResult: any) => {
        
            if (googleResult.data.email == null) {
                response.render('account/error-google-email-private.html.ittf', {
                    profile: googleResult.data, 
                    message: 'trying to create your wizzi account'
                 })
            }
            else {
                userApi.getUserByEmail(googleResult.data.email).then(
                // loog og myname, 'profileGoogle', 'getUserByEmail', 'wizziresult', wizziresult
                (wizziresult: any) => {
                
                    
                    // _ response.send('<pre><code>' +  JSON.stringify({ userData: user /*result.data*/ }, null, 2) + '</code></pre>')
                    if (wizziresult.found) {
                        (request.session as any).user = wizziresult.user;
                        response.redirect('/profile');
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
                ).catch(
                // loog og myname, 'profileGoogle', 'getUserByEmail', 'error', err
                (err: any) => 
                
                    response.render('error.html.ittf', {
                        error: err, 
                        message: 'getting user data by email'
                     })
                )
            }
        }
        )
    
    ;
    
    private profile = async (request: Request, response: Response) => {
    
        const options = {
            limit: 10, 
            sort: {
                updated_at: -1
             }
         };
        const artifactList = artifactApi.getListArtifactProduction(options);
        const packageList = packageApi.getListPackageProduction(options);
        const tfolderList = tFolderApi.getListTFolder(options);
        Promise.all([
            artifactList, 
            packageList, 
            tfolderList
        ]).then(
        // loog 'artifacts', artifacts
        
        // loog 'packages', packages
        
        // loog 'tfolders', tfolders
        (values: any) => {
        
            const [artifacts, packages, tfolders] = values;
            response.render('home/profile.html.ittf', {
                title: (request.session as any).user ? (request.session as any).user.name + ' profile · Wizzi' : 'User unknown', 
                artifacts: artifacts.item, 
                packages: packages.item, 
                tfolders: tfolders.item
             })
        }
        )
    }
    ;
    
    private logout = async (request: Request, response: Response) => {
    
        (request.session as any).user = null;
        (request.session as any).github_access_token = null;
        (request.session as any).google_access_token = null;
        response.redirect('/');
    }
    ;
    
    private sendPrivacy = async (request: Request, response: Response) => 
    
        response.render('home/privacy_statement.html.ittf', {
            title: 'Privacy statement · Wizzi'
         })
    
    ;
    
    private sendTermsOfServices = async (request: Request, response: Response) => 
    
        response.render('home/terms_of_services.html.ittf', {
            title: 'Terms of services · Wizzi'
         })
    
    ;
}
