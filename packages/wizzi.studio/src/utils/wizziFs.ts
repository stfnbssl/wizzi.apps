/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\utils\wizziFs.ts.ittf
    utc time: Sat, 17 Feb 2024 04:55:15 GMT
*/
import path from 'path';
import {verify, fSystem, crypto} from '@wizzi/utils';
import {promisify} from './functionWrappers';
export const normalize = (filepath: string) => {

    return verify.replaceAll(filepath, '\\', '/');
}
;
const file = fSystem.vfile();
const promiseFileExists = promisify(file.exists, file);
const promiseFileRead = promisify(file.read, file);
const promiseFileWrite = promisify(file.write, file);
// TODO const promiseFileRename = promisify(file.rename, file)
const promiseFileDelete = promisify(file.unlink, file);
const promiseFileDuplicate = promisify(file.copyFile, file);
export const joinPathFromArray = (segments: string[]) => {

    var ret = segments[0];
    for (var i=1; i<segments.length; i++) {
        ret = path.join(ret, segments[i])
        ;
    }
    return ret;
}
;
export const fileInfoByPath = (filePath: string, baseFolder: string, baseUri?: string) => {

    filePath = normalize(filePath);
    baseFolder = normalize(baseFolder);
    var basename = path.basename(filePath);
    var dirname = path.dirname(filePath);
    var relFolder = path.dirname(filePath).length > baseFolder.length ? path.dirname(filePath).substr(baseFolder.length + 1) : '';
    var fileUri = filePath.substr(baseFolder.length);
    var ss = basename.split('.');
    if (ss[ss.length-1] === 'ittf') {
        return {
                uri: (baseUri || '') + fileUri, 
                name: ss.slice(0, ss.length-2).join('.'), 
                basename: basename, 
                displayName: (relFolder.length > 0 ? relFolder + '/' + basename : basename), 
                isIttfDocument: true, 
                isFragment: filePath.indexOf('/t/') > -1, 
                schema: ss[ss.length-2], 
                mime: ss[ss.length-2], 
                relFolder: relFolder, 
                fullPath: filePath, 
                hash: crypto.encrypt(filePath), 
                content: undefined
             };
    }
    else {
        return {
                uri: fileUri, 
                name: ss.slice(0, ss.length-1).join('.'), 
                basename: basename, 
                displayName: (relFolder.length > 0 ? relFolder + '/' + basename : basename), 
                isIttfDocument: false, 
                schema: null, 
                mime: ss[ss.length-1], 
                relFolder: relFolder, 
                fullPath: filePath, 
                hash: crypto.encrypt(filePath), 
                content: undefined
             };
    }
}
;
export async function getFolderFiles(folderPath: string, baseFolderPath: string, baseUri?: string) {

    return new Promise(
        // loog 'wizzi-studio.apis.gists.getFolderFiles', glob, files
        (resolve, reject) => {
        
            if (typeof baseUri === 'undefined') {
                baseUri = '';
            }
            var glob = normalize(folderPath) + '/*.*';
            var files = file.glob(glob);
            var ret = [];
            var i, i_items=files, i_len=files.length, item;
            for (i=0; i<i_len; i++) {
                item = files[i];
                ret.push(fileInfoByPath(item, baseFolderPath, baseUri))
            }
            return resolve({
                    data: {
                        items: ret
                     }, 
                    message: "Got folder files"
                 });
        }
        );
}
export async function getIttfFilesOfSchema(folderPath: string, schemaName: string) {

    return new Promise(
        // loog 'getFolderIttfFiles', glob, schemaName, files
        (resolve, reject) => {
        
            var suffix = '.' + schemaName + '.ittf';
            var glob = normalize(folderPath) + '/*.' + schemaName + '.ittf';
            var files = file.glob(glob);
            var ret = [];
            var i, i_items=files, i_len=files.length, item;
            for (i=0; i<i_len; i++) {
                item = files[i];
                var dirName = path.dirname(item);
                var baseName = path.basename(item);
                var name = baseName.substring(0, baseName.length - suffix.length);
                ret.push({
                    name: name, 
                    baseName: baseName, 
                    dirName: dirName, 
                    fullPath: normalize(path.join(dirName, path.basename(item)))
                 })
            }
            return resolve(ret);
        }
        );
}
export async function fsItemExists(filePath: string) {

    return promiseFileExists(filePath);
}
export async function readFsItem(filePath: string) {

    return promiseFileRead(filePath);
}
export async function readJsonObject(filePath: string) {

    return new Promise((resolve, reject) => 
        
            promiseFileRead(filePath).then((content: string) => {
            
                return resolve(JSON.parse(content));
            }
            )
        
        );
}
export async function writeFsItem(filePath: string, content: string) {

    return promiseFileWrite(filePath, content);
}
export async function writeJsonObject(filePath: string, content: any) {

    return promiseFileWrite(filePath, JSON.stringify(content, null, 2));
}
export async function deleteFsItem(filePath: string) {

    return promiseFileDelete(filePath);
}
export async function duplicateFsItem(itemPath: string, newPath: string) {

    return promiseFileDuplicate(itemPath, newPath);
}
export async function renameFsItem(oldPath: string, newPath: string) {

    throw new Error("wizziFs.renameFsItem not implemented");
}
