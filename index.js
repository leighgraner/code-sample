// Rectangle Finder
//
// A code sample by Leigh Graner
//
// See tests in index.tests.js.

/**
 * Takes a 2D array of 0s and 1s, and returns an array of coordinates of
 * the start and end point of each rectangle of 1s.
 * @param {Array[Array]} input - TODO
 */
exports.listRects = function(input) {

    standardRowLength = -1
    let result = []

    // Ensure input is valid:

    if (!Array.isArray(input)) {
        throw new Error("Input is not an array.")
    }
    else if (input.length === 0) {
        throw new Error("Input is not an array of arrays.")
    }

    input.forEach(function (row, i) {

        // Ensure row is valid:

        if (!Array.isArray(row)) { throw new Error("Value is not an array: " + row)}

        if (standardRowLength < 0) {
            standardRowLength = row.length
        }
        else if (row.length !== standardRowLength) {
            throw new Error("Rows are not the same length.")
        }

        // Process each value in row:

        input[i].forEach(function (val, j) { 
            if (val === 1) {

            } else if (val === 0) {

            }
            else {
                throw new Error("Unexpected value found: " + val)
            }
        })
    })

    return result
    
}

/**
 * Takes two arrays, and returns whether they are the same length and
 * their elements, in order, are strictly equal between the two arrays.
 * @param {Array} a 
 * @param {Array} b 
 */
exports.arrayStrictlyEquals = function(a, b) {

    if (!(Array.isArray(a) && Array.isArray(b))) { 
        return false 
    }

    if (a.length != b.length) {
        return false
    }

    if ((a.length == 0) && (b.length == 0)) {
        return true
    }

    if (a.every((value, i) => value === b[i]))
    {
        return true
    }

    return false
}

