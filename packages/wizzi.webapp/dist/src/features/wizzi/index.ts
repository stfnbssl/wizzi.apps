/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\wizzi\index.ts.ittf
    utc time: Sat, 23 Jul 2022 04:18:23 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziTypes from './types';
import * as WizziFactory from './factory';
import * as wizziProds from './productions';
import {ProductionsController} from './controllers/productions';

const wizziControllers: ControllerType[] = [
    new ProductionsController()
];
export {wizziTypes, wizziProds, WizziFactory, wizziControllers};
