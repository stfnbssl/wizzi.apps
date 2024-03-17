/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\middlewares\index.ts.ittf
    utc time: Wed, 13 Mar 2024 07:19:41 GMT
*/
import {MiddlewareType} from '../features/app';
import { CorsMiddleware } from './cors';
import { SessionMiddleware } from './session';
import { IttfStaticMiddleware } from './ittfStatic';
import { PackiBrowseMiddleware } from './packiBrowse';
import { BodyParserMiddleware } from './bodyParser';
import { CacheControlMiddleware } from './cacheControl';
import {UserInViewMiddleware} from './userInViews';
import { StaticFilesMiddleware } from './static';
import { WizziViewEngineMiddleware } from './wizziViewEngine';
import { PromiseMiddleware } from './promise';
const appMiddlewaresPre: MiddlewareType[] = [
    CorsMiddleware, 
    SessionMiddleware, 
    IttfStaticMiddleware, 
    PackiBrowseMiddleware, 
    BodyParserMiddleware, 
    CacheControlMiddleware, 
    UserInViewMiddleware, 
    StaticFilesMiddleware, 
    WizziViewEngineMiddleware, 
    PromiseMiddleware
];
const appMiddlewaresPost: MiddlewareType[] = [];
export {appMiddlewaresPre, appMiddlewaresPost};
