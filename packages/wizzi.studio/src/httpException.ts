/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\httpException.ts.ittf
    utc time: Sat, 06 May 2023 11:50:24 GMT
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
