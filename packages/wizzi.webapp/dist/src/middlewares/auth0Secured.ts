/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\middlewares\auth0Secured.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {Request, Response} from 'express';
//
export default function getSecured() {
    
        console.log('Middleware auth0Secured.getSecured called', __filename);
        return function secured(req: Request, res: Response, next: Function) {
            
                console.log('secured called', req.user, __filename);
                if (req.user) {
                    return next();
                }
                (req.session as any).returnTo = req.originalUrl;
                res.redirect('/account/login');
            };
    }
