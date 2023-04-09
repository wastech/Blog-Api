"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Blog title required"],
        unique: true,
    },
    description: {
        type: String,
        required: [true, "Blog description required"],
    },
    image: String,
    tags: {
        type: Array,
        required: false,
    },
    author: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
}, {
    timestamps: true,
});
const Blog = mongoose_1.default.model("Blog", blogSchema);
exports.default = Blog;
