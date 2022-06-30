/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\app\types.ts.ittf
    utc time: Thu, 30 Jun 2022 13:11:39 GMT
*/
import {Application, Router} from 'express';
import {ConfigType} from '../config';
import {RequestHandlerParams} from 'express-serve-static-core';
export type ModelBuilderType = { 
    buildModel: () => void;
};
export type ControllerType = { 
    path: string;
    router: Router;
    initialize: (initValues: AppInitializerType) => void;
};
export type MiddlewareType = (app: Application) => void;
export type AppInitializerType = { 
    config: ConfigType;
    controllers: ControllerType[];
    middlewaresPre: MiddlewareType[];
    middlewaresPost: MiddlewareType[];
    auth0Secured: () => RequestHandlerParams;
};
