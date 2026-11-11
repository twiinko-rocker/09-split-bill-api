import app from "../src/app.js";
import request from "supertest";
import { describe, it, expect } from "vitest";

describe("POST /split", () => {
    it("should split the bill correctly", async () => {
        const response = await request(app)
            .post("/split")
            .send({ total: 100, people: 3, tipPercent: 15 });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ amounts: [38.34, 38.33, 38.33] });
    });
});
