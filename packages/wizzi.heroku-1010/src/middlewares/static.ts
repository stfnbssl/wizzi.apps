/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\middlewares\static.ts.ittf
    utc time: Fri, 05 Apr 2024 18:03:04 GMT
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
