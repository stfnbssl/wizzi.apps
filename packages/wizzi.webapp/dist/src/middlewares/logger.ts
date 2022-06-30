/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\middlewares\logger.ts.ittf
    utc time: Thu, 30 Jun 2022 13:11:39 GMT
*/
import {Application, Request, Response, RequestHandler} from 'express';
import morgan from 'morgan';
import {MiddlewareType} from '../features/app/types';
export const LoggerMiddleware: MiddlewareType = (app: Application) => {

    app.use(morgan('combined'))
    console.log('LoggerMiddleware installed. Using Morgan');
}
;
