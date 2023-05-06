/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\middlewares\index.ts.ittf
    utc time: Sat, 06 May 2023 11:50:24 GMT
*/
import {MiddlewareType} from '../features/app';
import { SessionMiddleware } from './session';
import { IttfStaticMiddleware } from './ittfStatic';
import { BodyParserMiddleware } from './bodyParser';
import { CacheControlMiddleware } from './cacheControl';
import { StaticFilesMiddleware } from './static';
import { WizziViewEngineMiddleware } from './wizziViewEngine';
import { PromiseMiddleware } from './promise';
const appMiddlewaresPre: MiddlewareType[] = [
    SessionMiddleware, 
    IttfStaticMiddleware, 
    BodyParserMiddleware, 
    CacheControlMiddleware, 
    StaticFilesMiddleware, 
    WizziViewEngineMiddleware, 
    PromiseMiddleware
];
const appMiddlewaresPost: MiddlewareType[] = [];
export {appMiddlewaresPre, appMiddlewaresPost};
