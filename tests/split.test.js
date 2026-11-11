import { describe, it, expect } from 'vitest';
import { splitBill } from '../src/split.js';

describe('splitBill', () => {

    it("Splits $100 among 3 with no tip", () => {
        expect(
            splitBill({ total: 100, people: 3, tipPercent: 0 })
        ).toEqual([33.34, 33.33, 33.33]);
    });


    it("Splits $100 among 3 with 15% tip", () => {
        expect(
            splitBill({ total: 100, people: 3, tipPercent: 15 })
        ).toEqual([38.34, 38.33, 38.33]);
    });


    it("Splits $90 among 3 with 10% tip", () => {
        expect(
            splitBill({ total: 90, people: 3, tipPercent: 10 })
        ).toEqual([33, 33, 33]);
    });



    it("Splits $90 for a single person with 10% tip", () => {
        expect(
            splitBill({ total: 90, people: 1, tipPercent: 10 })
        ).toEqual([99]);
    });


    it("Splits $19.99 among 3 with no tip", () => {
        expect(
            splitBill({ total: 19.99, people: 3, tipPercent: 0 })
        ).toEqual([6.67, 6.66, 6.66]);
    });

    it("Keeps the total when amounts are added in cents", () => {
        const total = 100;
        const tipPercent = 10;
        const amounts = splitBill({ total, people: 3, tipPercent });

        const sumInCents = amounts.reduce(
            (sum, amount) => sum + Math.round(amount * 100),
            0
        );

        expect(sumInCents).toBe(11000);
    });

});