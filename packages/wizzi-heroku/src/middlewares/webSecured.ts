/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\middlewares\webSecured.ts.ittf
*/
import {Request, Response} from 'express';
//
export default (request: Request, response: Response, next: Function) => {
    
        console.log('webSecured called', (request as any).session && (request as any).session.user, __filename);
        if ((request as any).session && (request as any).session.user) {
            return next();
        }
        (request as any).session.returnTo = request.originalUrl;
        response.redirect('/auth/login');
    }
