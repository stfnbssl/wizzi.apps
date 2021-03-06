/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\utils.ts.ittf
    utc time: Sun, 24 Jul 2022 11:56:33 GMT
*/
import fetchPonyfill from 'fetch-ponyfill';
import {PackiError, PackiUser} from './types';
const {
    fetch
 } = fetchPonyfill();
export {fetch};
export function createURL(host: string, id?: string) {

    if (host.includes('packi.expo.io')) {
        host = host.replace('packi.expo.io', 'exp.host');
    }
    else {
        if (host.includes('next-packi.expo.io')) {
            host = host.replace('next-packi.expo.io', 'exp.host');
        }
    }
    if (id) {
        return `exp://${host}/${
            id.match(/.*\/.*/)
             ? id
             : `@packi/${id}`}
            `;
    }
    else {
        return '';
    }
}
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
export function createUserHeader(user?: PackiUser):  { 
    [key: string]: string;
} {

    if (user?.sessionSecret) {
        return {
                'Expo-Session': user.sessionSecret
             };
    }
    if (user?.accessToken) {
        return {
                Authorization: `Bearer ${user.accessToken}`
             };
    }
    return {};
}
