/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\middlewares\session.ts.ittf
    utc time: Mon, 25 Mar 2024 04:46:06 GMT
*/
import {Application, CookieOptions} from 'express';
import {MiddlewareType} from '../features/app/types';
import session from 'express-session';
import {config} from '../features/config';

export const SessionMiddleware: MiddlewareType = (app: Application) => {

    console.log("SessionMiddleware process.env.NODE_ENV: " + process.env.NODE_ENV);
    const cookieOptions: CookieOptions = {
        
        // serve secure cookies, requires https
        secure: process.env.NODE_ENV === 'production' ? true : false, 
        httpOnly: false, 
        sameSite: 'none', 
        
        // expires in 14 days
        maxAge: 14 * 24 * 60 * 60 * 1000
     };
    const sessionOptions: session.SessionOptions = {
        name: 'wizzi.heroku-1010.sid', 
        secret: config.sessionSecret, 
        resave: false, 
        saveUninitialized: false
     };
    if (process.env.NODE_ENV == "production") {
        app.set('trust proxy', 1);
    }
    app.use(session(sessionOptions));
    console.log("SessionMiddleware installed");
}
;
