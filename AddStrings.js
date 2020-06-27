// 415. Add Strings
// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let idx1 = num1.length - 1;
  let idx2 = num2.length - 1;

  let res = '';
  let carry = 0;

  while (idx1 >= 0 || idx2 >= 0 || carry) {
    let temp = 0;
    if (idx1 >= 0) {
      temp += +num1[idx1];
    }

    if (idx2 >= 0) {
      temp += +num2[idx2];
    }

    temp += carry;
    carry = temp >= 10 ? 1 : 0;
    let rem = temp % 10;

    res = rem + res;
    idx1--;
    idx2--;
  }

  return res;
};
