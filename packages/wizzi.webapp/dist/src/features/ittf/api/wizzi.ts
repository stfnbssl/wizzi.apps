/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\ittf\api\wizzi.ts.ittf
    utc time: Tue, 05 Jul 2022 11:32:30 GMT
*/
import {ApiType, AppInitializerType} from '../../../features/app/types';

export class ittfApi implements ApiType {
    
    public name = 'ittf';
    globalApi: any;
    config: any;
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ittfApi.initialize');
        this.globalApi = initValues.globalApi;
        this.config = initValues.config;
    };
}
