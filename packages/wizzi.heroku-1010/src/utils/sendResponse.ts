/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\utils\sendResponse.ts.ittf
    utc time: Fri, 05 Apr 2024 18:03:04 GMT
*/
import {Response} from 'express';
import stringify from 'json-stringify-safe';
import {verify} from '@wizzi/utils';
import HttpException from '../httpException';
function sendContent(res: Response, contentType: string, content: string) {

    res.writeHead(200, {
        'Content-Type': contentType, 
        'Content-Length': content ? content.length : 0
     })
    res.end(content);
}
export const sendHtml = (res: Response, content: string) => 

    sendContent(res, 'text/html', content)
;
export const sendError = (res: Response, error: any) => {

    res.status(200);
    res.type('text');
    res.send(prettifyError(error))
}
;
export const sendFailure = 
// _ res.type('application/json')

// _ res.send(error)
(res: Response, error: any, status: number) => {

    res.status(error && error.status ? error.status : status)
    res.type('text');
    res.send(prettifyError(error))
}
;
export const sendSuccess = (res: Response, message: any) => {

    res.status(200);
    res.type('application/json');
    res.send(message);
}
;
export function sendPromiseResult<T>(res: Response, message: Promise<T>) {

    message.then((result: T) => 
    
        // console.log('sendPromiseResult.ok', result);
        sendSuccess(res, result)
    ).catch((err: any) => {
    
        console.log("[31m%s[0m", 'sendPromiseResult.err', err);
        sendFailure(res, err, 500);
    }
    )
}
export function sendPromiseLikeResult<T>(res: Response, message: PromiseLike<T>) {

    message.then((result: T) => 
    
        sendSuccess(res, result)
    )
}

function prettifyError(error: any) {

    var hint = error.hint;
    if (!hint && error.data && error.data.inner) {
        hint = error.data.inner.hint;
    }
    if (hint) {
        return verify.htmlEscape(stringify({
                errorName: error.errorName, 
                message: error.message, 
                hint: hint
             }, null, 2));
    }
    else {
        return verify.htmlEscape(stringify(error, null, 2));
    }
}
