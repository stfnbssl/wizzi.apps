/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\middlewares\apiSecured.ts.ittf
*/
import {statusCode} from "../utils";
import {FcError, LOGIN_REQUIRED} from "../utils/error";

    //
export default (request: Request, response: Response, next: Function) => {
    
        
        if ((request as any).session && (request as any).session.user) {
            return next();
        }
        
        const error = new FcError(LOGIN_REQUIRED);
        (response as any).status(statusCode.FORBIDDEN).send({
            error: {
                code: error.code, 
                message: error.message, 
                data: error.data || {}
             }
         })
    }
