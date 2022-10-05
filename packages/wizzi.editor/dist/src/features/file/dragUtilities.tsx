/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\file\dragUtilities.tsx.ittf
*/
export function dragEventIncludes({
    dataTransfer
 }: DragEvent, item: string):  boolean {

    if (!dataTransfer) {
        return false;
    }
    if (dataTransfer.types instanceof DOMStringList) {
        return dataTransfer.types.contains(item);
    }
    return dataTransfer.types.indexOf(item) > -1;
}
