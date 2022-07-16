/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\ittf\api\ittfPaths.ts.ittf
    utc time: Fri, 15 Jul 2022 15:38:03 GMT
*/
import fs from 'fs';
import path from 'path';
import {crypto, fSystem, verify} from 'wizzi-utils';
import {config} from '../../config';

var file = fSystem.vfile();

function normalize(filepath: string) {

    return verify.replaceAll(filepath, '\\', '/');
}

function hashEncrypt(text: string) {

    return crypto.encrypt(text);
}

function hashDecrypt(text: string) {

    return crypto.decrypt(text);
}

export function getIttfFiles(folderPath: string) {

    folderPath = normalize(folderPath);
    var files = file.glob(folderPath + "/**/*.ittf");
    var wizziBaseUriLength = normalize(config.wizziBasePath).length;
    var parts = [], relFolder = "", filePath = "", ret = [];
    var i, i_items=files, i_len=files.length, item;
    for (i=0; i<i_len; i++) {
        item = files[i];
        filePath = item.fullPath;
        relFolder = path.dirname(filePath).length > folderPath.length ? path.dirname(filePath).substr(folderPath.length + 1) : '';
        parts = path.basename(filePath).split('.');
        ret.push({
            baseName: path.basename(filePath), 
            displayName: (relFolder.length > 0 ? relFolder + '/' + path.basename(filePath) : path.basename(filePath)), 
            baseFolder: folderPath, 
            relFolder: relFolder, 
            fullPath: filePath, 
            uri: filePath.substr(wizziBaseUriLength), 
            hash: hashEncrypt(filePath), 
            schema: parts[parts.length-2], 
            isFragment: filePath.indexOf('/t/') > -1, 
            hashTest: hashDecrypt(hashEncrypt(filePath))
         })
    }
    return ret;
}

export function getIttfFilePathByHash(hash: string) {

    return hashDecrypt(hash);
}

export function getIttfFileContentByHash(hash: string) {

    var filePath = hashDecrypt(hash);
    if (file.isFile(filePath)) {
        return {
                ok: true, 
                content: file.read(filePath)
             };
    }
    else {
        return {
                ok: false, 
                message: 'Ittf document ' + filePath + ' not found'
             };
    }
}

export function putIttfFileContentByHash(hash: string, content: string) {

    var filePath = hashDecrypt(hash);
    console.log('putIttfFileContentByHash', hash, filePath);
    try {
        file.write(filePath, content)
    } 
    catch (ex: any) {
        return {
                ok: false, 
                message: 'Error writing ittf document ' + filePath + '. Message: ' + ex.message
             };
    } 
    return {
            ok: true, 
            message: 'Ittf document written succesfully'
         };
}

export function getSchemaByIttfDocumentUri(ittfDocumentUri: string) {

    var ss = ittfDocumentUri.split('.');
    return ss[ss.length-2];
}

export function getFolders(folderPath: string) {

    var ret = [];
    var dir = fs.readdirSync(folderPath);
    var i, i_items=dir, i_len=dir.length, name;
    for (i=0; i<i_len; i++) {
        name = dir[i];
        var target = folderPath + '/' + name;
        var stats = fs.statSync(target);
        if (stats.isDirectory()) {
            ret.push({
                name: name, 
                fullPath: target
             })
        }
    }
    return ret;
}

export function joinPathFromArray(segments: string[]) {

    var ret = segments[0];
    for (var i=1; i<segments.length; i++) {
        ret = path.join(ret, segments[i])
        ;
    }
    return ret;
}
