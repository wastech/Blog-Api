"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, "User Full Name is required"] },
    email: {
        type: String,
        required: [true, "User Email is required."],
        unique: [true, "User Email must be unique."],
        trim: [true],
        lowecase: [true],
    },
    password: {
        type: String,
        required: [true, "User Password is required."],
        min: 8,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: true,
        default: "user",
    },
});
userSchema.pre("save", function (next) {
    var user = this;
    bcryptjs_1.default.hash(user.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});
const User = (0, mongoose_1.model)("User", userSchema);
userSchema.static("findUserByEmail", function (email) {
    return new Promise((resolve, reject) => {
        User.findOne({ email: email }).exec(function (err, user) {
            if (err)
                reject(err);
            resolve(user);
        });
    });
});
exports.default = User;
