/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\middlewares\userInViews.ts.ittf
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
