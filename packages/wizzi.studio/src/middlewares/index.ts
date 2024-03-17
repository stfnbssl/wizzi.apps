/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\middlewares\index.ts.ittf
    utc time: Fri, 08 Mar 2024 06:29:02 GMT
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
export {appMiddlewaresPre, appMiddlewaresPost};
