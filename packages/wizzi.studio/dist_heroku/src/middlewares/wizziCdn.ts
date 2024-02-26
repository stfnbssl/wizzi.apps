/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\middlewares\wizziCdn.ts.ittf
    utc time: Sun, 25 Feb 2024 14:14:59 GMT
*/
import util from 'util';
import path from 'path';
import stringify from 'json-stringify-safe';
import parseUrl from 'parseurl';
import {Application, RequestHandler, Request, Response} from 'express';
import {resourceApi} from '../features/wizziCdn';
import {MiddlewareType} from '../features/app/types';
import {config} from '../features/config';
import {sendFailure, sendHtml} from '../utils/sendResponse';

const myname = 'express.middleware.wizziCdn';
const cdnPath = '/wizzicdn/v1';

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
            console.log(myname + '.parsedUrl', parsedUrl, __filename);
            const pathname = decodeURIComponent(parsedUrl.pathname);
            const parts = pathname.split('/');
            let owner, cdnName;
            owner = parts[1];
            cdnName = parts.slice(2).join('/');
            console.log(myname + '.owner', owner, 'cdnName', cdnName, __filename);
            
            _renderCdn(owner, cdnName, request, response, next)
        }
    ;
}
function _renderCdn(owner: string, cdnName: string, request: Request, response: Response, next: Function) {

    
    resourceApi.getWizziCdnResource(owner, cdnName).then((result: any) => {
    
        if (result.ok) {
            const item = result.item;
            console.log(myname + '.getWizziCdnResource.contents.length:', item.contents.length, __filename);
            response.status(200);
            response.set('Content-Type', getContentType(cdnName));
            response.set('Content-Length', item.contents.length);
            response.send(item.contents);
        }
        else {
            next();
        }
    }
    ).catch((err: any) => {
    
        console.log("[31m%s[0m", '' + myname + '_renderCdn.resourceApi.getWizziCdnResource.error', err);
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
