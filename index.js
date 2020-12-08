// Rectangle Finder
//
// A code sample by Leigh Graner
//
// See tests in index.tests.js.

// todo: state assumptions:
//          - no adjacent rectangles

/**
 * Takes a 2D array of 0s and 1s, and returns an array of coordinates of
 * the start and end point of each rectangle of 1s.
 * @param {Array[Array]} input - TODO
 */
exports.listRects = function (input) {

    standardRowLength = -1
    let rects = []

    // Ensure input is valid:

    if (!Array.isArray(input)) {
        throw new Error("Input is not an array.")
    }
    else if (input.length === 0) {
        throw new Error("Input is not an array of arrays.")
    }

    input.forEach(function (row, i) {

        // Ensure row is valid:

        if (!Array.isArray(row)) { throw new Error("Value is not an array: " + row) }

        if (standardRowLength < 0) {
            standardRowLength = row.length
        }
        else if (row.length !== standardRowLength) {
            throw new Error("Rows are not the same length.")
        }

        // Process each value in row:

        input[i].forEach(function (val, j) {
            if (val === 1) {

                let adjacentRectangle = findFirstAdjacentRectangle(i, j, rects)
                if (adjacentRectangle != null) {

                    // Grow the rectangle to include the new point.
                    if (i < adjacentRectangle[0][0]) {
                        adjacentRectangle[0][0] = i
                    }
                    else if (i > adjacentRectangle[1][0]) {
                        adjacentRectangle[1][0] = i
                    }

                    if (j < adjacentRectangle[0][1]) {
                        adjacentRectangle[0][1] = j
                    }
                    else if (j > adjacentRectangle[1][1]) {
                        adjacentRectangle[1][1] = j
                    }
                }
                else {

                    // add a new 1x1 rectangle
                    rects.push([[i, j], [i, j]])
                }
            }
            else if (val !== 0) {
                throw new Error("Unexpected value found: " + val)
            }
        })
    })

    return rects

}

/**
 * TODO - specify that it can contain the pt
 * @param {int} i 
 * @param {int} j 
 * @param {Array[Array[Array]]} rects 
 */
function findFirstAdjacentRectangle(i, j, rects) {

    if (!Array.isArray(rects)) {
        throw new Error("Input 'rects' is not an array.")
    }

    for (let iter = 0; iter < rects.length; iter++) {
        let rect = rects[iter]

        if (((i >= (rect[0][0] - 1)) &&
            (i <= (rect[1][0] + 1))) &&
            ((j >= (rect[0][1])) &&
                (j <= (rect[1][1])))
            ||
            ((i >= (rect[0][0])) &&
                (i <= (rect[1][0]))) &&
            ((j >= (rect[0][1] - 1)) &&
                (j <= (rect[1][1] + 1)))) {
            return rect
        }
    }
    return null
}
