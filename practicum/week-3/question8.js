/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var dInt = -1;
    for (var i = 0; i < input.length; i++){
        var occur = 1;
        for (var j = 0; j <input.length; j++){
            if (input[j] == input[i] && i !=j){
                occur += 1;
            } 
        }
        if (occur == input[i]) {
            if (input[i] > dInt) {
                dInt = input[i];
            }
        }
    }
    return dInt;
};