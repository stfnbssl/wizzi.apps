/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\packiProductions\utils.ts.ittf
    utc time: Sat, 06 Apr 2024 12:36:47 GMT
*/
import {packiTypes} from '../packi';
export function createInitialPackiFiles(contexts: string, tfolders: string, wizziSchema: string, mainIttf: string) {

    const packiFiles: packiTypes.PackiFiles = {};
    if (wizziSchema && mainIttf) {
        packiFiles[mainIttf] = {
            type: 'CODE', 
            contents: wizziSchema
         };
    }
    packiFiles['.packi/config.json.ittf'] = {
        type: 'CODE', 
        contents: createPackiConfigContents(contexts, tfolders)
     };
    return packiFiles;
}
export function createPackiConfigContents(contexts: string, tfolders: string) {

    const tfoldersObj = JSON.parse(tfolders || '[]');
    const contextsObj = JSON.parse(contexts || '[]');
    const sb = [];
    sb.push('{');
    sb.push('\t[ tfolders');
    var i, i_items=tfoldersObj, i_len=tfoldersObj.length, tf;
    for (i=0; i<i_len; i++) {
        tf = tfoldersObj[i];
        sb.push('\t\t{');
        sb.push('\t\t\tname "' + tf.name + '"');
    }
    sb.push('\t[ contexts');
    var i, i_items=contextsObj, i_len=contextsObj.length, ctx;
    for (i=0; i<i_len; i++) {
        ctx = contextsObj[i];
        sb.push('\t\t{');
        sb.push('\t\t\tpropertyName "' + ctx.propertyName + '"');
        sb.push('\t\t\tartifactName "' + ctx.artifactName + '"');
    }
    return sb.join('\n');
}
export function mergePackiFiles(a: any, b: any) {

    var ret: any = {};
    for (var k in a) {
        ret[k] = a[k];
    }
    for (var k in b) {
        ret[k] = b[k];
    }
    return ret;
}
