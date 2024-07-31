/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.backend\.wizzi-override\src\middlewares\helmet.ts.ittf
    utc time: Wed, 31 Jul 2024 13:44:15 GMT
*/
import {Application} from 'express';
import helmet from 'helmet';
import {MiddlewareType} from '#/src/features/app/types';

export const HelmetMiddleware: MiddlewareType = (app: Application) => {
    app.use(helmet())
    console.log("[32m%s[0m", 'HelmetMiddleware installed');
}
;