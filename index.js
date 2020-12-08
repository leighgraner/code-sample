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

                // todo: is maybe-do a good pattern?
                // todo: Do I want to pass the list in?

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
            else if (value !== 0) {
                throw new Error("Unexpected value found: " + val)
            }
        })
    })

    return result

}

/**
 * TODO - specify that it can contain the pt
 * @param {int} i 
 * @param {int} j 
 * @param {Array[Array[Array]]} rects 
 */
function findFirstAdjacentRectangle(i, j, rects) {

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


/**
 * Takes two arrays, and returns whether they are the same length and
 * their elements, in order, are strictly equal between the two arrays.
 * @param {Array} a 
 * @param {Array} b 
 */
exports.arrayStrictlyEquals = function (a, b) {

    if (!(Array.isArray(a) && Array.isArray(b))) {
        return false
    }

    if (a.length != b.length) {
        return false
    }

    if ((a.length == 0) && (b.length == 0)) {
        return true
    }

    if (a.every((value, i) => value === b[i])) {
        return true
    }

    return false
}

