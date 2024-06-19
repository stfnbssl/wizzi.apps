/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Api\packiApi.ts.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {PackiFile, PackiFiles, PackiFileContent} from './types';
export function clonePackiFiles(packiFiles: PackiFiles, filters?: string[]):  PackiFiles {
    filters = filters || [];
    function isOk(filename: string) {
        if (!filters || filters.length == 0) {
            return true;
        }
        var i, i_items=filters, i_len=filters.length, filter;
        for (i=0; i<i_len; i++) {
            filter = filters[i];
            if (filename.startsWith(filter)) {
                return true;
            }
        }
        return false;
    }
    const retval: PackiFiles = {};
    for (var k in packiFiles) {
        if (isOk(k)) {
            retval[k] = packiFiles[k];
        }
    }
    return retval;
}
export function extractPackiFileContent(packiFiles: PackiFiles, filePath: string, options: { 
    json: boolean;
}):  PackiFileContent {
    const pf = extractPackiFile(packiFiles, filePath);
    const retval: PackiFileContent = {
        text: (pf && pf.contents) || (options.json ? '{}' : '')
     };
    if (options.json) {
        try {
            retval.json = pf && JSON.parse(pf.contents) || {};
        } 
        catch (err) {
            console.log("Error in Packi.extractPackiFileContent parsing packiFile contents", err);
            // TODO
            retval.json = {};
        } 
    }
    return retval;
}
export function extractPackiFile(packiFiles: string | PackiFiles, filePath: string):  PackiFile {
    const pfs: PackiFiles = packiFilesToObject(packiFiles);
    return pfs[filePath];
}
export function packiFilesToObject(packiFiles: string | PackiFiles):  PackiFiles {
    if (typeof packiFiles === "string") {
        try {
            return JSON.parse(packiFiles);
        } 
        catch (err) {
            console.log("[31m%s[0m", "Packi.packiFilesToObject", err);
            // TODO
            return {};
        } 
    }
    else {
        return packiFiles;
    }
}