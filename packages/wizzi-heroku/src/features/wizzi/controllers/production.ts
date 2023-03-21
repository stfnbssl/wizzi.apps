/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\wizzi\controllers\production.ts.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import fs from 'fs';
import path from 'path';
import {ArtifactRequest, MetaContext} from '../types';
import * as WizziFactory from '../factory';
import * as wizziProds from '../productions';
import {packiTypes} from '../../packi';
import {config} from '../../config';
import {resolveContexts} from '../api/context';
import {file} from 'wizzi';
const myname = 'features/wizzi/controller/productions';

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

export class ProductionController implements ControllerType {
    
    public path = '/api/v1/wizzi/production';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ProductionController.initialize');
        this.router.post("/artifact", makeHandlerAwareOfAsyncErrors(this.artifact))
        this.router.post("/mtree", makeHandlerAwareOfAsyncErrors(this.mTree))
        this.router.post("/mtreescript", makeHandlerAwareOfAsyncErrors(this.mTreeBuildupScript))
        this.router.post("/mtreescan", makeHandlerAwareOfAsyncErrors(this.mTreeScan))
        this.router.post("/wrapittf", makeHandlerAwareOfAsyncErrors(this.wrapIttfText))
    };
    
    private artifact = async (request: Request, response: Response) => {
    
        const artifactRequest: ArtifactRequest = request.body;
        resolveContexts(artifactRequest.contextItems).then((context: any) => {
        
            if (artifactRequest.ittfDocument.source == 'fs') {
                wizziProds.generateArtifactFs(path.join(config.ittfPath, artifactRequest.ittfDocument.path as string), context).then(generatedArtifact => 
                
                    sendSuccess(response, generatedArtifact)
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.artifact.wizziProds.generateArtifactFs.error', err);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (artifactRequest.ittfDocument.source == 'packi') {
                wizziProds.generateArtifact(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.packiFiles as packiTypes.PackiFiles, context).then((generatedArtifact: any) => 
                
                    sendSuccess(response, generatedArtifact)
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.artifact.wizziProds.generateArtifact.error', err);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (artifactRequest.ittfDocument.source == 'db') {
                wizziProds.generateArtifactDb(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.path as string, context).then((generatedArtifact: any) => 
                
                    sendSuccess(response, generatedArtifact)
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.artifact.wizziProds.generateArtifact.error', err);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.artifact.resolveContexts.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private mTree = async (request: Request, response: Response) => {
    
        const artifactRequest: ArtifactRequest = request.body;
        resolveContexts(artifactRequest.contextItems).then((context: any) => {
        
            if (artifactRequest.ittfDocument.source == 'fs') {
                wizziProds.mTreeFs(path.join(config.ittfPath, artifactRequest.ittfDocument.path as string), context).then(mTree => 
                
                    sendSuccess(response, {
                        mTree: mTree.mTreeIttf
                     })
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.mTree.wizziProds.mTreeFs.error', err);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (artifactRequest.ittfDocument.source == 'packi') {
                wizziProds.mTree(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.packiFiles as packiTypes.PackiFiles, context).then((mTree: any) => 
                
                    sendSuccess(response, {
                        mTree: mTree.mTreeIttf
                     })
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.mTree.wizziProds.mTree.error', err);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (artifactRequest.ittfDocument.source == 'db') {
                wizziProds.mTreeDb(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.path as string, context).then((mTree: any) => 
                
                    sendSuccess(response, {
                        mTree: mTree.mTreeIttf
                     })
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.mTree.wizziProds.mTreeDb.error', err);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", '} features/wizzi/controller/productions.handler.mTree.resolveContexts.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private mTreeBuildupScript = async (request: Request, response: Response) => {
    
        const artifactRequest: ArtifactRequest = request.body;
        resolveContexts(artifactRequest.contextItems).then((context: any) => {
        
            if (artifactRequest.ittfDocument.source == 'fs') {
                wizziProds.mTreeBuildupScriptFs(path.join(config.ittfPath, artifactRequest.ittfDocument.path as string), context).then(mTreeBuildupScript => 
                
                    sendSuccess(response, mTreeBuildupScript)
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.mTreeBuildupScript.wizziProds.mTreeBuildupScriptFs.error', err);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (artifactRequest.ittfDocument.source == 'packi') {
                wizziProds.mTreeBuildupScript(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.packiFiles as packiTypes.PackiFiles, context).then((mTreeBuildupScript: any) => 
                
                    sendSuccess(response, mTreeBuildupScript)
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.mTreeBuildupScript.wizziProds.mTreeBuildupScript.error', err);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (artifactRequest.ittfDocument.source == 'db') {
                wizziProds.mTreeBuildupScriptDb(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.path as string, context).then((mTreeBuildupScript: any) => 
                
                    sendSuccess(response, mTreeBuildupScript)
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.mTreeBuildupScript.wizziProds.mTreeBuildupScriptDb.error', err);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.mTreeBuildupScript.resolveContexts.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private mTreeScan = async (request: Request, response: Response) => {
    
        const artifactRequest: ArtifactRequest = request.body;
        var rootFolder = artifactRequest.ittfDocument.rootFolder || '';
        if (artifactRequest.ittfDocument.source == 'fs') {
            wizziProds.scanIttfDocumentFs(path.join(config.ittfPath, artifactRequest.ittfDocument.path as string), rootFolder).then(mTreeScan => 
            
                sendSuccess(response, {
                    mTreeScan: mTreeScan
                 })
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.mTreeScan.wizziProds.mTreeScanFs.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        }
        else if (artifactRequest.ittfDocument.source == 'packi') {
            var rootFolder = artifactRequest.ittfDocument.rootFolder || '';
            wizziProds.scanIttfDocument(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.packiFiles as packiTypes.PackiFiles, rootFolder).then((mTreeScan: any) => 
            
                sendSuccess(response, {
                    mTreeScan: mTreeScan
                 })
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.mTreeScan.wizziProds.mTreeScan.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        }
        else if (artifactRequest.ittfDocument.source == 'db') {
            var rootFolder = artifactRequest.ittfDocument.rootFolder || '';
            wizziProds.scanIttfDocumentDb(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.path as string, rootFolder).then((mTreeScan: any) => 
            
                sendSuccess(response, {
                    mTreeScan: mTreeScan
                 })
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.mTreeScan.wizziProds.mTreeScanDb.error', err);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        }
        else {
            sendFailure(response, {
                err: {
                    message: 'Invalid artifactRequest.ittfDocument.source ' + artifactRequest.ittfDocument.source
                 }
             }, 501)
        }
    }
    ;
    
    private wrapIttfText = async (request: Request, response: Response) => 
    
        wizziProds.wrapIttfText(request.body.schema, request.body.ittfText).then((wrappedIttfText: string) => 
        
            sendSuccess(response, {
                wrappedIttfText: wrappedIttfText
             })
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'features/wizzi/controller/productions.handler.mTreeScan.wizziProds.wrapIttfText.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
