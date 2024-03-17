/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizzi\index.ts.ittf
    utc time: Fri, 08 Mar 2024 06:29:02 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziTypes from './types';
import * as wizziFactory from './factory';
import * as wizziProds from './productions';
import * as wizziMaps from './maps';
import {ProductionController} from './controllers/production';

const wizziControllers: ControllerType[] = [
    new ProductionController()
];
export {wizziTypes, wizziProds, wizziFactory, wizziMaps, wizziControllers};
