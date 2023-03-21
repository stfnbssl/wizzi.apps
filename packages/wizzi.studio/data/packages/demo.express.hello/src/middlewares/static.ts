/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\data\packages\demo.express.hello\.wizzi\src\middlewares\static.ts.ittf
*/
import * as path from 'path';
import {Application, static as expressStatic} from 'express';
import {MiddlewareType} from '../features/app/types';
export const StaticFilesMiddleware: MiddlewareType = (app: Application) => {

    console.log("[32m%s[0m", 'StaticFilesMiddleware. Folder served from ', path.resolve(__dirname, '..', '..', 'public'));
    app.use('/public', expressStatic(path.resolve(__dirname, '..', '..', 'public')));
    console.log("[32m%s[0m", 'StaticFilesMiddleware. Folder served from ', path.resolve(__dirname, '..', '..', 'ittf'));
    // simply browse ittfs when IttfDocumentsMiddleware is not used
    app.use('/ittf', expressStatic(path.resolve(__dirname, '..', '..', 'ittf')));
}
;
