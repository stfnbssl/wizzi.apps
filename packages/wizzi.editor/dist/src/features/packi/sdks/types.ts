/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\sdks\types.ts.ittf
    utc time: Thu, 22 Feb 2024 17:41:40 GMT
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
    
