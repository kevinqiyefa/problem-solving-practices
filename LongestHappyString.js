// 1405. Longest Happy String
// A string s is called happy if it satisfies the following conditions:

// s only contains the letters 'a', 'b', and 'c'.
// s does not contain any of "aaa", "bbb", or "ccc" as a substring.
// s contains at most a occurrences of the letter 'a'.
// s contains at most b occurrences of the letter 'b'.
// s contains at most c occurrences of the letter 'c'.
// Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: a = 1, b = 1, c = 7
// Output: "ccaccbcc"
// Explanation: "ccbccacc" would also be a correct answer.
// Example 2:

// Input: a = 7, b = 1, c = 0
// Output: "aabaa"
// Explanation: It is the only correct answer in this case.

// Constraints:

// 0 <= a, b, c <= 100
// a + b + c > 0

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  let chars = [
    ["a", a],
    ["b", b],
    ["c", c],
  ];

  let ans = [];
  let totalChars = a + b + c;
  while (ans.length < totalChars) {
    let n = ans.length;
    chars.sort((a, b) => b[1] - a[1]);

    // Choose which character to add next
    // If the last two characters are the same as the most frequent remaining character,
    // choose the second most frequent to avoid three consecutive same characters
    const isLast2Same = ans[n - 1] == ans[n - 2];
    const showChooseNextMostFreq = chars[0][0] === ans[n - 1] && isLast2Same;

    const nextChar = showChooseNextMostFreq ? chars[1] : chars[0];

    if (!nextChar[1]) break;
    ans.push(nextChar[0]);
    nextChar[1]--;
  }

  return ans.join("");
};
