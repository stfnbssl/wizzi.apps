/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\wizziGist\index.ts.ittf
    utc time: Mon, 25 Mar 2024 04:46:06 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziGistTypes from './types';
import * as wizziGistApi from './api/wizziGist';
import {ApiV1WizziGistController} from './controllers/apiv1wizzigist';

const wizziGistControllers: ControllerType[] = [
    new ApiV1WizziGistController()
];

export {wizziGistTypes, wizziGistControllers, wizziGistApi};
