/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\index.ts.ittf
*/
import {ApiType, ControllerType, AppInitializerType, MiddlewareType} from './features/app/types';
import {config} from './features/config/index';
import {siteControllers} from './site/index';
import {wizziFsControllers} from './features/wizziFs/index';
import {wizziGistControllers} from './features/wizziGist/index';
import {wizziMetaControllers} from './features/wizziMeta/index';
import {packiEditControllers} from './features/packiEdit/index';
import {appMiddlewaresPre, appMiddlewaresPost} from './middlewares/index';
import App from './App';
var app: any = {
    instance: null
 };
async function start() {

    let middlewaresPre: MiddlewareType[] = [
        ...appMiddlewaresPre
    ];
    let middlewaresPost: MiddlewareType[] = [
        ...appMiddlewaresPost
    ];
    let apis: ApiType[] = [];
    let controllers: ControllerType[] = [
        ...siteControllers, 
        ...wizziFsControllers, 
        ...wizziGistControllers, 
        ...wizziMetaControllers, 
        ...packiEditControllers
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
