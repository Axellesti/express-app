const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET /api/movis/:id", () => {
  it("should return movie with id 1", async () => {
    const response = await request(app).get("/api/movies/1");

    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });

  it("should return movie with id 0 and page error 404", async () => {
    const response = await request(app).get("/api/movies/0");

    expect(response.status).toEqual(404);
  });
});
