/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  var partitions = 0; 
  var count = 0;

  for (var i = 0; i < input.length; i++) {
      if (input.charAt(i) == 'a'){
        count++;
        if (i >= 1 && input[i-1] == "a"){
          count --;
        }
      } else if (input.charAt(i) == 'b'){
        count --;
        if (input[i-1] == "b" && input[i-2] != "a"){
          count ++;
        }
      }
      console.log(count);
      if (count == 0){
        partitions ++;
        
      }
    }
    console.log("next");
  return partitions;
};