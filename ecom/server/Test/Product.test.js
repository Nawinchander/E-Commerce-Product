const request = require("supertest");
const app = require("../server");

test("GET /api/products", async () => {
  const response = await request(app).get("/api/products");
  expect(response.statusCode).toBe(200);
});

