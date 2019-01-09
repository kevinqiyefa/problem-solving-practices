// 168. Excel Sheet Column Title

// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB
//     ...
// Example 1:

// Input: 1
// Output: "A"
// Example 2:

// Input: 28
// Output: "AB"

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let ans = '';

  while (n > 0) {
    let char = String.fromCharCode(((n - 1) % 26) + 'A'.charCodeAt(0));

    n = ((n - 1) / 26) >> 0;
    ans = char + ans;
  }

  return ans;
};
