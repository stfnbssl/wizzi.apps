"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class BodyValidationMiddleware {
    verifyBodyFieldsErrors(req, res, next) {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({
                errors: errors.array()
            });
        }
        next();
    }
}
exports.default = new BodyValidationMiddleware();
//# sourceMappingURL=body.validation.js.map