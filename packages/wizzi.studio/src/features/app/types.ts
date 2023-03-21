/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\app\types.ts.ittf
*/
import express from 'express';
import {ConfigType} from '../config';
export type ApiType = { 
    name: string;
    initialize: (app: express.Application, initValues: AppInitializerType) => void;
};
export type ControllerType = { 
    path: string;
    router: express.Router;
    initialize: (app: express.Application, initValues: AppInitializerType) => void;
};
export type MiddlewareType = (app: express.Application) => void;
export type AppInitializerType = { 
    config: ConfigType;
    globalApi: any;
    apis: ApiType[];
    controllers: ControllerType[];
    middlewaresPre: MiddlewareType[];
    middlewaresPost: MiddlewareType[];
};
