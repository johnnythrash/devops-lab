const request = requite("supertest");
const app = require("./index");

test("GET / returns hello message", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("Hello, CI/CD!");
});
