"use strict";
// import mongoose from "mongoose";
// export const connectDB = async () => {
//   await mongoose
//     .set("strictQuery", false)
//     .connect(process.env.DATABASE_URL, {})
//     .then(() => {
//       console.log("Successfully connected to the database");
//     })
//     .catch((err) => {
//       console.log("Error connecting to the database");
//       console.log(err);
//       process.exit();
//     });
// };
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URI = process.env.DATABASE_URL;
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env');
}
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
});
const connectDB = mongoose_1.default.connection;
connectDB.on('error', console.error.bind('connection error:'));
connectDB.once('open', function () {
    console.log(('MongoDB database connection established successfully'));
});
exports.default = connectDB;
