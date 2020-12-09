# List Rectangles

by Leigh Graner

This is a code sample demonstrating a function for listing all rectangles of 1s in a 2D array of 0s and 1s. 

The algorithm works by iterating through each row and value. When a 1 is found, the program checks whether it is adjacent to a currently listed rectangle. If so, we grow that rectangle to include this 1's location, then advance the iterator in this row to the end of the rectangle. If not, a new 1x1 rectangle is listed at this location.
