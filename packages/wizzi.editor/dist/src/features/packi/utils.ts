/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\utils.ts.ittf
    utc time: Mon, 29 Jan 2024 07:09:52 GMT
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
