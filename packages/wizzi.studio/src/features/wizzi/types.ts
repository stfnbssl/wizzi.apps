/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizzi\types.ts.ittf
    utc time: Sun, 24 Mar 2024 21:38:41 GMT
*/
import * as wizzi from '@wizzi/factory';
import {JsonFs} from '@wizzi/repo';
import {packiTypes} from '../packi';

export type FilesystemWizziFactory = { 
    wf: wizzi.WizziFactory;
};
export type JsonWizziFactory = { 
    wf: wizzi.WizziFactory;
    jsonFs: JsonFs;
};
export type LoadModelOptions = { 
    pluginsBaseFolder?: string;
    plugins?: string[];
};
export type GenerationOptions = { 
    generator?: string;
    artifactContext?: any;
    pluginsBaseFolder?: string;
    plugins?: string[];
};
export type GeneratedArtifact = { 
    artifactContent: string;
    sourcePath: string;
    artifactGenerator: string;
};
export type TransformationOptions = { 
    transformer?: string;
    pluginsBaseFolder?: string;
    plugins?: string[];
};
export type TransformedModel = { 
    transformResult: any;
    sourcePath: string;
    modelTransformer: string;
};

export type IttfDocumentSource = 'fs' | 'packi' | 'db' | 'text';

export type ContextSource = 'json-fsIttf' | 'json-packiIttf' | 'json-dbIttf' | 'json-fsFile' | 'json-value' | 'model-fsIttf' | 'model-packiIttf' | 'model-dbIttf';

export type MetaIttfDocument = { 
    source: IttfDocumentSource;
    path?: string;
    mainIttf?: string;
    rootFolder?: string;
    packiFiles?: packiTypes.PackiFiles;
    wizziSchema?: string;
    text?: string;
};

export type MetaIttfFolder = { 
    source: IttfDocumentSource;
    path?: string;
    sourceFolderUri?: string;
    destFolderUri?: string;
    generateFragments?: boolean;
    packiFiles?: packiTypes.PackiFiles;
};

export type MetaContext = { 
    name?: string;
    source: ContextSource;
    path?: string;
    mainIttf?: string;
    packiFiles?: packiTypes.PackiFiles;
    value?: object;
};

export type ArtifactRequest = { 
    ittfDocument?: MetaIttfDocument;
    ittfFolder?: MetaIttfFolder;
    contextItems: MetaContext[];
};

export type WizziModelTypesRequest = { 
    storeKind?: wizzi.StoreKind;
    wfschemaName: string;
    wfschemaIttfDocumentUri: string;
    wfschemaOutputPackageFolder: string;
    mTreeBuildUpContext?: any;
    globalContext?: any;
    pluginsBaseFolder: string;
    plugins: string[];
};

export type WizziJobTypesRequest = { 
    storeKind?: wizzi.StoreKind;
    wfjobName?: string;
    wfjobIttfDocumentUri: string;
    globalContext?: any;
    pluginsBaseFolder: string;
    plugins: string[];
    productionOptions?: wizzi.ProductionOptions;
};

export type ExtraMetaProductionData = { 
    name: string;
    folderTemplates: packiTypes.PackiFiles;
    ittfDocumentTemplates?: packiTypes.PackiFiles;
    plainDocuments?: packiTypes.PackiFiles;
};

export type MetaProductionPaths = { 
    tempProductionFolder: string;
    wizziProductionFolder: string;
};

export type MetaExecuteRequest = { 
    metaCtx?: any;
    globalContext?: any;
    paths?: MetaProductionPaths;
    metaProductions?: ExtraMetaProductionData[];
};
