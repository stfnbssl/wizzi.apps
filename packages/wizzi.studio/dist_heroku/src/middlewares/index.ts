/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\middlewares\index.ts.ittf
    utc time: Sun, 25 Feb 2024 14:14:59 GMT
*/
import {MiddlewareType} from '../features/app';
import { SessionMiddleware } from './session';
import { IttfStaticMiddleware } from './ittfStatic';
import { PackiBrowseMiddleware } from './packiBrowse';
import { BodyParserMiddleware } from './bodyParser';
import { CacheControlMiddleware } from './cacheControl';
import {UserInViewMiddleware} from './userInViews';
import { StaticFilesMiddleware } from './static';
import { WizziViewEngineMiddleware } from './wizziViewEngine';
import { WizziCdnMiddleware } from './wizziCdn';
import { PromiseMiddleware } from './promise';
const appMiddlewaresPre: MiddlewareType[] = [
    SessionMiddleware, 
    IttfStaticMiddleware, 
    PackiBrowseMiddleware, 
    BodyParserMiddleware, 
    CacheControlMiddleware, 
    UserInViewMiddleware, 
    StaticFilesMiddleware, 
    WizziViewEngineMiddleware, 
    WizziCdnMiddleware, 
    PromiseMiddleware
];
const appMiddlewaresPost: MiddlewareType[] = [];
import webSecured from './webSecured';
import apiSecured from './apiSecured';
export {appMiddlewaresPre, appMiddlewaresPost, webSecured, apiSecured};