/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var min = n;
    var max = 0;
    n = n.toString();
    for (var i = 0; i < n.length; i++) {
        if (n.charAt(i) > max){
            max = n.charAt(i);
        } if (n.charAt(i) <= min) {
            min = n.charAt(i);
        }
    }

    return max - min;
};