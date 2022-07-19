/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\middlewares\logger.ts.ittf
    utc time: Tue, 19 Jul 2022 19:18:03 GMT
*/
import {Application, Request, Response, RequestHandler} from 'express';
import morgan from 'morgan';
import {MiddlewareType} from '../features/app/types';
export const LoggerMiddleware: MiddlewareType = (app: Application) => {

    app.use(morgan('combined'))
    console.log('LoggerMiddleware installed. Using Morgan');
}
;
