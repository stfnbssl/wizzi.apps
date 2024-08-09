/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.backend\.wizzi-override\src\site\index.ts.ittf
    utc time: Fri, 09 Aug 2024 16:10:15 GMT
*/
import {ControllerType} from '../features/app';
import {HomeController} from './controllers/home';
import {DemoHomeController} from './controllers/demoHome';
import {DocsController} from './controllers/wizziDocs';
const siteControllers: ControllerType[] = [
    new HomeController(), 
    new DemoHomeController(), 
    new DocsController()
];
export {siteControllers};