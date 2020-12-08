// todo: address why I'm not DRYing this test code -LG

const { test, expect } = require("@jest/globals");
const App = require('./index')

describe('findFirstAdjacentRectangle', () => {
    const findFirstAdjacentRectangle = App.__get__('findFirstAdjacentRectangle')

    test("it should return a rectangle containing the point", () => {
        const result = findFirstAdjacentRectangle(4, 4, [[[0, 0], [5, 5]]])
        expect(result).toStrictEqual([[0, 0], [5, 5]])
    })
    test("it should return the first adjacent rectangle", () => {
        const rects = [
            [[0, 0], [3, 4]],
            [[4, 5], [8, 8]]
        ]
        const result = findFirstAdjacentRectangle(4, 4, rects)
        expect(result).toStrictEqual([[0, 0], [3, 4]])
    })
    test("it should return null if no adjacent rectangle", () => {
        const rects = [
            [[0, 0], [1, 1]],
            [[7, 10], [8, 12]]
        ]
        const result = findFirstAdjacentRectangle(2, 4, rects)
        expect(result).toBe(null)
    })
    test("it should throw an error if 'rects' is not an array", () => {
        const rects = 123
        const t = () => {
            return findFirstAdjacentRectangle(2, 4, rects)
        }
        expect(t).toThrow(Error)
    })
})

describe('listRects()', () => {
    test("it should return a list of all rectangles.", () => {
        const input0 = [
            [0, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
        const expected0 = [
            [[0, 7], [1, 8]],
            [[1, 3], [3, 4]],
            [[4, 0], [4, 2]],
            [[5, 6], [5, 6]]
        ]

        const result0 = App.listRects(input0)
        expect(result0).toStrictEqual(expected0)

        const input1 = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 0, 1],
            [1, 1, 0],
            [1, 1, 0]
        ]
        const expected1 = [
            [[0, 1], [1, 1]],
            [[2, 2], [2, 2]],
            [[3, 0], [4, 1]]
        ]

        const result1 = App.listRects(input1)
        expect(result1).toStrictEqual(expected1)
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
        expect(result).toStrictEqual(expected)
    })
    test("it should return an empty array if there are no rectangles.", () => {
        const input =
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]

        const expected = []

        const result = App.listRects(input)
        expect(result).toStrictEqual(expected)

    })

    test("it should work correctly for a single rectangle in a 1x1 grid.", () => {
        const input =
            [
                [1]
            ]

        const expected = [
            [[0, 0], [0, 0]]
        ]

        const result = App.listRects(input)
        expect(result).toStrictEqual(expected)

    })

    test("it should work correctly for a single 0 in a 1x1 grid.", () => {
        const input =
            [
                [0]
            ]

        const expected = []

        const result = App.listRects(input)
        expect(result).toStrictEqual(expected)

    })


    test("it should return an empty array if only row in input is empty.", () => {
        const input = [[]]
        const expected = []

        const result = App.listRects(input)
        expect(result).toStrictEqual(expected)
    })

    test("it should return an empty array if all rows in input are empty.", () => {
        const input = [[], [], []]
        const expected = []

        const result = App.listRects(input)
        expect(result).toStrictEqual(expected)
    })

    test("it should throw an error if input is an empty array.", () => {
        const input = []
        const expected = -1

        const t = () => {
            return App.listRects(input)
        }
        expect(t).toThrow(Error)
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