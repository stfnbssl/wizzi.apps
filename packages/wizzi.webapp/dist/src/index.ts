/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\index.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {ApiType, ControllerType, AppInitializerType, MiddlewareType} from './features/app/types';
import {ModelBuilderType} from './features/app';
import {config} from './features/config/index';
import { mongodbStart } from './services/mongodb';
import wizziStart from './services/wizzi';
import {authenticationControllers, authenticationModelBuilders} from './features/auth/index';
import {accountControllers, accountModelBuilders} from './features/account/index';
import {productionControllers, productionModelBuilders} from './features/production/index';
import {siteControllers} from './site/index';
import {packiControllers} from './features/packi/index';
import {wizziControllers} from './features/wizzi/index';
import {ittfControllers} from './features/ittf/index';
import {docsControllers} from './features/docs/index';
import {appMiddlewaresPre, appMiddlewaresPost, auth0Secured} from './middlewares/index';
import App from './App';
async function start() {

    let modelBuilders: ModelBuilderType[] = [
        ...authenticationModelBuilders, 
        ...accountModelBuilders, 
        ...productionModelBuilders
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
        ...authenticationControllers, 
        ...accountControllers, 
        ...productionControllers, 
        ...packiControllers, 
        ...wizziControllers, 
        ...ittfControllers, 
        ...docsControllers
    ];
    console.log('Starting app. Config:', config, __filename);
    await wizziStart(config);
    const appInitializer: AppInitializerType = {
        config, 
        middlewaresPre, 
        globalApi: {
            
         }, 
        apis, 
        controllers, 
        middlewaresPost, 
        auth0Secured
     };
    const app = new App(appInitializer);
    app.listen();
}
try {
    start();
} 
catch (ex) {
    console.log(ex, __filename);
} 
