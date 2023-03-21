/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\middlewares\cors.ts.ittf
*/
import {Application} from 'express';
import cors from 'cors';
import {MiddlewareType} from '../features/app/types';
export const CorsMiddleware: MiddlewareType = (app: Application) => {

    const options = {
        origin: [
            'http://localhost:5000', 
            'http://localhost:5173'
        ], 
        optionsSuccessStatus: 200
     };
    app.options('*', cors())
    app.use(cors(options))
    console.log("[32m%s[0m", 'CorsMiddleware installed. Options: ', options);
}
;
