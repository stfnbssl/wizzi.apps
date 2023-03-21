/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi-override\tests\features\packi\index.ts.ittf
*/
import {PackiBuilder} from '../../../src/features/packi';
testFiles();
testFileDiffPatch();
function testFiles() {

    console.log('Hello', __filename);
    const pm = new PackiBuilder(getSamplePackiFile_1());
    console.log(pm.getFileContent('alpha.txt'), __filename);
}
function getSamplePackiFile_1() {

    const result = {};
    result['alpha.txt'] = {
        type: 'CODE', 
        contents: [
            'pesci', 
            'toro', 
            'leone'
        ].join('\n')
     };
    result['beta.txt'] = {
        type: 'CODE', 
        contents: [
            'venere', 
            'marte', 
            'saturno'
        ].join('\n')
     };
    result['sigma.txt'] = {
        type: 'CODE', 
        contents: [
            'orione', 
            'via lattea'
        ].join('\n')
     };
    result['tau.txt'] = {
        type: 'CODE', 
        contents: [
            'same', 
            'medesimo'
        ].join('\n')
     };
    return result;
}
function getSamplePackiFile_2() {

    const result = {};
    result['alpha.txt'] = {
        type: 'CODE', 
        contents: [
            'pesci', 
            'leone'
        ].join('\n')
     };
    result['beta.txt'] = {
        type: 'CODE', 
        contents: [
            'venere', 
            'giove', 
            'saturno'
        ].join('\n')
     };
    result['gamma.txt'] = {
        type: 'CODE', 
        contents: [
            'tirreno', 
            'adriatico'
        ].join('\n')
     };
    result['tau.txt'] = {
        type: 'CODE', 
        contents: [
            'same', 
            'medesimo'
        ].join('\n')
     };
    return result;
}
function testFileDiffPatch() {

    const pm1 = new PackiBuilder(getSamplePackiFile_1());
    const pm2 = new PackiBuilder(getSamplePackiFile_2());
    const alphaOld = pm1.getFileContent('alpha.txt');
    const alphaNew = pm2.getFileContent('alpha.txt');
    const diffs = pm1.getFileDiffs('alpha.txt', alphaNew);
    pm1.applyFileDiffs('alpha.txt', diffs)
    const alphaOldPatched = pm1.getFileContent('alpha.txt');
    console.log('testFileDiffPatch', '\n', alphaOld, '\n',alphaNew, '\n',alphaOldPatched, '\n',alphaOldPatched == alphaNew, __filename);
}
