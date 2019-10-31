// 5. Longest Palindromic Substring

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let tempStr = Array.from(s).join('#');
  let hashStr = ['#', ...tempStr, '#'];

  let curMaxArr = [];

  for (let i = 1; i < hashStr.length; i++) {
    let l = i;
    let r = i;

    while (l >= 0 && r < hashStr.length && hashStr[l] === hashStr[r]) {
      l--;
      r++;
    }

    if (r - l + 1 > curMaxArr.length) {
      curMaxArr = hashStr.slice(l + 1, r);
    }
  }

  let res = curMaxArr.reduce((a, cur) => (a += cur !== '#' ? cur : ''), '');
  return res;
};
