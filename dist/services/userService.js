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
exports.userService = void 0;
const user_1 = __importDefault(require("../models/user"));
exports.userService = {
    getAllUsers: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield user_1.default.find();
    }),
    createUser: (user) => __awaiter(void 0, void 0, void 0, function* () {
        return yield user_1.default.create(user);
    }),
    getUserById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield user_1.default.findById(id);
    }),
    updateUser: (id, user) => __awaiter(void 0, void 0, void 0, function* () {
        return yield user_1.default.findByIdAndUpdate(id, user);
    }),
    deleteUser: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield user_1.default.findByIdAndDelete(id);
    }),
};
