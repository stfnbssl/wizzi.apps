/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\middlewares\ittfStatic.ts.ittf
    utc time: Tue, 19 Jul 2022 19:18:03 GMT
*/
import util from 'util';
import path from 'path';
import fs from 'fs';
import stringify from 'json-stringify-safe';
import parseUrl from 'parseurl';
import {Application, RequestHandler, Request, Response} from 'express';
import {MiddlewareType} from '../features/app/types';
import {config} from '../features/config';
import {wizziProds} from '../features/wizzi';
import {WizziModel} from 'wizzi';
export const IttfStaticMiddleware: MiddlewareType = (app: Application) => {

    console.log('IttfStaticMiddleware. Folder served from ', path.resolve(__dirname, '..', '..', 'ittf'));
    app.use('/ittf', ittfMiddleware(path.resolve(__dirname, '..', '..', 'ittf'), '/ittf'));
}
;
const extContentTypeMap: { 
    [k: string]: string;
} = {
    '.css': 'text/css', 
    '.gif': 'image/gif', 
    '.html': 'text/html', 
    '.ittf': 'text/plain', 
    '.jpeg': 'image/jpeg', 
    '.jpg': 'image/jpg', 
    '.js': 'text/javascript', 
    '.json': 'application/json', 
    '.png': 'image/png', 
    '.scss': 'text/scss', 
    '.svg': 'image/svg+xml', 
    '.ttf': 'application/x-font-ttf', 
    '.txt': 'text/plain', 
    '.vtt': 'text/vtt', 
    '.woff': 'application/x-font-woff', 
    '.yaml': 'text/yanl', 
    '.yml': 'text/yanl', 
    '.xml': 'text/xml'
 };

function ittfSchemaOf(file: string):  string | undefined {

    const nameParts = path.basename(file).split('.');
    if (nameParts[nameParts.length - 1] === 'ittf') {
        return nameParts[nameParts.length - 2];
    }
    return undefined;
}

function contentTypeFor(file: string):  string | undefined {

    const ittfSchema = ittfSchemaOf(file);
    if (ittfSchema) {
        return extContentTypeMap['.' + ittfSchema];
    }
    return undefined;
}

