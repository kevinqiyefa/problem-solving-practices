// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// Time Complexity - O(n)

function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!

  let s = new Set();
  let longest = 0;
  let i = 0,
    j = 0;

  while (i < str.length && j < str.length) {
    if (!s.has(str[j])) {
      s.add(str[j++]);

      longest = Math.max(longest, j - i);
    } else {
      s.delete(str[i++]);
    }
  }

  return longest;
}
