/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\index.ts.ittf
*/
import {ApiType, ControllerType, AppInitializerType, MiddlewareType} from './features/app/types';
import {ModelBuilderType} from './features/app';
import {config} from './features/config/index';
import { mongodbStart } from './services/mongodb';
import {siteControllers} from './site/index';
import {authControllers} from './features/auth/index';
import {accountControllers, accountModelBuilders} from './features/account/index';
import {blogControllers, blogModelBuilders} from './features/blog/index';
import {githubControllers} from './features/github/index';
import {docsControllers} from './features/docs/index';
import {productionControllers, productionModelBuilders} from './features/production/index';
import {packiControllers} from './features/packi/index';
import {cdnControllers, cdnModelBuilders} from './features/cdn/index';
import {appMiddlewaresPre, appMiddlewaresPost} from './middlewares/index';
import App from './App';
var app: any = {
    instance: null
 };
async function start() {

    let modelBuilders: ModelBuilderType[] = [
        ...accountModelBuilders, 
        ...blogModelBuilders, 
        ...productionModelBuilders, 
        ...cdnModelBuilders
    ];
    await mongodbStart(config, modelBuilders);
    
    let middlewaresPre: MiddlewareType[] = [
        ...appMiddlewaresPre
    ];
    let middlewaresPost: MiddlewareType[] = [
        ...appMiddlewaresPost
    ];
    let apis: ApiType[] = [];
    let controllers: ControllerType[] = [
        ...siteControllers, 
        ...authControllers, 
        ...accountControllers, 
        ...blogControllers, 
        ...githubControllers, 
        ...docsControllers, 
        ...productionControllers, 
        ...packiControllers, 
        ...cdnControllers
    ];
    console.log("[33m%s[0m", 'Starting app. Config:', config);
    const appInitializer: AppInitializerType = {
        config, 
        middlewaresPre, 
        globalApi: {
            
         }, 
        apis, 
        controllers, 
        middlewaresPost
     };
    app.instance = new App(appInitializer);
    app.instance.listen();
}
try {
    start();
} 
catch (ex) {
    console.log(ex, __filename);
} 
export function close(done) {

    try {
        console.log(`Index closing.`)
        console.log(`app.instance.close:${app.instance.close}`)
        app.instance.close(() => 
        
            done()
        )
    } 
    catch (ex) {
        console.log("[31m%s[0m", 'index.close. Exception:', ex);
        done();
    } 
}
