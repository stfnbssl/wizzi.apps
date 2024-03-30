/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\wizzi\types.tsx.ittf
    utc time: Mon, 25 Mar 2024 04:27:37 GMT
*/
export type GeneratedArtifact = { 
    artifactContent?: string;
    sourcePath?: string;
    artifactGenerator?: string;
    errorMessage?: string;
    errorLines?: string[];
    errorStack?: string;
    errorName?: string;
    errorInfo?: { 
        [k: string]: any;
    };
    isError?: boolean;
};

export interface WizziError {
    errorName?: string;
    errorMessage?: string;
    errorStack?: string;
}

export interface ArtifactError extends WizziError {
    errorLines?: string[];
}
