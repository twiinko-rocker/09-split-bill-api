import { describe, it, expect } from 'vitest'
import { splitBill } from '../src/split.js'

describe('splitBill', () => {
    it("splits $100 among 3 with no tip", () => {
        expect(
            splitBill({ total: 100, people: 3, tipPercent: 0 })
        ).toEqual([33.34, 33.33, 33.33])
    })
})

