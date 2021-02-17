/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  var triangle = [];
  for (var i = 0; i < n; i++){
    triangle[i] = [];
    for (var j = 0; j <= i; j++) {
      if (i == j | j == 0) {
        triangle[i].push(1); 
      } else {
        triangle[i].push(triangle[i - 1][j] + triangle[i-1][j-1]);
      }

    }
  }
  return triangle;

};