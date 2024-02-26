/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packiProductions\types.ts.ittf
    utc time: Sun, 25 Feb 2024 14:14:59 GMT
*/

import {Document} from "mongoose";

export type PackiProduction = 'artifact' | 'package' | 'meta' | 'plugin' | 'tfolder' | 'job';

export type IArtifactProduction = { 
    owner: string;
    name: string;
    description: string;
    mainIttf: string;
    wizziSchema: string;
    packiFiles: string;
    created_at: Date;
    updated_at: Date;
};


type IArtifactProduction_doc = { 
    _doc: IArtifactProduction;
};

export interface IArtifactProductionModel extends IArtifactProduction, IArtifactProduction_doc, Document {
}

export type IPackageProduction = { 
    owner: string;
    name: string;
    description: string;
    packiFiles: string;
    created_at: Date;
    updated_at: Date;
};


type IPackageProduction_doc = { 
    _doc: IPackageProduction;
};

export interface IPackageProductionModel extends IPackageProduction, IPackageProduction_doc, Document {
}

export type IPluginProduction = { 
    owner: string;
    name: string;
    description: string;
    packiFiles: string;
    created_at: Date;
    updated_at: Date;
};


type IPluginProduction_doc = { 
    _doc: IPluginProduction;
};

export interface IPluginProductionModel extends IPluginProduction, IPluginProduction_doc, Document {
}

export type IMetaProduction = { 
    owner: string;
    name: string;
    description: string;
    packiFiles: string;
    created_at: Date;
    updated_at: Date;
};


type IMetaProduction_doc = { 
    _doc: IMetaProduction;
};

export interface IMetaProductionModel extends IMetaProduction, IMetaProduction_doc, Document {
}

export type ITFolder = { 
    owner: string;
    name: string;
    description: string;
    packiFiles: string;
    created_at: Date;
    updated_at: Date;
};


type ITFolder_doc = { 
    _doc: ITFolder;
};

export interface ITFolderModel extends ITFolder, ITFolder_doc, Document {
}

export type IJob = { 
    owner: string;
    name: string;
    description: string;
    packiFiles: string;
    created_at: Date;
    updated_at: Date;
};


type IJob_doc = { 
    _doc: IJob;
};

export interface IJobModel extends IJob, IJob_doc, Document {
}
export type WizziInMemoryMetaRef = { 
    owner: string;
    name: string;
};
