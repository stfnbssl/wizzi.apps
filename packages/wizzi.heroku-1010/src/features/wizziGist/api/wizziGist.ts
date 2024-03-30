/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\wizziGist\api\wizziGist.ts.ittf
    utc time: Mon, 25 Mar 2024 04:46:06 GMT
*/
import path from 'path';
import {verify, fSystem, pretty, crypto} from 'wizzi-utils';
import * as gistFs from './gistFs';
import * as wizziFs from '../../../utils/wizziFs';
import * as scriptManager from '../../../utils/scripts/scriptManager';
import {GistOptions, GistKind} from '../types';
import {wizziProds} from '../../wizzi';
var fsfile = fSystem.vfile();

var GIST_KINDS = ['gist', 'fragment', 'context'];
function isGistKind(kind) {

    return GIST_KINDS.indexOf(kind) > -1;
}

async function getGistList(kind: GistKind) {

    return new Promise(
        // loog 'wizziGist.api.getGistList.kind', kind
        (resolve, reject) => 
        
            gistFs.getGistFiles(kind).then((result: any) => {
            
                var dummy = '';
                if (isGistKind(kind)) {
                    return resolve({
                            message: 'Got ' + kind + ' files', 
                            data: {
                                gists: result.data.gists, 
                                fragments: result.data.fragments, 
                                contexts: result.data.contexts
                             }
                         });
                }
                else {
                    return resolve({
                            message: "Got snippet files", 
                            data: {
                                snippets: result.data.items
                             }
                         });
                }
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'wizziGist.getGistList.gistFs.getGistFiles.error', err);
                return reject(err);
            }
            )
        
        );
}
async function createGist(kind: GistKind, name: string, schema: string) {

    return new Promise((resolve, reject) => {
        
            var fullName = name;
            var content = '';
            if (schema) {
                if (isGistKind(kind)) {
                    fullName = name + '.' + schema + '.ittf';
                }
                else {
                    fullName = name + '.' + schema;
                }
                if (schema === 'js') {
                    if (isGistKind(kind)) {
                        if (kind === 'gist' || kind === 'context') {
                            content = [
                                'module', 
                                '\tkind jsfile', 
                                '\t_ go', 
                                '\t\t@ "stefi"', 
                                '\tfunction go', 
                                '\t\tparam p1', 
                                '\t\tlog "Hello " + p1'
                            ].join('\n');
                        }
                        else {
                            content = [
                                '$group', 
                                '\t$params p1, p2|@@null', 
                                '\t'
                            ].join('\n');
                        }
                    }
                    else {
                        content = [
                            'go("stefi")', 
                            'function go(p1) {', 
                            '\tconsole.log("Hello " + p1);', 
                            '}'
                        ].join('\n');
                    }
                }
            }
            gistFs.gistFileExists(kind, fullName).then((result: boolean) => {
            
                if (result) {
                    return reject(kind + ' ' + fullName + ' already exists');
                }
                gistFs.putGistFile(kind, fullName, content).then((putResult: any) => 
                
                    getGistList(kind).then((result: any) => {
                    
                        if (isGistKind(kind)) {
                            return resolve({
                                    message: kind + ' created', 
                                    data: {
                                        gists: result.data.gists, 
                                        gist: putResult.data.gist
                                     }
                                 });
                        }
                        // BEWARE! putGistFile result.data contains 'gist' property
                        else {
                            return resolve({
                                    message: 'Snippet created', 
                                    data: {
                                        snippets: result.data.snippets, 
                                        snippet: putResult.data.gist
                                     }
                                 });
                        }
                    }
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'wizziGist.createGist.getGistList.error', err);
                        return reject(err);
                    }
                    )
                
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'wizziGist.createGist.putGistFile.error', err);
                    return reject(err);
                }
                )
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'wizziGist.createGist.gistFileExists.error', err);
                return reject(err);
            }
            )
        }
        );
}
async function updateGist(hash: string, content: string) {

    return new Promise((resolve, reject) => {
        
            var filePath = crypto.decrypt(hash);
            var name = path.basename(filePath);
            var kind = gistFs.gistKindFromFilePath(filePath);
            console.log('updateGist.kind', kind, 'name', name, 'filePath', filePath, __filename);
            gistFs.putGistFile(kind, name, content).then((result: any) => {
            
                return resolve({
                        message: kind + ' updated', 
                        data: {
                            gist: result
                         }
                     });
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'wizziGist.updateGist.gistFs.putFile.error', err);
                return reject(err);
            }
            )
        }
        );
}
async function deleteGist(hash: string) {

    return new Promise((resolve, reject) => {
        
            var filePath = crypto.decrypt(hash);
            var kind = gistFs.gistKindFromFilePath(filePath);
            wizziFs.deleteFsItem(filePath).then((result: any) => 
            
                getGistList(kind).then((result: any) => {
                
                    if (isGistKind(kind)) {
                        return resolve({
                                message: kind + ' deleted', 
                                data: {
                                    gists: result.data.gists
                                 }
                             });
                    }
                    else {
                        return resolve({
                                message: 'Snippet deleted', 
                                data: {
                                    gists: result.data.snippets
                                 }
                             });
                    }
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'wizziGist.deleteGist.getGistList.error', err);
                    return reject(err);
                }
                )
            
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'wizziGist.deleteGist.gistFs.deleteFile.error', err);
                return reject(err);
            }
            )
        }
        );
}
async function duplicateGist(hash: string, newname: string) {

    return new Promise((resolve, reject) => {
        
            var filePath = crypto.decrypt(hash);
            var kind = gistFs.gistKindFromFilePath(filePath);
            wizziFs.duplicateFsItem(filePath, path.join(path.dirname(filePath), newname)).then((result: any) => 
            
                getGistList(kind).then((result: any) => {
                
                    if (isGistKind(kind)) {
                        return resolve({
                                message: kind + ' duplicated', 
                                data: {
                                    gists: result.data.gists
                                 }
                             });
                    }
                    else {
                        return resolve({
                                message: 'Snippet duplicated', 
                                data: {
                                    gists: result.data.snippets
                                 }
                             });
                    }
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'wizziGist.duplicateGist.getGistList.error', err);
                    return reject(err);
                }
                )
            
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'wizziGist.duplicateGist.wizziFs.duplicateFsItem.error', err);
                return reject(err);
            }
            )
        }
        );
}
async function renameGist(hash: string, newname: string) {

    return new Promise((resolve, reject) => {
        
            var filePath = crypto.decrypt(hash);
            var kind = gistFs.gistKindFromFilePath(filePath);
            wizziFs.renameFsItem(filePath, path.join(path.dirname(filePath), newname)).then((result: any) => 
            
                getGistList(kind).then((result: any) => {
                
                    if (isGistKind(kind)) {
                        return resolve({
                                message: kind + ' renamed', 
                                data: {
                                    gists: result.data.gists
                                 }
                             });
                    }
                    else {
                        return resolve({
                                message: 'Snippet renamed', 
                                data: {
                                    snippets: result.data.snippets
                                 }
                             });
                    }
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'wizziGist.renameGist.getGistList.error', err);
                    return reject(err);
                }
                )
            
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'wizziGist.renameGist.wizziFs.renameFsItem.error', err);
                return reject(err);
            }
            )
        }
        );
}
async function getGist(hash: string) {

    return new Promise((resolve, reject) => {
        
            var filePath = crypto.decrypt(hash);
            var kind = gistFs.gistKindFromFilePath(filePath);
            var gist = gistFs.gistInfoByPath(filePath);
            wizziFs.readFsItem(filePath).then((result: any) => {
            
                gist.content = result;
                if (isGistKind(kind)) {
                    return resolve({
                            data: {
                                gist: gist
                             }
                         });
                }
                else {
                    return resolve({
                            data: {
                                snippet: gist
                             }
                         });
                }
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'gistFs.getGist.wizziFs.getFile.error', err);
                return reject(err);
            }
            )
        }
        );
}
async function executeGist(hash: string) {

    return new Promise((resolve, reject) => {
        
            var filePath = crypto.decrypt(hash);
            var kind = gistFs.gistKindFromFilePath(filePath);
            var fileInfo = gistFs.gistInfoByPath(filePath);
            if (fileInfo.isIttfDocument && fileInfo.schema === 'js') {
                var sessionData = {};
                var modelContext = {};
                var artifactContext = {};
                var that = this;
                wizziProds.generateArtifactFs(filePath, modelContext, {
                    generator: 'js/module', 
                    artifactContext
                 }).then((result: any) => {
                
                    console.log('wizziProds.generateArtifactFs.result', result, __filename);
                    gistFs.putGistExecutable(kind, filePath, result.artifactContent).then((result: any) => 
                    
                        executeNodeJsGist(hash, result.executablePath).then((result: any) => {
                        
                            return resolve(result);
                        }
                        ).catch((err: any) => {
                        
                            if (typeof err === 'object' && err !== null) {
                            }
                            console.log("[31m%s[0m", 'gistFs.executeGist.executeNodeJsGist.error', err);
                            return reject(err);
                        }
                        )
                    
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'gistFs.executeGist.gistFs.putGistExecutable.error', err);
                        return reject(err);
                    }
                    )
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'gistFs.executeGist.wizziProds.generateArtifactFs.error', err);
                    return reject(err);
                }
                )
            }
            else if (fileInfo.mime === 'js') {
                executeNodeJsGist(hash, filePath).then((result: any) => {
                
                    return resolve(result);
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'gistFs.executeGist.executeNodeJsGist.error', err);
                    return reject(err);
                }
                )
            }
            else {
                return reject({
                        message: 'Mime not managed ' + fileInfo.mime
                     });
            }
        }
        );
}
async function executeNodeJsGist(hash: string, executablePath: string, response?: any) {

    return new Promise((resolve, reject) => {
        
            if (response) {
                try {
                    console.log('execute nodeJsExecToEventStream', __filename);
                    scriptManager.nodeJsExecToEventStream({
                        scriptPath: executablePath, 
                        args: [
                            
                        ]
                     }, response).then((result: any) => {
                    
                        return resolve(result);
                    }
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'gistFs.executeNodeJsGist.scriptManager.nodeJsExecToEventStream.error', err);
                        return reject(err);
                    }
                    )
                } 
                catch (ex) {
                    return reject(ex);
                } 
            }
            else {
                console.log('execute nodeJsExec', __filename);
                try {
                    scriptManager.nodeJsExec({
                        scriptPath: executablePath, 
                        args: [
                            
                        ]
                     }).then((result: any) => {
                    
                        return resolve({
                                data: result, 
                                message: 'NodeJs script executed'
                             });
                    }
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'gistFs.executeNodeJsGist.scriptManager.nodeJsExec.error', err);
                        return reject(err);
                    }
                    )
                } 
                catch (ex) {
                    return reject(ex);
                } 
            }
        }
        );
}

export {getGist, getGistList, createGist, updateGist, deleteGist, duplicateGist, renameGist, executeGist};
