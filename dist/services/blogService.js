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
exports.BlogService = void 0;
const blog_1 = __importDefault(require("../models/blog"));
exports.BlogService = {
    getAllBlogs: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield blog_1.default.find();
    }),
    createBlog: (blog) => __awaiter(void 0, void 0, void 0, function* () {
        return yield blog_1.default.create(blog);
    }),
    getBlogById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield blog_1.default.findById(id);
    }),
    updateBlog: (id, blog) => __awaiter(void 0, void 0, void 0, function* () {
        return yield blog_1.default.findByIdAndUpdate(id, blog);
    }),
    deleteBlog: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield blog_1.default.findByIdAndDelete(id);
    }),
};
