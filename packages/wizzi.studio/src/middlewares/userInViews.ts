/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\middlewares\userInViews.ts.ittf
    utc time: Mon, 24 Jul 2023 09:37:45 GMT
*/
import {Application, Request, Response, RequestHandler} from 'express';
import {MiddlewareType} from '../features/app/types';
import {config} from '../features/config';
//
export const UserInViewMiddleware: MiddlewareType = (app: Application) => 

    app.use((request: Request, response: Response, next: Function) => {
    
        (request as any).session.user = {
            id: 'local_' + config.userUserName, 
            username: config.userUserName, 
            displayName: config.userDisplayName, 
            picture: config.userAvatarUrl
         };
        response.locals.user = (request as any).session.user;
        next();
    }
    )
;
