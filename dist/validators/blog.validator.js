"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogDataValidator = exports.createBlogDataValidator = void 0;
const express_validator_1 = require("express-validator");
exports.createBlogDataValidator = [
    (0, express_validator_1.body)("title")
        .exists({ checkFalsy: true })
        .withMessage("Title is required")
        .isString()
        .withMessage("Title should be string"),
    (0, express_validator_1.body)("description")
        .exists()
        .withMessage("Description is required")
        .isString()
        .withMessage("Description should be string"),
];
exports.updateBlogDataValidator = [
    (0, express_validator_1.body)("title").isString().withMessage("Title should be string"),
    (0, express_validator_1.body)("description").isString().withMessage("Description should be string"),
];
