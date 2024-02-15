/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\httpException.ts.ittf
    utc time: Thu, 15 Feb 2024 20:31:55 GMT
*/
class HttpException extends Error {
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
    status: number;
    message: string;
}
export default HttpException;
