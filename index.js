// Rectangle Finder
//
// This program takes a 2D array of 0s and 1s, and returns an array of
// the coordinates of the start and end point of each rectangle of 1s.
//
// A code sample by Leigh Graner
//
// See tests in index.tests.js.

exports.listRects = function(input) {

    standardRowLength = -1
    let result = []

    if (!Array.isArray(input)) {
        throw new Error("Input is not an array.")
    }
    else if (input.length === 0) {
        throw new Error("Input is not an array of arrays.")
    }

    input.forEach(function (row, i) {

        if (!Array.isArray(row)) { throw new Error("Value is not an array: " + row)}

        if (standardRowLength < 0) {
            standardRowLength = row.length
        }
        else if (row.length !== standardRowLength) {
            throw new Error("Rows are not the same length.")
        }

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

