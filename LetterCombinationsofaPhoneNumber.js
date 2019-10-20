// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let numToLetters = {
    '0': '',
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  let res = [];

  if (digits.length === 0) {
    return res;
  }

  function combinations(nums, idx, tempStr) {
    if (idx === digits.length) {
      res.push(tempStr);
      return;
    }
    let letters = numToLetters[digits[idx]];
    for (let c of letters) {
      combinations(nums, idx + 1, tempStr + c);
    }
  }

  combinations(digits, 0, '');

  return res;
};
