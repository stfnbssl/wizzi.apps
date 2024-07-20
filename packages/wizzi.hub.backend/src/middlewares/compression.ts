/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.lab\.wizzi\src\middlewares\compression.ts.ittf
    utc time: Wed, 03 Jul 2024 08:24:51 GMT
*/
import {Application, Request, Response} from 'express';
import compression from 'compression';
import {MiddlewareType} from '#/src/features/app/types';

// see other options here http://expressjs.com/en/resources/middleware/compression.html
const shouldCompress = // fallback to standard filter function
(request: Request, response: Response) => {
    // don't compress responses with this request header
    if (request.headers['x-no-compression']) {
        return false;
    }
    return compression.filter(request, response);
}
;
const options = {
    filter: shouldCompress, 
    level: 6 || 6
 };

export const CompressionMiddleware: MiddlewareType = (app: Application) => {
    app.use(compression(options))
    console.log("[32m%s[0m", 'CompressionMiddleware installed');
}
;