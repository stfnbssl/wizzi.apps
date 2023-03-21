/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\data\packages\demo.express.hello\.wizzi\src\examples\promise\index.ts.ittf
*/
import {ControllerType} from '../../features/app/types';
import {UsersController} from './routes/users';
import {ImgController} from './routes/img';

const examplePromiseControllers: ControllerType[] = [
    new UsersController(), 
    new ImgController()
];
export {examplePromiseControllers};
