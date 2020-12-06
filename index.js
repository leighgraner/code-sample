// Rectangle Finder
//
// This program takes a 2D array of 0s and 1s, and returns an array of
// the coordinates of the start and end point of each rectangle of 1s.
//
// A code sample by Leigh Graner
//
// See tests in index.tests.js.

exports.listRects = function(input) {

    //todo: check input formatting, etc -LG

    let result = -1
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

