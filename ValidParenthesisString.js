// 678. Valid Parenthesis String

// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "(*)"
// Output: true
// Example 3:

// Input: s = "(*))"
// Output: true

// Constraints:

// 1 <= s.length <= 100
// s[i] is '(', ')' or '*'.

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let leftMin = 0;
  let leftMax = 0;
  for (let str of s) {
    if (str === "(") {
      leftMin++;
      leftMax++;
    } else if (str === ")") {
      leftMin--;
      leftMax--;
    } else {
      leftMin--;
      leftMax++;
    }
    // If we have more ')' than possible '(', invalid
    if (leftMax < 0) return false;

    // leftMin can't go below 0 (we can always use * as empty string)
    if (leftMin < 0) leftMin = 0;
  }

  // Check if we can balance all parentheses
  return leftMin <= 0 && leftMax >= 0;
};
