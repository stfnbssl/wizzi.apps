/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\index.ts.ittf
    utc time: Mon, 25 Mar 2024 04:46:06 GMT
*/
import {ApiType, ControllerType, AppInitializerType, MiddlewareType} from './features/app/types';
import {ModelBuilderType} from './features/app';
import {config} from './features/config/index';
import { mongodbStart } from './services/mongodb';
import {siteControllers} from './site/index';
import {packiControllers} from './features/packi/index';
import {packiProductionsControllers, packiProductionsModelBuilders} from './features/packiProductions/index';
import {wizziControllers} from './features/wizzi/index';
import {wizziDocsControllers} from './features/wizziDocs/index';
import {wizziFsControllers} from './features/wizziFs/index';
import {appMiddlewaresPre, appMiddlewaresPost} from './middlewares/index';
import App from './App';
var app: any = {
    instance: null
 };
async function start() {

    let modelBuilders: ModelBuilderType[] = [
        ...packiProductionsModelBuilders
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
        ...packiControllers, 
        ...packiProductionsControllers, 
        ...wizziControllers, 
        ...wizziDocsControllers, 
        ...wizziFsControllers
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
    console.log("[31m%s[0m", ex);
} 
export function close(done: any) {

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
