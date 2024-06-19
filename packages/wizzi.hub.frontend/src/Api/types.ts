/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Api\types.ts.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
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
};
;

/**
    * 
    * Dictionary of file-names and their content that make up
    * the files of the Packi.
    * 
*/
export type PackiFiles = { 
    [path: string]: PackiFile;
};
;

export type PackiFileContent = { 
    text: string;
    json?: { 
    };
};
;

export interface HubProductionItem {
    id: string;
    owner: string;
    name: string;
    description: string;
    packiFiles: string;
}
