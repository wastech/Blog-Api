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
exports.AuthController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const userService_1 = require("../services/userService");
const express_validator_1 = require("express-validator");
const serializers_1 = require("../serializers/serializers");
exports.AuthController = {
    /* register/create new user */
    registerUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            // if there is error then return Error
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    status: "error",
                    errors: errors.array(),
                });
            }
            const user = req.body;
            if (!user.email || !user.password) {
                return res.status(400).send({
                    status: "error",
                    message: "Username and password are required.",
                });
            }
            const reg_user = yield userService_1.userService.createUser({
                name: user.name,
                email: user.email,
                password: user.password,
            });
            res.json({
                status: "success",
                message: "user created successfuly",
                data: serializers_1.Serializer.userSerializer(reg_user),
            });
        }
        catch (err) {
            res.status(500).json({ status: "error", message: err.message });
        }
    }),
    /* user login */
    loginUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            // if there is error then return Error
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    status: "error",
                    errors: errors.array(),
                });
            }
            /* check user is exist with our system */
            const user = yield user_1.default.findOne({
                email: req.body.email,
            });
            if (!user) {
                return res.status(400).send({
                    status: "error",
                    message: "No account is associated with the given email",
                });
            }
            /* compare password */
            const isMatch = yield bcryptjs_1.default.compare(req.body.password, user.password);
            if (!isMatch) {
                return res
                    .status(400)
                    .send({ status: "error", message: "Invalid password" });
            }
            //create token
            const token = jsonwebtoken_1.default.sign({ _id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, {
                expiresIn: "1d",
            });
            res.json({
                status: "success",
                data: { token, user: serializers_1.Serializer.userSerializer(user) },
            });
        }
        catch (err) {
            res.status(500).json({ status: "error", message: err.message });
        }
    }),
    /* get user profile */
    getUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield user_1.default.findOne({
            email: req.user.email,
        });
        res.json({
            status: "success",
            data: serializers_1.Serializer.userSerializer(user),
        });
    }),
};
