/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\file\dragUtilities.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
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