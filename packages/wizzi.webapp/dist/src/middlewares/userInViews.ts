/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\middlewares\userInViews.ts.ittf
    utc time: Sat, 23 Jul 2022 04:18:23 GMT
*/
import {Application, Request, Response, RequestHandler} from 'express';
import {MiddlewareType} from '../features/app/types';
//
export const UserInViewMiddleware: MiddlewareType = (app: Application) => 

    app.use((req: Request, res: Response, next) => {
    
        res.locals.user = (req.session as any).user;
        next();
    }
    )
;
