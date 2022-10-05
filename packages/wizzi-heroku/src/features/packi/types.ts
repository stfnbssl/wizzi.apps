/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi-override\src\features\packi\types.ts.ittf
*/
import {Document} from "mongoose";
export type TemplateList = string[];
export type IUser = { 
    userId: string;
    email: string;
    createdAt: Date;
    lastAccess: Date;
};
export interface IUserModel extends IUser, Document {
}
export type IPacki = { 
    userId: string;
    repoOwner: string;
    repoName: string;
    clonedAt: Date;
    lastCommitWhenCloned: string;
};
export interface IPackiModel extends IPacki, Document {
}
export type PackiCodeFile = { 
    type: 'CODE';
    contents: string;
    generated?: boolean;
    error?: Error;
};
    //
    

export type PackiAssetFile = { 
    type: 'ASSET';
    contents: string;
    generated?: boolean;
    error?: Error;
};
    //
    

export type PackiFile = PackiCodeFile | PackiAssetFile;
    //
    

export type PackiFiles = { 
    [path: string]: PackiFile;
};
    //
    

export interface PackiError extends Error {
    fileName?: string;
    lineNumber?: number;
    columnNumber?: number;
}
    //
    
export type IPackiItem = { 
    owner: string;
    name: string;
    wizziSchema: string;
    mainIttf: string;
    files: string;
    dependencies: IPackiDependency[];
    updated_at: Date;
};
export interface IPackiItemModel extends IPackiItem, Document {
}
export type IPackiDependency = { 
    owner: string;
    name: string;
    files: string;
    updated_at: Date;
};
export interface IPackiDependencyModel extends IPackiDependency, Document {
}
