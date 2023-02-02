"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const api_1 = __importDefault(require("./routes/api"));
// Constants
const PORT = process.env.PORT || 3000;
// Connect to database
(0, db_1.connectDB)();
// App
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// parse request bodies (req.body)
app.use(express_1.default.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
// Serving static assets
app.use(express_1.default.static("public"));
// logger
app.use((0, morgan_1.default)("dev"));
app.use("/api/v1/", api_1.default);
/* Error handler middleware */
app.use(((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
}));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
exports.default = app;
