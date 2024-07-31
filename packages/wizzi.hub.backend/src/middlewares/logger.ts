/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.backend\.wizzi-override\src\middlewares\logger.ts.ittf
    utc time: Wed, 31 Jul 2024 13:44:15 GMT
*/
import {Application, Request, Response, RequestHandler} from 'express';
import {MiddlewareType} from '#/src/features/app/types';
export const LoggerMiddleware: MiddlewareType = (app: Application) => {
    app.use((request: Request, response: Response, next: Function) => {
        console.log(`${request.method} ${request.path}`)
        next();
    }
    )
    console.log("[32m%s[0m", 'LoggerMiddleware installed');
}
;