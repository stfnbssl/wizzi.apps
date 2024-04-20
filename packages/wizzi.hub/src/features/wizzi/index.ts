/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub\.wizzi-override\src\features\wizzi\index.ts.ittf
    utc time: Thu, 18 Apr 2024 15:08:01 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziTypes from './types';
import * as WizziFactory from './factory';
import * as wizziProds from './productions';
import * as wizziMaps from './maps';
import {ProductionController} from './controllers/production';

const wizziControllers: ControllerType[] = [
    new ProductionController()
];
export {wizziTypes, wizziProds, WizziFactory, wizziMaps, wizziControllers};
