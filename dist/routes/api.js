"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogRoutes_1 = __importDefault(require("./blogRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const apiRouter = express_1.default.Router();
apiRouter.use("/blogs", blogRoutes_1.default);
apiRouter.use("/user", userRoutes_1.default);
exports.default = apiRouter;
