/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\wizzi\index.ts.ittf
    utc time: Mon, 25 Mar 2024 04:46:06 GMT
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
