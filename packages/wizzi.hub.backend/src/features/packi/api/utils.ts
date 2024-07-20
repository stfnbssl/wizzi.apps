/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.lab\.wizzi\src\features\packi\api\utils.ts.ittf
    utc time: Wed, 03 Jul 2024 08:24:51 GMT
*/
import DiffMatchPatch from 'diff-match-patch';
import {PackiFiles} from '../types';
export function clonePackiFiles(packiFiles: PackiFiles, filters: string[]) {
    filters = filters || [];
    
    function isOk(filename: string) {
        if (filters.length == 0) {
            return true;
        }
        var i, i_items=filters, i_len=filters.length, filter;
        for (i=0; i<i_len; i++) {
            filter = filters[i];
            if (filter && filename.startsWith(filter)) {
                return true;
            }
        }
        return false;
    }
    
    const retval: PackiFiles = {};
    for (var k in packiFiles) {
        const pf = packiFiles[k];
        if (pf && isOk(k)) {
            retval[k] = pf;
        }
    }
    return retval;
}
export // log "extractPackiFileContent.packiFiles 1", packiFiles
// log "extractPackiFile.filePath", filePath
// 'extractPackiFile.pf", pf
function extractPackiFileContent(packiFiles: PackiFiles, filePath: string, options: any) {
    const pf = extractPackiFile(packiFiles, filePath);
    const retval: { 
        [key: string]: any;
    } = {
        text: (pf && pf.contents) || (options.json ? '{}' : ''), 
        json: null
     };
    if (options.json) {
        try {
            retval.json = pf && JSON.parse(pf.contents) || {};
            // log "extractPackiFile.pf.contents json", retval.json
        } 
        catch (err) {
            console.log("[31m%s[0m", "Error in extractPackiFileContent parsing packiFile contents", err);
            // TODO
            retval.json = {};
        } 
    }
    return retval;
}
export function extractPackiFile(packiFiles: PackiFiles, filePath: string) {
    const pfs = packiFilesToObject(packiFiles);
    return pfs[filePath];
}
export function packiFilesToObject(packiFiles: any) {
    if (typeof packiFiles === "string") {
        try {
            return JSON.parse(packiFiles);
        } 
        catch (err) {
            console.log("[31m%s[0m", "packiFilesToObject", err);
            // TODO
            return {};
        } 
    }
    else {
        return packiFiles;
    }
}