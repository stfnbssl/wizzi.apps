/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\common\types.ts.ittf
*/
export type ValidateResult = { 
    isValid: boolean;
    message?: string;
};

export type CRUDResult = { 
    oper: string;
    ok: boolean;
    item?: any;
    message?: string;
};

export type GitRepositoryMeta = { 
    owner: string;
    name: string;
    description: string;
    branches: string[];
};

