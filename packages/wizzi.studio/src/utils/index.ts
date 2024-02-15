/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\utils\index.ts.ittf
    utc time: Thu, 15 Feb 2024 20:31:55 GMT
*/
// A helper function to assert the request ID param is valid
// and convert it to a number (since it comes as a string by default)
function getIdParam(req) {

    const id = req.params.id;
    if (/^\d+$/.test(id)) {
        return Number.parseInt(id, 10);
    }
    throw new TypeError(`Invalid ':id' param: "${id}"`);
}
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const statusCode = {
    SUCCESS: 200, 
    BAD_REQUEST: 400, 
    FORBIDDEN: 403, 
    NOT_FOUND: 404
 };

// ms
const expiredAfter = "600000";
export {
    getIdParam, 
    statusCode, 
    expiredAfter, 
    emailRegex
 }