/**
    // 
    // request.query._context contains a semicolon separated list of context models export names.
    // For each <export-name> must exists a request.query._<export-name> parameter
    // with a type;path value pair.
    // The type is the model knwon type or a wizzi schema, the path is the
    // relative path of the ittf document of the model, relative to the
    // filepath of the requested resource.
    // 
    // Example (two context models, export names: cs and info)
    // request.query._context = 'cs;info'
    // request.query._cs = 'cheatsheet;html'
    // request.query._info = 'json;../cslayout.json.ittf'
    // 
    // If the path value is missing it defaults to ./index.<type>.ittf
    // 
    // 
*/
function ittfMiddleware(basePath: string, routePath: string):  RequestHandler {

    return async (request: Request, response: Response, next: Function) => {
        
            if (request.method !== 'GET' && request.method !== 'HEAD') {
                return next();
            }
            const parsedUrl = parseUrl(request);
            if (!parsedUrl || !parsedUrl.pathname) {
                return next();
            }
            const urlPathName = decodeURIComponent(parsedUrl.pathname);
            
            // ??? urlPathName.substr(routePath.length);
            const pathname = urlPathName;
            
            // ??? urlPathName.substr(routePath.length);
            const filePath = path.join(basePath, pathname);
            const extname = path.extname(filePath);
            var queryMeta = (request.query.meta as string);
            var queryTransform = (request.query.transform as string);
            console.log('middleware.ittfStatic', 'urlPathName', urlPathName, 'pathname', pathname, 'filePath', filePath, 'path.extname(filePath)', path.extname(filePath), 'queryMeta', queryMeta);
            if (fs.existsSync(filePath) === false) {
                console.log('filePath do not exists', filePath);
                return next();
            }
            if (fs.statSync(filePath).isDirectory()) {
                console.log('filePath is directory', filePath);
                return sendFolderScan(filePath, basePath, queryMeta, request, response);
            }
            if (queryTransform && queryTransform.indexOf('/') > 0) {
                return sendTransform(filePath, queryTransform, response);
            }
            let ittfSchema = ittfSchemaOf(filePath);
            let contentType = contentTypeFor(filePath);
            console.log('contentType', contentType, 'ittfSchema', ittfSchema, 'queryMeta', queryMeta);
            if (contentType) {
                if (queryMeta && queryMeta === 'html') {
                    try {
                        const documentState = await wizziProds.scanIttfDocument(filePath, path.dirname(basePath));
                        
                        // console.log('generated.meta.document', generated.artifactContent);
                        const generated = await wizziProds.generateArtifactFs(config.metaHtmlIttfPath, {
                                wizzischema: 'html', 
                                path: filePath, 
                                request, 
                                ds: documentState, 
                                locals: {
                                    user: (request.session as any).user
                                 }
                             });
                        // console.log('generated.meta.document', generated.artifactContent);
                        response.writeHead(200, {
                            'Content-Type': 'text/html', 
                            'Content-Length': generated.artifactContent.length
                         })
                        response.end(generated.artifactContent);
                    } 
                    catch (ex) {
                        sendError(response, ex, {
                            format: 'json'
                         })
                    } 
                }
                else if (queryMeta && queryMeta === 'json' && ittfSchema == 'ittf') {
                    wizziProds.generateArtifactFs(filePath, {
                        locals: {
                            user: (request.session as any).user
                         }
                     }, {
                        generator: 'ittf/tojson'
                     }).then((generated) => {
                    
                        console.log('generated.meta.ittf.json', filePath);
                        response.writeHead(200, {
                            'Content-Type': 'application/json', 
                            'Content-Length': generated.artifactContent.length
                         })
                        response.end(generated.artifactContent);
                    }
                    ).catch((err) => {
                    
                        return sendError(response, err, {
                                format: 'json'
                             });
                    }
                    )
                }
                else {
                    return contextLoader(filePath, request, function(err: any, modelContext: WizziModel) {
                        
                            if (err) {
                                return sendError(response, err, {
                                        format: 'json'
                                     });
                            }
                            modelContext = Object.assign({}, modelContext, {
                                locals: {
                                    user: (request.session as any).user
                                 }
                             })
                            ;
                            wizziProds.generateArtifactFs(filePath, modelContext).then(
                            // loog 'generated.artifactContent', generated.artifactContent
                            (generated) => {
                            
                                response.writeHead(200, {
                                    'Content-Type': contentType, 
                                    'Content-Length': generated.artifactContent.length
                                 })
                                response.end(generated.artifactContent);
                            }
                            ).catch((err) => {
                            
                                return sendError(response, err, {
                                        format: 'json'
                                     });
                            }
                            )
                        });
                }
            }
            else {
                next();
            }
        }
    ;
}
/**
    // 
    // request.query._context contains a semicolon separated list of context models export names.
    // For each <export-name> must exists a request.query._<export-name> parameter
    // with a type;path value pair.
    // The type is the model knwon type or a wizzi schema, the path is the
    // relative path of the ittf document of the model, relative to the
    // filepath of the requested resource.
    // 
    // Example (two context models, export names: cs and info)
    // request.query._context = 'cs;info'
    // request.query._cs = 'cheatsheet;html'
    // request.query._info = 'json;../cslayout.json.ittf'
    // 
    // If the path value is missing it defaults to ./index.<type>.ittf
    // 
    // 
*/
type contextRequest = { 
    name?: string;
    type?: string;
    exportName: string;
    fullPath: any;
    relPath: any;
};
async function contextLoader(resourceFilePath: string, request: Request, callback: any) {

    const contextRequest: string = (request.query._context as string);
    if (contextRequest && contextRequest.length > 0) {
        const ss = contextRequest.split(';');
        const ctxRequests: contextRequest[] = [];
        ss.forEach((element) => {
        
            const ctxRequest: contextRequest = {
                exportName: element, 
                fullPath: undefined, 
                relPath: undefined
             };
            const type_path = (request.query['_' + element] as string);
            console.log('contextLoader exportName, type_path', element, type_path);
            if (!type_path) {
                return (callback({
                        requestedResource: resourceFilePath, 
                        message: 'Missing query param for requested context model: ' + element
                     }));
            }
            const tp = type_path.split(';');
            ctxRequest.type = tp[0];
            if (tp.length < 2) {
                ctxRequest.relPath = './index.' + tp[0] + '.ittf';
            }
            else {
                ctxRequest.relPath = tp[1];
            }
            console.log('contextLoader exportName, type_path, relPath', element, type_path, ctxRequest.relPath);
            if (ctxRequest.type === 'cheatsheet') {
                ctxRequest.name = ctxRequest.relPath;
                ctxRequests.push(ctxRequest);
            }
            else {
                ctxRequest.fullPath = path.join(path.dirname(resourceFilePath), ctxRequest.relPath);
                ctxRequests.push(ctxRequest);
            }
            console.log('contextLoader ctxRequest', ctxRequest);
        }
        )
        console.log('contextLoader.ctxRequests', ctxRequests);
        const resultContext: { 
            [k: string]: WizziModel;
        } = {};
        const repeatCount = ctxRequests.length;
        const repeat = (index: number) => {
        
            if (index == repeatCount) {
                return callback(null, resultContext);
            }
            const ctxRequest = ctxRequests[index];
            if (ctxRequest.type === 'cheatsheet') {
                return callback('Context loader for cheatsheet type not implemented.');
            }
            else {
                wizziProds.loadModelFs(ctxRequest.fullPath, {}).then((model) => {
                
                    resultContext[ctxRequest.exportName] = model;
                    repeat(index + 1);
                }
                ).catch(err => 
                
                    callback(err)
                )
            }
        }
        ;
        repeat(0);
    }
    else {
        try {
            const twinJsonContext = await wizziProds.inferAndLoadContextFs(resourceFilePath, 'wzCtx');
            return (callback(null, twinJsonContext));
        } 
        catch (ex) {
            return callback(ex);
        } 
    }
}

