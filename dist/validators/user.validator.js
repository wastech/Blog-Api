"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogDataValidator = exports.loginUserDataValidator = exports.createUserDataValidator = void 0;
const express_validator_1 = require("express-validator");
const user_1 = __importDefault(require("../models/user"));
exports.createUserDataValidator = [
    (0, express_validator_1.body)("name").exists().withMessage("Name is required"),
    (0, express_validator_1.body)("email")
        .exists()
        // To delete leading and triling space
        .trim()
        // Normalizing the email address
        .normalizeEmail()
        .isEmail()
        .withMessage("Provide valid email")
        // Custom validation
        // Validate email in use or not
        .custom((email) => __awaiter(void 0, void 0, void 0, function* () {
        const existingUser = yield user_1.default.findOne({ email });
        if (existingUser) {
            throw new Error("Email already in use");
        }
    })),
    (0, express_validator_1.body)("password")
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string")
        .isLength({ min: 8 })
        .withMessage("Password should be at least 5 characters"),
];
exports.loginUserDataValidator = [
    (0, express_validator_1.body)("email").optional().isEmail().withMessage("Provide valid email"),
    (0, express_validator_1.body)("password")
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string"),
];
exports.updateBlogDataValidator = [
    (0, express_validator_1.body)("email").isString().withMessage("Title should be string"),
    (0, express_validator_1.body)("description").isString().withMessage("Description should be string"),
];
