/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.backend\.wizzi-override\src\middlewares\cacheControl.ts.ittf
    utc time: Fri, 09 Aug 2024 16:10:15 GMT
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