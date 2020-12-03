const { test, expect } = require("@jest/globals");
const ListRects = require('./index')


const input0 = 
[
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
    [[4, 0], [4 ,2]],
    [[5, 6], [5, 6]]
]

const unexpected0a = [
    [[1, 3], [3, 4]], // These rows are purposefully out of order.
    [[0, 7], [1, 8]],
    [[4, 0], [4 ,2]],
    [[5, 6], [5, 6]]
]

const unexpected0b = [
    [[0, 7], [1, 8]],
    [[1, 3], [3, 4]], // This array is purposefully missing a rectangle.
    [[5, 6], [5, 6]]
]

const input1 = 
[
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

const expected1 = [
    [[0, 0], [0, 0]],
]

const unexpected1a = [
    [[0, 0], [1, 1]],
]

const input2 = 
[]

const input3 = 
[[]]

const input4 = null

const input5 = 
[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

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
        [[4, 0], [4 ,2]],
        [[5, 6], [5, 6]]
    ]

    const result = ListRects.listRects(input)
    const arrayEquality = ListRects.arrayEquals(input, result)
    expect(arrayEquality).toBe(true)
})
})


// if (arrayEquals(result0, unexpected0a)) {
//     console.error("Test failed for case 0a.")
// }
// if (arrayEquals(result0, unexpected0b)) {
//     console.error("Test failed for case 0b.")
// }

// let result1 = listRects(input1)
// if (!arrayEquals(result1, expected1)) {
//     console.error("Test failed for case 1.")
// }

// let result2 = listRects(input2)
// if (result2 != -1) { 
//     console.error("Test failed for case 2.")
// }

// let result3 = listRects(input3)
// if (!arrayEquals(result3, [])) {
//     console.error("Test failed for case 3.")
// }
