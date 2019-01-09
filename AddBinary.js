// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let endA = a.length - 1;
  let endB = b.length - 1;

  let carry = 0;
  let ans = '';

  while (endA >= 0 || endB >= 0 || carry) {
    let val = carry;
    if (a[endA]) val += +a[endA--];
    if (b[endB]) val += +b[endB--];

    carry = val > 1 ? 1 : 0;
    let rem = val % 2;
    ans = rem + ans;
  }

  return ans;
};
