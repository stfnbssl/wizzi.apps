/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\wizzi\controllers\production.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import fs from 'fs';
import path from 'path';
import {fsTypes} from '../../filesystem';
import {ArtifactRequest, MetaContext} from '../types';
import * as WizziFactory from '../factory';
import * as wizziProds from '../productions';
import {packiTypes} from '../../packi';
import {config} from '../../config';
import {resolveContexts} from '../api/context';
import {file} from 'wizzi';
const myname = 'features/wizzi/controller/productions';

export class ProductionController implements ControllerType {
    
    public path = '/api/v1/wizzi/production';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ProductionController.initialize', __filename);
        this.router.post('/artifact', this.artifact);
        this.router.post('/mtree', this.mTree);
        this.router.post('/mtreescript', this.mTreeBuildupScript);
        this.router.post('/mtreescan', this.mTreeScan);
        this.router.post('/wrapittf', this.wrapIttfText);
    };
    
    private artifact = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        const artifactRequest: ArtifactRequest = request.body;
        console.log(myname + '.handler.artifact.received request (keys)', Object.keys(artifactRequest), __filename);
        resolveContexts(artifactRequest.contextItems).then((context: any) => {
        
            console.log(myname, 'handler.artifact.resolvedContext', Object.keys(context), __filename);
            if (artifactRequest.ittfDocument.source == 'fs') {
                wizziProds.generateArtifactFs(path.join(config.ittfPath, artifactRequest.ittfDocument.path as string), context).then((generatedArtifact) => {
                
                    console.log(myname, 'generateArtifactFs.result', generatedArtifact, __filename);
                    sendSuccess(response, generatedArtifact)
                }
                ).catch((err: any) => {
                
                    console.log('features/wizzi/controller/productions.handler.artifact.wizziProds.generateArtifactFs.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (artifactRequest.ittfDocument.source == 'packi') {
                wizziProds.generateArtifact(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.packiFiles as packiTypes.PackiFiles, context).then((generatedArtifact: any) => {
                
                    console.log(myname, 'generateArtifact.result', generatedArtifact, __filename);
                    sendSuccess(response, generatedArtifact)
                }
                ).catch((err: any) => {
                
                    console.log('features/wizzi/controller/productions.handler.artifact.wizziProds.generateArtifact.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (artifactRequest.ittfDocument.source == 'db') {
                wizziProds.generateArtifactDb(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.path as string, context).then((generatedArtifact: any) => {
                
                    console.log(myname, 'generateArtifactDb.result', generatedArtifact, __filename);
                    sendSuccess(response, generatedArtifact)
                }
                ).catch((err: any) => {
                
                    console.log('features/wizzi/controller/productions.handler.artifact.wizziProds.generateArtifact.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
        }
        ).catch((err: any) => {
        
            console.log('features/wizzi/controller/productions.handler.artifact.resolveContexts.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private mTree = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        const artifactRequest: ArtifactRequest = request.body;
        console.log(myname + '.handler.mTree.received request (keys)', Object.keys(artifactRequest), __filename);
        resolveContexts(artifactRequest.contextItems).then((context: any) => {
        
            console.log(myname, 'handler.mTree.resolvedContext', Object.keys(context), __filename);
            if (artifactRequest.ittfDocument.source == 'fs') {
                wizziProds.mTreeFs(path.join(config.ittfPath, artifactRequest.ittfDocument.path as string), context).then((mTree) => {
                
                    console.log(myname, '.handle.mTreeFs.result', mTree.mTreeIttf, __filename);
                    sendSuccess(response, {
                        mTree: mTree.mTreeIttf
                     })
                }
                ).catch((err: any) => {
                
                    console.log('features/wizzi/controller/productions.handler.mTree.wizziProds.mTreeFs.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (artifactRequest.ittfDocument.source == 'packi') {
                wizziProds.mTree(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.packiFiles as packiTypes.PackiFiles, context).then((mTree: any) => {
                
                    console.log(myname, '.handle.mTree.result', mTree.mTreeIttf, __filename);
                    sendSuccess(response, {
                        mTree: mTree.mTreeIttf
                     })
                }
                ).catch((err: any) => {
                
                    console.log('features/wizzi/controller/productions.handler.mTree.wizziProds.mTree.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (artifactRequest.ittfDocument.source == 'db') {
                wizziProds.mTreeDb(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.path as string, context).then((mTree: any) => {
                
                    console.log(myname, '.handle.mTreeDb.result', mTree.mTreeIttf, __filename);
                    sendSuccess(response, {
                        mTree: mTree.mTreeIttf
                     })
                }
                ).catch((err: any) => {
                
                    console.log('features/wizzi/controller/productions.handler.mTree.wizziProds.mTreeDb.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
        }
        ).catch((err: any) => {
        
            console.log('features/wizzi/controller/productions.handler.mTree.resolveContexts.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private mTreeBuildupScript = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        const artifactRequest: ArtifactRequest = request.body;
        console.log(myname + '.handler.mTreeBuildupScript.received request (keys)', Object.keys(artifactRequest), __filename);
        resolveContexts(artifactRequest.contextItems).then((context: any) => {
        
            console.log(myname, 'handler.mTreeBuildupScript.resolvedContext', Object.keys(context), __filename);
            if (artifactRequest.ittfDocument.source == 'fs') {
                wizziProds.mTreeBuildupScriptFs(path.join(config.ittfPath, artifactRequest.ittfDocument.path as string), context).then((mTreeBuildupScript) => {
                
                    console.log(myname, '.handle.mTreeBuildupScriptFs.result', mTreeBuildupScript, __filename);
                    sendSuccess(response, mTreeBuildupScript)
                }
                ).catch((err: any) => {
                
                    console.log('features/wizzi/controller/productions.handler.mTreeBuildupScript.wizziProds.mTreeBuildupScriptFs.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (artifactRequest.ittfDocument.source == 'packi') {
                wizziProds.mTreeBuildupScript(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.packiFiles as packiTypes.PackiFiles, context).then((mTreeBuildupScript: any) => {
                
                    console.log(myname, '.handle.mTreeBuildupScript.result', mTreeBuildupScript, __filename);
                    sendSuccess(response, mTreeBuildupScript)
                }
                ).catch((err: any) => {
                
                    console.log('features/wizzi/controller/productions.handler.mTreeBuildupScript.wizziProds.mTreeBuildupScript.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
            else if (artifactRequest.ittfDocument.source == 'db') {
                wizziProds.mTreeBuildupScriptDb(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.path as string, context).then((mTreeBuildupScript: any) => {
                
                    console.log(myname, '.handle.mTreeBuildupScriptDb.result', mTreeBuildupScript, __filename);
                    sendSuccess(response, mTreeBuildupScript)
                }
                ).catch((err: any) => {
                
                    console.log('features/wizzi/controller/productions.handler.mTreeBuildupScript.wizziProds.mTreeBuildupScriptDb.error', err, __filename);
                    sendFailure(response, {
                        err: err
                     }, 501)
                }
                )
            }
        }
        ).catch((err: any) => {
        
            console.log('features/wizzi/controller/productions.handler.mTreeBuildupScript.resolveContexts.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private mTreeScan = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        const artifactRequest: ArtifactRequest = request.body;
        console.log(myname + '.handler.mTreeScan.received request (keys)', Object.keys(artifactRequest), __filename);
        var rootFolder = artifactRequest.ittfDocument.rootFolder || '';
        if (artifactRequest.ittfDocument.source == 'fs') {
            wizziProds.scanIttfDocumentFs(path.join(config.ittfPath, artifactRequest.ittfDocument.path as string), rootFolder).then((mTreeScan) => {
            
                console.log(myname, '.handle.mTreeScanFs.result', Object.keys(mTreeScan), __filename);
                sendSuccess(response, {
                    mTreeScan: mTreeScan
                 })
            }
            ).catch((err: any) => {
            
                console.log('features/wizzi/controller/productions.handler.mTreeScan.wizziProds.mTreeScanFs.error', err, __filename);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        }
        else if (artifactRequest.ittfDocument.source == 'packi') {
            var rootFolder = artifactRequest.ittfDocument.rootFolder || '';
            wizziProds.scanIttfDocument(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.packiFiles as packiTypes.PackiFiles, rootFolder).then((mTreeScan: any) => {
            
                console.log(myname, '.handle.mTreeScan.result', Object.keys(mTreeScan), __filename);
                sendSuccess(response, {
                    mTreeScan: mTreeScan
                 })
            }
            ).catch((err: any) => {
            
                console.log('features/wizzi/controller/productions.handler.mTreeScan.wizziProds.mTreeScan.error', err, __filename);
                sendFailure(response, {
                    err: err
                 }, 501)
            }
            )
        }
        else if (artifactRequest.ittfDocument.source == 'db') {
            var rootFolder = artifactRequest.ittfDocument.rootFolder || '';
            wizziProds.scanIttfDocumentDb(artifactRequest.ittfDocument.mainIttf as string, artifactRequest.ittfDocument.path as string, rootFolder).then((mTreeScan: any) => {
            
                console.log(myname, '.handle.mTreeScanDb.result', Object.keys(mTreeScan), __filename);
                sendSuccess(response, {
                    mTreeScan: mTreeScan
                 })
            }
            ).catch((err: any) => {
            
                console.log('features/wizzi/controller/productions.handler.mTreeScan.wizziProds.mTreeScanDb.error', err, __filename);
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
    
    private wrapIttfText = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        wizziProds.wrapIttfText(request.body.schema, request.body.ittfText).then((wrappedIttfText: string) => {
        
            console.log(myname, '.handle.wrapIttfText.result', wrappedIttfText, __filename);
            sendSuccess(response, {
                wrappedIttfText: wrappedIttfText
             })
        }
        ).catch((err: any) => {
        
            console.log('features/wizzi/controller/productions.handler.mTreeScan.wizziProds.wrapIttfText.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
