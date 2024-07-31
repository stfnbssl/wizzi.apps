/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.backend\.wizzi-override\src\middlewares\cookie.ts.ittf
    utc time: Wed, 31 Jul 2024 13:44:15 GMT
*/
import {Application} from 'express';
import {MiddlewareType} from '#/src/features/app/types';
import cookieParser from 'cookie-parser';
export const CookieMiddleware: MiddlewareType = (app: Application) => {
    app.use(cookieParser())
    console.log("[32m%s[0m", 'CookieMiddleware installed');
}
;