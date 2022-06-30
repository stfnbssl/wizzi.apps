/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\middlewares\auth0Secured.ts.ittf
    utc time: Thu, 30 Jun 2022 13:11:39 GMT
*/
import {Request, Response} from 'express';
//
export default function getSecured() {
    
        console.log('Middleware auth0Secured.getSecured called');
        return function secured(req: Request, res: Response, next: Function) {
            
                console.log('secured called', req.user);
                if (req.user) {
                    return next();
                }
                (req.session as any).returnTo = req.originalUrl;
                res.redirect('/account/login');
            };
    }
