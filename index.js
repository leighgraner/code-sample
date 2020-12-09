// List Rectangles
//
// A code sample by Leigh Graner
//
// See tests in index.tests.js.


/**
 * Takes a 2D array of 0s and 1s, and returns an array of coordinates of
 * the start and end point of each rectangle of 1s. The input must not
 * contain other values, and rectangles of 1s must not be adjacent.
 * @param {Array[Array]} input
 */
exports.listRects = function (input) {

    let standardRowLength = -1
    let rects = []

    // Ensure input is valid:

    if (!Array.isArray(input)) {
        throw new Error("Input is not an array.")
    }
    else if (input.length === 0) {
        throw new Error("Input is not an array of arrays.")
    }

    for (let i=0; i<input.length; i++) {
        const row = input[i]

        // Ensure row is valid:

        if (!Array.isArray(row)) { 
            throw new Error("Value is not an array: " + row) 
        }

        if (standardRowLength < 0) {
            standardRowLength = row.length
        }
        else if (row.length !== standardRowLength) {
            throw new Error("Rows are not the same length.")
        }

        // Process each value in row:

        for (let j=0; j<row.length; j++) {
            const val = row[j]
            if (val === 1) {

                let adjRect = findFirstAdjacentRectangle(i, j, rects)
                if (adjRect != null) {

                    // Grow the rectangle to include the new point.
                    if (i < adjRect[0][0]) {
                        adjRect[0][0] = i
                    }
                    else if (i > adjRect[1][0]) {
                        adjRect[1][0] = i
                    }

                    if (j < adjRect[0][1]) {
                        adjRect[0][1] = j
                    }
                    else if (j > adjRect[1][1]) {
                        adjRect[1][1] = j
                    }

                    // Skip our iteration within this row to
                    // the end of this rectangle.
                    j = adjRect[1][1]
                }
                else {
                    // add a new 1x1 rectangle
                    rects.push([[i, j], [i, j]])
                }
            }
            else if (val !== 0) {
                throw new Error("Unexpected value found: " + val)
            }
        }
    }

    return rects
}

/**
 * Takes coordinates i and j, and a list of rectangles. Returns the first rectangle
 * which is adjacent to or contains those coordinates (not considering corner adjacency).
 * Each rectangle must be specified as an array of two corner points, where each
 * corner point is an array of two coordinates, i and j.
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