async function sendFolderScan(folderPath: string, root: string, meta: string, request: Request, response: Response) {

    try {
        const folderState = await wizziProds.scanIttfFolder(folderPath, path.dirname(root));
        console.log('sendFolderScan', 'folderState.keys', Object.keys(folderState));
        if (meta === 'json') {
            return sendJSONStringified(response, folderState);
        }
        else {
            
            // console.log('generated.meta.document', generated.artifactContent);
            const generated = await wizziProds.generateArtifactFs(config.metaFolderIttfPath, {
                    wizzischema: 'html', 
                    path: folderPath, 
                    fs: folderState, 
                    locals: {
                        user: (request.session as any).user
                     }
                 });
            // console.log('generated.meta.document', generated.artifactContent);
            response.writeHead(200, {
                'Content-Type': 'text/html', 
                'Content-Length': generated.artifactContent.length
             })
            response.end(generated.artifactContent);
        }
    } 
    catch (ex) {
        console.log('sendFolderScan.exception', ex);
        sendError(response, ex, {
            format: 'json'
         })
    } 
}

function sendTransform(filePath: string, transformer: string, response: Response) {

    wizziProds.transformModelFs(filePath, {}, {
        transformer: transformer
     }).then(model => 
    
        response.send(stringify(model, null, 2))
    ).catch(err => 
    
        sendError(response, err, {
            format: 'json'
         })
    )
}

function sendJSONStringified(response: Response, wizziModelInstance: any) {

    response.send('<pre>' + stringify(cleanCircular(wizziModelInstance, []), null, 2) + '</pre>');
}

function cleanCircular(obj: any, stock: any[]) {

    if (!obj) {
        return ;
    }
    if (stock.indexOf(obj) >= 0) {
        return ;
    }
    else {
        stock.push(obj);
    }
    if (typeof obj === 'object') {
        if (obj.length) {
            (obj as []).forEach(element => 
            
                cleanCircular(element, stock)
            )
            return ;
        }
        if (obj.parent) {
            delete obj.parent
        }
        if (obj.wzParent) {
            delete obj.wzParent
        }
        if (obj.nodes) {
            delete obj.nodes
        }
        if (obj.evalContext) {
            delete obj.evalContext
        }
        if (obj.loadContext && obj.sourceKey) {
            delete obj.loadContext
        }
        for (var k in obj) {
            var item = obj[k];
            if (!item) {
                delete obj[k]
            }
            else {
                if (typeof item === 'object' && item.length && item.length == 0) {
                    delete obj[k]
                }
                else {
                    cleanCircular(item, stock);
                }
            }
        }
    }
    return obj;
}

function sendError(response: Response, err: any, options: any) {

    options = options || {};
    const code = options.code || 999;
    let errEmit: any = err;
    delete errEmit.__is_error
    if (options.format === 'string') {
        if (typeof err !== 'string') {
            err = util.inspect(err, {
                depth: null
             })
            ;
        }
        errEmit = err.replace(RegExp('\n', 'g'), '<br>');
    }
    else {
        if (err.stack && err.stack.split) {
            const stackArray: string[] = [];
            (err.stack as string).split('\n').forEach(element => 
            
                stackArray.push('    ' + element)
            )
            errEmit.stack = stackArray;
        }
    }
    response.setHeader('Content-Type', 'application/json');
    response.send(stringify({
        code, 
        error: errEmit
     }, null, 4))
}
