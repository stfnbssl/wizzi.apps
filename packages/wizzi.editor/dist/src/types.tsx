/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\types.tsx.ittf
    utc time: Mon, 25 Mar 2024 04:27:37 GMT
*/

export type $SetComplement<A, A1 extends A> = A extends A1 ? never : A;

export type $Subtract<T extends T1, T1 extends object> = Pick<T, $SetComplement< keyof T,  keyof T1>>;
