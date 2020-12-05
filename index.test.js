const { test, expect } = require("@jest/globals");
const ListRects = require('./index')

const input4 = null

// Run the test cases:
describe('listRects()', () => {
    test("it should return a list of all rectangles.", () => {
        const input = [
            [0, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
        const expected = [
            [[0, 7], [1, 8]],
            [[1, 3], [3, 4]],
            [[4, 0], [4, 2]],
            [[5, 6], [5, 6]]
        ]

        const result = ListRects.listRects(input)
        const arrayEquality = ListRects.arrayEquals(input, result)
        expect(arrayEquality).toBe(true)
    })
    test("it should correctly list when only one rectangle.", () => {
        const input =
            [
                [1, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]

        const expected = [
            [[0, 0], [0, 0]]
        ]

        const result = ListRects.listRects(input)
        const arrayEquality = ListRects.arrayEquals(input, result)
        expect(arrayEquality).toBe(true)
    })
    test("it should return an empty array if there are no rectangles.", () => {
        const input =
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]

        const expected = [[]]

        const result = ListRects.listRects(input)
        const arrayEquality = ListRects.arrayEquals(input, result)
        expect(arrayEquality).toBe(true)

    })
    

    test("it should return an empty array if only row in input is empty.", () => {
        const input = [[]]
        const expected = []

        const result = ListRects.listRects(input)
        const arrayEquality = ListRects.arrayEquals(input, result)
        expect(arrayEquality).toBe(true)
    })

    test("it should return an empty array if all rows in input are empty.", () => {
        const input = [[], [], []]
        const expected = []

        const result = ListRects.listRects(input)
        const arrayEquality = ListRects.arrayEquals(input, result)
        expect(arrayEquality).toBe(true)
    })

    test("it should return -1 if there are no rows in input.", () => {
        const input = []
        const expected = -1

        const result = ListRects.listRects(input)
        expect(result).toBe(-1)
    })

    test("it should return -1 if input is null", () => {
        const input = null
        const expected = -1

        const result = ListRects.listRects(input)
        expect(result).toBe(-1)
    })

    test("it should return -1 if input is not an array", () => {
        const input = 42
        const expected = -1

        const result = ListRects.listRects(input)
        expect(result).toBe(-1)
    })

    test("it should return -1 if input rows are not the same length.", () => {
        const input = [
            [0, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
        const expected = -1

        const result = ListRects.listRects(input)
        expect(result).toBe(-1)
    })
})