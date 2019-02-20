// 118. Pascal's Triangle
// Easy

// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let ans = [];

  for (let i = 0; i < numRows; i++) {
    let cur = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        cur.push(1);
      } else {
        let pre = ans[i - 1];
        cur.push(pre[j] + pre[j - 1]);
      }
    }

    ans.push(cur);
  }

  return ans;
};
