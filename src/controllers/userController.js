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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService_1 = require("../services/userService");
const serializers_1 = require("../serializers/serializers");
exports.UserController = {
    getAllUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield userService_1.userService.getAllUsers();
            res.json({ status: "success", data: serializers_1.Serializer.usersSerializer(users) });
        }
        catch (err) {
            res.status(500).json({ status: "error", message: err.message });
        }
    }),
    createUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield userService_1.userService.createUser(req.body);
            res.json({ status: "success", data: user });
        }
        catch (err) {
            res.status(500).json({ status: "error", message: err.message });
        }
    }),
    getUserById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield userService_1.userService.getUserById(req.params.id);
            res.json({ status: "success", data: user });
        }
        catch (err) {
            res.status(500).json({ status: "error", message: err.message });
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield userService_1.userService.updateUser(req.params.id, req.body);
            res.json({ status: "success", data: user });
        }
        catch (err) {
            res.status(500).json({ status: "error", message: err.message });
        }
    }),
    deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield userService_1.userService.deleteUser(req.params.id);
            res.json({ status: "success", data: user });
        }
        catch (err) {
            res.status(500).json({ status: "error", message: err.message });
        }
    }),
};
