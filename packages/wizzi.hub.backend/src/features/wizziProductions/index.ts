/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.backend\.wizzi-override\src\features\wizziProductions\index.ts.ittf
    utc time: Mon, 12 Aug 2024 07:40:25 GMT
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