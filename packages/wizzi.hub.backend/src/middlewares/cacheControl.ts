/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.lab\.wizzi\src\middlewares\cacheControl.ts.ittf
    utc time: Wed, 03 Jul 2024 08:24:51 GMT
*/
import {Request, Response, Application} from 'express';
import {MiddlewareType} from '#/src/features/app/types';
import {config} from '#/src/features/config/index';
export const CacheControlMiddleware: MiddlewareType = (app: Application) => {
    if (config.noCache) {
        app.use((request: Request, response: Response, next: Function) => {
            response.set('Cache-Control', 'no-store');
            next();
        }
        )
        console.log("[32m%s[0m", 'CacheControlMiddleware installed');
    }
}
;