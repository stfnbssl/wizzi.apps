/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\common\middlewares\body.validation.ts.ittf
    utc time: Sun, 25 Feb 2024 13:18:08 GMT
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
