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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../src/index"));
describe("Authentication endpoints", () => {
    let server;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        server = index_1.default.listen();
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        server.close();
    }));
    it("should register a new user", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.default).post("/user/register").send({
            name: "Test User",
            email: "admin1234@gmail.com",
            password: "admin123",
        });
        console.log("object,", res.statusCode);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("message", "user created successfuly");
    }));
    //   it("should not register a user with an existing email", async () => {
    //     const res: any = await request(app).post("/user/register").send({
    //       name: "Test User",
    //       email: "admin1234@gmail.com",
    //       password: "admin123",
    //     });
    //     console.log("object,", res.statusCode);
    //     expect(res.statusCode).toEqual(400);
    //     expect(res.body).toHaveProperty("message", "Email already exists");
    //   });
    //   it("should login a user with valid credentials", async () => {
    //     const res: any = await request(app).post("/user/login").send({
    //       email: "admin1234@gmail.com",
    //       password: "admin123",
    //     });
    //     expect(res.statusCode).toEqual(200);
    //     expect(res.body).toHaveProperty("message", "Login successful");
    //     expect(res.body).toHaveProperty("token");
    //   });
    //   it("should not login a user with invalid credentials", async () => {
    //     const res: any = await request(app).post("/user/login").send({
    //       email: "admin14423@gmail.com",
    //       password: "admin123",
    //     });
    //     console.log("object,", res.statusCode);
    //     expect(res.statusCode).toEqual(401);
    //     expect(res.body).toHaveProperty("message", "Invalid credentials");
    //   });
});
