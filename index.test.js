const { test, expect } = require("@jest/globals");
const App = require('./index')

const input4 = null

// Run the test cases:
describe('arrayStrictlyEquals()', () => {

    test ("it should return true if inputs are arrays whose length and elements are strictly equal.", () => {
        const a = ['a', 'b', 'c']
        const b = ['a', 'b', 'c']

        const result = App.arrayStrictlyEquals(a, b)
        expect(result).toBe(true)
    })

    test ("it should return false if inputs are arrays whose length and elements are only loosely equal.", () => {
        const a = ['8', 6, 7]
        const b = [8, 6, 7]

        const result = App.arrayStrictlyEquals(a, b)
        expect(result).toBe(false)
    })

    test ("it should return false if one of the inputs is not an array.", () => {
        const a = 0
        const b = ['a', 'b', 'c']

        const result = App.arrayStrictlyEquals(a, b)
        expect(result).toBe(false)
    })

    test ("it should return true if both inputs are empty arrays.", () => {
        const a = []
        const b = []

        const result = App.arrayStrictlyEquals(a, b)
        expect(result).toBe(true)
    })
})
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

        const result = App.listRects(input)
        const arrayEquality = App.arrayStrictlyEquals(input, result)
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

        const result = App.listRects(input)
        const arrayEquality = App.arrayStrictlyEquals(input, result)
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

        const result = App.listRects(input)
        const arrayEquality = App.arrayStrictlyEquals(input, result)
        expect(arrayEquality).toBe(true)

    })

    test("it should work correctly for a single rectangle in a 1x1 grid.", () => {
        const input =
            [
                [1]
            ]

        const expected = [
            [[0,0], [0,0]]
        ]

        const result = App.listRects(input)
        const arrayEquality = App.arrayStrictlyEquals(input, result)
        expect(arrayEquality).toBe(true)

    })

    test("it should work correctly for a single 0 in a 1x1 grid.", () => {
        const input =
            [
                [0]
            ]

        const expected = []

        const result = App.listRects(input)
        const arrayEquality = App.arrayStrictlyEquals(input, result)
        expect(arrayEquality).toBe(true)

    })
    

    test("it should return an empty array if only row in input is empty.", () => {
        const input = [[]]
        const expected = []

        const result = App.listRects(input)
        const arrayEquality = App.arrayStrictlyEquals(input, result)
        expect(arrayEquality).toBe(true)
    })

    test("it should return an empty array if all rows in input are empty.", () => {
        const input = [[], [], []]
        const expected = []

        const result = App.listRects(input)
        const arrayEquality = App.arrayStrictlyEquals(input, result)
        expect(arrayEquality).toBe(true)
    })

    test("it should return -1 if there are no rows in input.", () => {
        const input = []
        const expected = -1

        const result = App.listRects(input)
        expect(result).toBe(-1)
    })

    test("it should throw an error if there are values other than 0 or 1.", () => {
        const input =
            [
                [0, 0, 0],
                [0, 'b', 0],
                [0, 0, 0]
            ]

        const t = () => {
            return App.listRects(input)
        }
        expect(t).toThrow(Error)
    })

    test("it should throw an error if input is null", () => {
        const input = null
        const expected = -1

        const t = () => {
            return App.listRects(input)
        }
        expect(t).toThrow(Error)
    })

    test("it should throw an error if input is not an array", () => {
        const input = 42
        const expected = -1

        const t = () => {
            return App.listRects(input)
        }
        expect(t).toThrow(Error)
    })

    test("it should throw an error if input rows are not the same length.", () => {
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

        const t = () => {
            return App.listRects(input)
        }
        expect(t).toThrow(Error)
    })
})