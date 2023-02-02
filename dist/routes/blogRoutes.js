"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogController_1 = require("../controllers/blogController");
const verifyUserToken_1 = require("../middlewares/verifyUserToken");
const blog_validator_1 = require("../validators/blog.validator");
const blogRouter = express_1.default.Router();
blogRouter
    .route("/")
    .get(blogController_1.getAllBlogs)
    .post(verifyUserToken_1.verifyUserToken, blog_validator_1.createBlogDataValidator, blogController_1.createBlog);
blogRouter
    .route("/:id")
    .get(blogController_1.getBlogById)
    .put(verifyUserToken_1.verifyUserToken, blog_validator_1.updateBlogDataValidator, blogController_1.updateBlog)
    .delete(verifyUserToken_1.verifyUserToken, blogController_1.deleteBlog);
exports.default = blogRouter;
