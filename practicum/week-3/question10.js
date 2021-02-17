/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    var minDist = 100;

    for (var i = 0; i < input.length; i ++ ) {
        for (var j = 0; j < input.length; j++) {
            var diff = Math.abs(input[i] - input[j]);
            if (diff < minDist && i!=j) {
                minDist = diff;
            }
        }
    }

    var group = [];
    var alreadyAdded = [];
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input.length; j++) {
            var diff = Math.abs(input[i] - input[j]);
            var pair = [];

            if (diff == minDist && !alreadyAdded.includes(input[i])) {

                if (input[i] > input[j]){
                    pair = [input[j], input[i]];
                } else {
                    pair = [input[i], input[j]];
                }
                
                alreadyAdded.push(input[i]);
                alreadyAdded.push(input[j]);
                group.push(pair);
            }
        }
    }
    return group.sort();
};