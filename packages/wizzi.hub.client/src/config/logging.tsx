/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010.client\.wizzi\src\config\logging.tsx.ittf
    utc time: Sat, 09 Mar 2024 07:50:51 GMT
*/
import config from './config';
const DEFAULT_NAMESPACE = config.defaults.namespace;
const info = (message: any, namespace?: string) => {

    if (typeof message === 'string') {
        console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO] ${message}`)
    }
    else {
        console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO]`, message)
    }
}
;
const warn = (message: any, namespace?: string) => {

    if (typeof message === 'string') {
        console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN] ${message}`)
    }
    else {
        console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN]`, message)
    }
}
;
const error = (message: any, namespace?: string) => {

    if (typeof message === 'string') {
        console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR] ${message}`)
    }
    else {
        console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR]`, message)
    }
}
;
const getDate = () => {

    return new Date().toISOString();
}
;
const logging = {
    info, 
    warn, 
    error
 };
export default logging;
