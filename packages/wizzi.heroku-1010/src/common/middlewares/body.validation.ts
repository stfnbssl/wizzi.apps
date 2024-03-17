/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\common\middlewares\body.validation.ts.ittf
    utc time: Thu, 14 Mar 2024 11:34:02 GMT
*/
import express from 'express';
import {validationResult} from 'express-validator';

class BodyValidationMiddleware {
    verifyBodyFieldsErrors(req: express.Request, res: express.Response, next: express.NextFunction) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({
                    errors: errors.array()
                 });
        }
        next();
    }
}

export default new BodyValidationMiddleware();
