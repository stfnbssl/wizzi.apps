/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.backend\.wizzi-override\src\features\packi\types.ts.ittf
    utc time: Fri, 09 Aug 2024 16:10:15 GMT
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

/**
    * 
    * Context data for wizzi generations from packifiles
    * 
*/
export type PackiGenerationContext = { 
    modelRequestContext?: { 
    };
    artifactRequestContext?: { 
    };
    globalContext?: { 
    };
}

/**
    * 
    * Context data for meta demo installations of packifiles
    * 
*/
export type PackiInstallContext = { 
    name: string;
    buildCommand?: string;
    runDevCommand?: string;
}