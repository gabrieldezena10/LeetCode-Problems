"use strict";
/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/
function mySqrt(x) {
    return Math.floor(Math.sqrt(x));
}
;
console.log(mySqrt(144)); //12
console.log(mySqrt(90)); //9

function mySqrt2(x) {
    let left = 0;
    let right = x;
    while (right >= left) {
        let middleElement = Math.floor((left + right) / 2);
        if (middleElement * middleElement === x) {
            return middleElement;
        }
        if (middleElement * middleElement > x) {
            right = middleElement - 1;
        }
        else {
            left = middleElement + 1;
        }
    }
    return right;
};

console.log(mySqrt2(144)); //12
console.log(mySqrt2(90)); //9
