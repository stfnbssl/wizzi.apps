/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\middlewares\wizziCdn.ts.ittf
    utc time: Sat, 06 May 2023 11:50:24 GMT
*/
import util from 'util';
import path from 'path';
import stringify from 'json-stringify-safe';
import parseUrl from 'parseurl';
import {Application, RequestHandler, Request, Response} from 'express';
import {resourceApi} from '../features/cdn';
import {MiddlewareType} from '../features/app/types';
import {config} from '../features/config';
import {sendFailure, sendHtml} from '../utils/sendResponse';

const myname = 'express.middleware.wizziCdn';
const cdnPath = '/cdn/v1';

export const WizziCdnMiddleware: MiddlewareType = (app: Application) => 

    app.use(cdnPath, cdnMiddleware())
;
function cdnMiddleware():  RequestHandler {

    return async (request: Request, response: Response, next: Function) => {
        
            if (request.method !== 'GET' && request.method !== 'HEAD') {
                return next();
            }
            const parsedUrl = parseUrl(request);
            if (!parsedUrl || !parsedUrl.pathname) {
                return next();
            }
            const pathname = decodeURIComponent(parsedUrl.pathname);
            const parts = pathname.split('/');
            let owner, cdnName;
            owner = parts[1];
            cdnName = parts.slice(2).join('/');
            
            _renderCdn(owner, cdnName, request, response)
        }
    ;
}
function _renderCdn(owner: string, cdnName: string, request: Request, response: Response) {

    
    resourceApi.getCdnResource(owner, cdnName).then((contents: string) => {
    
        response.status(200);
        response.set('Content-Type', getContentType(cmdName));
        response.set('Content-Length', contents);
        response.send(contents);
    }
    ).catch((err: any) => {
    
        console.log("[31m%s[0m", '' + myname + '_renderCdn.resourceApi.getCdnResource.error', err);
        var content = err;
        if (typeof err === 'object' && err !== null) {
            content = '<html><body><pre><code>' + JSON.stringify(err, null, 4) + '</code></pre></body></html>';
        }
        sendHtml(response, content)
    }
    )
}
function getContentType(name) {

    if (name.endsWith('.js')) {
        return 'application/x-javascript';
    }
    else if (name.endsWith('.css')) {
        return 'text/css';
    }
    else if (name.endsWith('.svg')) {
        return 'image/svg+xml';
    }
    else if (name.endsWith('.json')) {
        return 'application/json';
    }
    else {
        return 'text/plain';
    }
}
