/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.lab\.wizzi\src\middlewares\userInViews.ts.ittf
    utc time: Wed, 03 Jul 2024 08:24:51 GMT
*/
import {Application, Request, Response, RequestHandler} from 'express';
import {MiddlewareType} from '#/src/features/app/types';
//
export const UserInViewMiddleware: MiddlewareType = (app: Application) => 
    app.use((request: Request, response: Response, next: Function) => 
        next()
    )
;