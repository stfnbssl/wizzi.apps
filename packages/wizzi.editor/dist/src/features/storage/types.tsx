/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\storage\types.tsx.ittf
    utc time: Thu, 22 Feb 2024 17:41:44 GMT
*/

export interface IStorageBackend {
    getItem(key: string): string | null | undefined;
    removeItem(key: string): void;
    setItem(key: string, value: string, options?: object): void;
}
