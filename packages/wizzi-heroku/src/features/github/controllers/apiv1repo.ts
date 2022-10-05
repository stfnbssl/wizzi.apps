/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\github\controllers\apiv1repo.ts.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {apiSecured} from '../../../middlewares/index';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {config} from '../../config';
import {getRepositories, getRepository, getPackiTemplateRepositories, createRepository, getRevisions, getBranches, createBranch, cloneBranch, updateBranch, getCommits, getContents} from '../api/repo';

const myname = 'features/github/controllers/apiv1repo';

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

export class ApiV1RepoController implements ControllerType {
    
    public path = '/api/v1/github/repo';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1RepoController.initialize');
        this.router.get("/:owner", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.getRepoList))
        this.router.get("/:owner/:name", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.getRepo))
        this.router.get("/clone/:owner/:name/:branch", makeHandlerAwareOfAsyncErrors(apiSecured), makeHandlerAwareOfAsyncErrors(this.cloneBranch))
    };
    
    private getRepoList = async (request: Request, response: Response) => 
    
        getRepositories(config.githubAccessToken).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getRepoList.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private getRepo = async (request: Request, response: Response) => 
    
        getRepository(request.params.owner, request.params.name, config.githubAccessToken).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'getRepo.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private cloneBranch = async (request: Request, response: Response) => 
    
        cloneBranch({
            owner: request.params.owner, 
            name: request.params.name, 
            token: config.githubAccessToken
         }, request.params.branch || 'main').then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'cloneBranch.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
