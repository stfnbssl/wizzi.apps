/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.lab\.wizzi\src\features\packi\types.ts.ittf
    utc time: Wed, 03 Jul 2024 08:24:51 GMT
*/

/**
    * 
    * The content of a Packi code file.
    * 
*/
export type PackiFile = { 
    type: 'CODE';
    contents: string;
    generated?: boolean;
    error?: Error;
}

/**
    * 
    * Dictionary of file-names and their content that make up
    * the files of the Packi.
    * 
*/
export type PackiFiles = { 
    [path: string]: PackiFile;
}

/**
    * 
    * An error that can optionally hold a file-name and line/column location.
    * 
*/
export interface PackiError extends Error {
    fileName?: string;
    lineNumber?: number;
    columnNumber?: number;
}