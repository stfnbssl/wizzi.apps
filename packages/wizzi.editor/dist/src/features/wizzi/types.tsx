/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\wizzi\types.tsx.ittf
    utc time: Sun, 24 Jul 2022 11:56:37 GMT
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

export interface JobError extends WizziError {
    errorInfo?: { 
        [k: string]: any;
    };
}
