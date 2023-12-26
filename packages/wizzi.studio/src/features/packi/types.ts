/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\packi\types.ts.ittf
    utc time: Mon, 24 Jul 2023 09:37:44 GMT
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
    
