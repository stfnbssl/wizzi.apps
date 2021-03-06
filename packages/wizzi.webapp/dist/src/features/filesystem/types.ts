/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\filesystem\types.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {FileDef} from 'wizzi-utils';
import {packiTypes} from '../packi';

export type FsDbResult = { 
    writtenCount?: number;
    deletedCount?: number;
};

export type FsDb = { 
    getPackiTemplatesList: () => Promise<string[]>;
    getPackiTemplate: (name: string) => Promise<FileDef[]>;
    getStarterTemplate: () => Promise<FileDef[]>;
    savePackiTemplate: (id: string, files: packiTypes.PackiFiles) => Promise<FsDbResult>;
};
