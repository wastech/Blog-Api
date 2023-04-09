"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyUserToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res
            .status(401)
            .send({ status: "error", message: "Unauthorized request" });
    }
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
        return res
            .status(401)
            .send({ status: "error", message: "Access denied. No token provided." });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(400).send({ status: "error", message: "Invalid token." });
    }
};
exports.verifyUserToken = verifyUserToken;
