/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\sdks\types.ts.ittf
    utc time: Sun, 24 Jul 2022 11:56:33 GMT
*/

export type SDKSpec = { 
    // Version-spec for the published "wizzi" package.
    version: string;
    // TFolders that are pre-loaded by the Wizzi runtime, and which
    // the user does not need to add to `wizzi.config.json`.
    coreTFolders: { 
        [name: string]: string;
    };
};

export type SDKFeature = 'MULTIPLE_FILES' | 'TFOLDER_DEPENDENCIES' | 'WIZZI_JOBS' | 'META_PRODUCTIONS';
    //
    
