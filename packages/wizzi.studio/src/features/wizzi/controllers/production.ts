/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizzi\controllers\production.ts.ittf
    utc time: Sat, 06 May 2023 11:50:24 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
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
import {file} from '@wizzi/factory';
const myname = 'features/wizzi/controller/productions';

function makeHandlerAwareOfAsyncErrors(handler: any) {

    return async function(request: Request, response: Response, next: NextFunction) {
        
            try {
                await handler(request, response, next);
            } 
            catch (error: any) {
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
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
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
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
