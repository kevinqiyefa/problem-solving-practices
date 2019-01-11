// 43. Multiply Strings

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
// Note:

// The length of both num1 and num2 is < 110.
// Both num1 and num2 contain only digits 0-9.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  let numObj = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
  };

  let n = num1.length,
    m = num2.length;
  let ans = Array(n + m).fill(0);
  let res = '';

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      let product = numObj[num1[i]] * numObj[num2[j]];

      let p1 = i + j;
      let p2 = i + j + 1;

      let sum = product + ans[p2];

      ans[p1] += (sum / 10) >> 0;
      ans[p2] = sum % 10;
    }
  }

  for (let i = 0; i < ans.length; i++) {
    if (!(ans[i] === 0 && !res)) {
      res += ans[i];
    }
  }

  return res;
};
