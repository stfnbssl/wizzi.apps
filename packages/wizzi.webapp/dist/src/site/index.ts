/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\site\index.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {ControllerType} from '../features/app';
import {HomeController} from './controllers/home';
import {ProductionsController} from './controllers/productions';
import {DocsController} from './controllers/docs';
const siteControllers: ControllerType[] = [
    new HomeController(), 
    new ProductionsController(), 
    new DocsController()
];
export {siteControllers};
