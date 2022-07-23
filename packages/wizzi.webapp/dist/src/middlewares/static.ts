/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\middlewares\static.ts.ittf
    utc time: Sat, 23 Jul 2022 04:18:23 GMT
*/
import * as path from 'path';
import {Application, static as expressStatic} from 'express';
import {MiddlewareType} from '../features/app/types';
export const StaticFilesMiddleware: MiddlewareType = (app: Application) => {

    console.log('StaticFilesMiddleware. Folder served from ', path.resolve(__dirname, '..', '..', 'static'), __filename);
    app.use('/static', expressStatic(path.resolve(__dirname, '..', '..', 'static')));
    console.log('StaticFilesMiddleware. Folder served from ', path.resolve(__dirname, '..', '..', 'ittf'), __filename);
    // simply browse ittfs when IttfDocumentsMiddleware is not used
    app.use('/ittf', expressStatic(path.resolve(__dirname, '..', '..', 'ittf')));
    console.log('StaticFilesMiddleware. Folder served from ', path.resolve(__dirname, '..', '..', 'dist'), __filename);
    app.use('/dist', expressStatic(path.resolve(__dirname, '..', '..', 'dist')));
}
;
