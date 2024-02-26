/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\middlewares\userInViews.ts.ittf
    utc time: Sun, 25 Feb 2024 14:14:59 GMT
*/
import {Application, Request, Response, RequestHandler} from 'express';
import {MiddlewareType} from '../features/app/types';
//
export const UserInViewMiddleware: MiddlewareType = (app: Application) => 

    app.use((request: Request, response: Response, next: Function) => {
    
        response.locals.user = (request as any).session.user;
        next();
    }
    )
;
