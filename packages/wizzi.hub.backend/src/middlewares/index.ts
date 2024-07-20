/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.lab\.wizzi\src\middlewares\index.ts.ittf
    utc time: Wed, 03 Jul 2024 08:24:51 GMT
*/
import {MiddlewareType} from '#/src/features/app';
import { CorsMiddleware } from './cors';
import { SessionMiddleware } from './session';
import { BodyParserMiddleware } from './bodyParser';
import { CacheControlMiddleware } from './cacheControl';
import { StaticFilesMiddleware } from './static';
import { PromiseMiddleware } from './promise';
const appMiddlewaresPre: MiddlewareType[] = [
    CorsMiddleware, 
    SessionMiddleware, 
    BodyParserMiddleware, 
    CacheControlMiddleware, 
    StaticFilesMiddleware, 
    PromiseMiddleware
];
const appMiddlewaresPost: MiddlewareType[] = [];
export {appMiddlewaresPre, appMiddlewaresPost};