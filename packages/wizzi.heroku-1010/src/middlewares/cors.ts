/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\middlewares\cors.ts.ittf
    utc time: Mon, 25 Mar 2024 04:46:06 GMT
*/
import {Application} from 'express';
import cors from 'cors';
import {MiddlewareType} from '../features/app/types';
export const CorsMiddleware: MiddlewareType = (app: Application) => {

    app.options('*', cors())
    app.use(cors())
    console.log("[32m%s[0m", 'CorsMiddleware installed.');
}
;
