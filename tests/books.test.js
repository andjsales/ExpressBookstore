const request = require('supertest');
const app = require('../app');

process.env.NODE_ENV = "test";

describe("GET /books", () => {
    test("Gets a list of books", async () => {
        const response = await request(app).get("/books");
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});

describe("POST /books", () => {
    test("Prevents creating book without required field", async () => {
        const response = await request(app)
            .post("/books")
            .send({
                amazon_url: "http://a.co/eobPtX2",
                author: "Test Author",
                language: "english",
                pages: 100,
                publisher: "Test Publisher",
                title: "Test Book",
                year: 2021
            });
        expect(response.statusCode).toBe(400);
    });
});
