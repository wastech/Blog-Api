import request from "supertest";
import app from "../../src/index";

describe("Authentication endpoints", () => {
  let server: any;

  beforeAll(async () => {
    server = app.listen();
  });

  afterAll(async () => {
    server.close();

  });

  it("should register a new user", async () => {
    const res: any = await request(app).post("/user/register").send({
      name: "Test User",
      email: "admin123@gmail.com",
      password: "admin123",
    });
    expect(res.statusCode).toEqual(200);

    expect(res.body).toHaveProperty("message", "user created successfuly");
  });

  it("should not register a user with an existing email", async () => {
    const res: any = await request(app).post("/user/register").send({
      name: "Test User",
      email: "admin123@gmail.com",
      password: "admin123",
    });
    console.log("object,", res.statusCode);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message", "Email already exists");
  });

  it("should login a user with valid credentials", async () => {
    const res: any = await request(app).post("/user/login").send({
      email: "admin123@gmail.com",
      password: "admin123",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Login successful");
    expect(res.body).toHaveProperty("token");
  });

  it("should not login a user with invalid credentials", async () => {
    const res: any = await request(app).post("/user/login").send({
      email: "admin14423@gmail.com",
      password: "admin123",
    });
    console.log("object,", res.statusCode);
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message", "Invalid credentials");
  });
});
