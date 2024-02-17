/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\index.ts.ittf
    utc time: Sat, 17 Feb 2024 04:55:15 GMT
*/
import {ApiType, ControllerType, AppInitializerType, MiddlewareType} from './features/app/types';
import {ModelBuilderType} from './features/app';
import {config} from './features/config/index';
import { mongodbStart } from './services/mongodb';
import {siteControllers} from './site/index';
import {packiControllers} from './features/packi/index';
import {packiStudioFolderEditControllers} from './features/packiStudioFolderEdit/index';
import {packiProductionsControllers, packiProductionsModelBuilders} from './features/packiProductions/index';
import {docsControllers} from './features/docs/index';
import {wizziControllers} from './features/wizzi/index';
import {wizziFsControllers} from './features/wizziFs/index';
import {wizziGistControllers} from './features/wizziGist/index';
import {wizziMetaControllers} from './features/wizziMeta/index';
import {wizziCdnControllers, wizziCdnModelBuilders} from './features/wizziCdn/index';
import {philosControllers} from './features/philos/index';
import {geopControllers} from './features/geop/index';
import {wizziTableControllers, wizziTableModelBuilders} from './features/wizziTable/index';
import {wizziActionControllers, wizziActionModelBuilders} from './features/wizziAction/index';
import {devControllers} from './features/dev/index';
import {appMiddlewaresPre, appMiddlewaresPost} from './middlewares/index';
import App from './App';
var app: any = {
    instance: null
 };
async function start() {

    let modelBuilders: ModelBuilderType[] = [
        ...packiProductionsModelBuilders, 
        ...wizziCdnModelBuilders, 
        ...wizziTableModelBuilders, 
        ...wizziActionModelBuilders
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
        ...packiStudioFolderEditControllers, 
        ...packiProductionsControllers, 
        ...docsControllers, 
        ...wizziControllers, 
        ...wizziFsControllers, 
        ...wizziGistControllers, 
        ...wizziMetaControllers, 
        ...wizziCdnControllers, 
        ...philosControllers, 
        ...geopControllers, 
        ...wizziTableControllers, 
        ...wizziActionControllers, 
        ...devControllers
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
