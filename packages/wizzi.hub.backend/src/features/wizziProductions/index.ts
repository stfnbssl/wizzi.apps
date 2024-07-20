/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.lab\.wizzi\src\features\wizziProductions\index.ts.ittf
    utc time: Wed, 03 Jul 2024 08:24:51 GMT
*/
import {ControllerType} from '#/src/features/app/types';
import * as wizziProductionsTypes from './types';
import * as wizziFactory from './factory';
import * as wizziProds from './productions';
import {ProductionController} from './controllers/production';

const wizziProductionsControllers: ControllerType[] = [
    new ProductionController()
];
export {wizziProductionsTypes, wizziProds, wizziFactory, wizziProductionsControllers};