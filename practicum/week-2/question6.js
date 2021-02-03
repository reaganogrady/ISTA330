/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var input = input.sort();
    var len = input.length;
    if (len % 2 != 0){
        return input[(len - 1)/2];
    } else {
        return (input[len/2] + input[(len/2) - 1]) / 2;
    }
};