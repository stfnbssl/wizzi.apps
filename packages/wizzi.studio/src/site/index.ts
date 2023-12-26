/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\site\index.ts.ittf
    utc time: Thu, 27 Jul 2023 15:16:13 GMT
*/
import {ControllerType} from '../features/app';
import {HomeController} from './controllers/home';
import {DemoHomeController} from './controllers/demoHome';
import {DemoWizziController} from './controllers/demoWizzi';
import {DocsController} from './controllers/wizziDocs';
import {PackiProductionsController} from './controllers/packiProductions';
const siteControllers: ControllerType[] = [
    new HomeController(), 
    new DemoHomeController(), 
    new DemoWizziController(), 
    new DocsController(), 
    new PackiProductionsController()
];
export {siteControllers};
