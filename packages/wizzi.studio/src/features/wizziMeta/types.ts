/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziMeta\types.ts.ittf
    utc time: Thu, 15 Feb 2024 20:31:55 GMT
*/
import {packiTypes} from '../packi';
type WizziProductionRef = { 
    kind: string;
    name: string;
    apiURL: string;
};
type WizziMetaPersistence = { 
    type?: string;
    folderPath?: string;
    packageOwner?: string;
    packageName?: string;
};
export type WizziMetaRequest = { 
    description?: string;
    metaPlugins?: string[];
    factoryPlugins?: string[];
    metaProductions?: { 
        name: string;
    }[];
    metaCtx?: any;
    metaCtxFilepath?: string;
    metaCtxRef?: WizziProductionRef;
    outputPackageName?: string;
    persist?: WizziMetaPersistence;
};
