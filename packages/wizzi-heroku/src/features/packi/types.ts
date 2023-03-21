/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi-override\src\features\packi\types.ts.ittf
*/

export type PackiFile = { 
    type: 'CODE';
    contents: string;
    generated?: boolean;
    error?: Error;
};
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
