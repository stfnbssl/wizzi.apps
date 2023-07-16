/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\utils.ts.ittf
*/
import fetchPonyfill from 'fetch-ponyfill';
import {PackiError, PackiUser} from './types';
const {
    fetch
 } = fetchPonyfill();
export {fetch};
export function createError(config: { 
    message: string;
    name?: string;
    fileName?: string;
    lineNumber?: number;
    columnNumber?: number;
    stack?: string;
}):  PackiError {

    const error: PackiError = new Error();
    if (config.name) {
        error.name = config.name;
    }
    if (config.fileName) {
        error.fileName = config.fileName;
    }
    if (config.lineNumber) {
        error.lineNumber = config.lineNumber;
    }
    if (config.columnNumber) {
        error.columnNumber = config.columnNumber;
    }
    if (config.stack) {
        error.stack = config.stack;
    }
    return error;
}
