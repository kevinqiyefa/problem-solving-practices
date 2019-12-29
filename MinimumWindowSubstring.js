// 76. Minimum Window Substring
// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s.length < t.length) return '';

  let hashMap = {};
  for (let char of t) {
    hashMap[char] = hashMap[char] + 1 || 1;
  }

  let count = t.length,
    slow = 0,
    fast = 0,
    startIdx = 0,
    minLen = Infinity;

  while (fast < s.length) {
    let rightMostChar = s[fast++];

    if (!(rightMostChar in hashMap)) continue;

    let rightMostCount = hashMap[rightMostChar]--;
    if (rightMostCount > 0) count--;

    while (count === 0) {
      let curLen = fast - slow;
      if (curLen < minLen) {
        minLen = curLen;
        startIdx = slow;
      }

      let leftMostChar = s[slow++];

      if (!(leftMostChar in hashMap)) continue;

      let leftMostCount = hashMap[leftMostChar]++;
      if (leftMostCount === 0) count++;
    }
  }

  return minLen === Infinity ? '' : s.substr(startIdx, minLen);
};
