/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\auth\ensureAuthenticated.ts.ittf
    utc time: Tue, 19 Jul 2022 19:18:03 GMT
*/
import {Request, Response} from 'express';
export function ensureAuthenticated(req: Request, res: Response, next: Function) {

    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}
