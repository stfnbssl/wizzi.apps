/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\middlewares\passport.ts.ittf
    utc time: Mon, 11 Jul 2022 18:32:54 GMT
*/
import {Application} from 'express';
import {authManager} from '../features/auth';
export const PassportMiddleware = (app: Application) => {

    const passport = authManager.getPassport();
    app.use(passport.initialize());
    app.use(passport.session());
    console.log('PassportMiddleware installed');
}
;
