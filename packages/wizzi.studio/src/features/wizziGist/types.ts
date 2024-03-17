/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziGist\types.ts.ittf
    utc time: Fri, 08 Mar 2024 06:29:02 GMT
*/
export type GistKind = "gist" | "fragment" | "context" | "snippet";
export type GistOptions = { 
    name?: string;
    newname?: string;
    schema?: string;
    type?: string;
    kind?: GistKind;
    hash?: string;
    content?: string;
};
