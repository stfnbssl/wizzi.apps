/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\file\path.tsx.ittf
*/
const URL_PREFIX = 'http://file.io/';

export function getRelativePath(path: string, source: string, separator: string = '/') {

    const targetArr = path.split(separator);
    const sourceArr = source.split(separator).slice(0, -1);
    const filename = targetArr.pop();
    const targetPath = targetArr.join(separator);
    let relativePath = '';
    while (targetPath.indexOf(sourceArr.join(separator)) === -1) {
        sourceArr.pop();
        relativePath += '..' + separator;
    }
    const relPathArr = targetArr.slice(sourceArr.length);
    if (relPathArr.length) {
        relativePath += relPathArr.join(separator) + separator;
    }
    if (!relativePath.startsWith('.')) {
        relativePath = './' + relativePath;
    }
    return relativePath + filename;
}

export function getBasePath(path: string):  string {

    const paths = path.split('/');
    return paths.slice(0, paths.length - 1).join('/') + ((paths.length > 1 ? '/' : ''));
}

export function getAbsolutePath(path: string, currentFile: string) {

    const url = new URL(path, `${URL_PREFIX}${getBasePath(currentFile)}`);
    return url.href.replace(URL_PREFIX, '');
}
