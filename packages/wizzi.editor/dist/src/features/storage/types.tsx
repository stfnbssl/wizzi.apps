/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\storage\types.tsx.ittf
    utc time: Mon, 29 Jan 2024 07:09:54 GMT
*/

export interface IStorageBackend {
    getItem(key: string): string | null | undefined;
    removeItem(key: string): void;
    setItem(key: string, value: string, options?: object): void;
}
