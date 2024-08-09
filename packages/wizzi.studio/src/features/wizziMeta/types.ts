/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziMeta\types.ts.ittf
    utc time: Mon, 05 Aug 2024 15:53:32 GMT
*/
import {packiTypes} from '../packi';
import {wizziTypes} from '../wizzi';

type WizziProductionRef = { 
    kind: string;
    name: string;
    apiURL: string;
};

type WizziInMemoryMetaRef = { 
    owner: string;
    name: string;
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
    metaProductions?: wizziTypes.ExtraMetaProductionData[];
    inMemoryMetas?: WizziInMemoryMetaRef[];
    metaCtx?: any;
    metaCtxFilepath?: string;
    metaCtxRef?: WizziProductionRef;
    outputPackageName?: string;
    persist?: WizziMetaPersistence;
};
;