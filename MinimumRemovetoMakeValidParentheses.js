// 1249. Minimum Remove to Make Valid Parentheses
// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.
// Example 4:

// Input: s = "(a(b(c)d)"
// Output: "a(b(c)d)"

// Constraints:

// 1 <= s.length <= 10^5
// s[i] is one of  '(' , ')' and lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let res = '';
  let temp = '';

  // remove all the extra ")"
  let open = 0;
  for (let c of s) {
    if (c === '(') {
      open++;
    }

    if (c === ')') {
      if (!open) continue;
      open--;
    }
    temp += c;
  }

  // remove all the extra "(" if there's any
  if (open) {
    for (let c = temp.length - 1; c >= 0; c--) {
      if (temp[c] === '(') {
        if (open-- > 0) continue;
      }

      res = temp[c] + res;
    }
  } else {
    return temp;
  }

  return res;
};
