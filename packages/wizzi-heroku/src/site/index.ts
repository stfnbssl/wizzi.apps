/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\site\index.ts.ittf
*/
import {ControllerType} from '../features/app';
import {HomeController} from './controllers/home';
import {AccountController} from './controllers/account';
import {AuthController} from './controllers/auth';
import {DocsController} from './controllers/docs';
import {ProductionsController} from './controllers/productions';
const siteControllers: ControllerType[] = [
    new HomeController(), 
    new AccountController(), 
    new AuthController(), 
    new DocsController(), 
    new ProductionsController()
];
export {siteControllers};
