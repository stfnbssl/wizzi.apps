/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.lab\.wizzi\src\index.ts.ittf
    utc time: Wed, 03 Jul 2024 08:24:51 GMT
*/
import {ApiType, ControllerType, AppInitializerType, MiddlewareType} from '#/src/features/app/types';
import {ModelBuilderType} from '#/src/features/app';
import {config} from '#/src/features/config/index';
import { mongodbStart } from '#/src/services/mongodb';
import {wizziProductionsControllers} from '#/src/features/wizziProductions/index';
import {wizziMetaControllers} from '#/src/features/wizziMeta/index';
import {wizziHubProductionsControllers, wizziHubProductionsModelBuilders} from '#/src/features/wizziHubProductions/index';
import {appMiddlewaresPre, appMiddlewaresPost} from '#/src/middlewares/index';
import App from './App';
var app: any = {
    instance: null
 };
async function start() {
    let modelBuilders: ModelBuilderType[] = [
        ...wizziHubProductionsModelBuilders
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
        ...wizziProductionsControllers, 
        ...wizziMetaControllers, 
        ...wizziHubProductionsControllers
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