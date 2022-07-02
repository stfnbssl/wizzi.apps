/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\middlewares\cors.ts.ittf
    utc time: Sat, 02 Jul 2022 09:02:58 GMT
*/
import {Application} from 'express';
import cors from 'cors';
import {MiddlewareType} from '../features/app/types';
export const CorsMiddleware: MiddlewareType = (app: Application) => {

    app.use(cors());
    console.log('CorsMiddleware installed');
}
;
