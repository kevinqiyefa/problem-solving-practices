// 438. Find All Anagrams in a String

// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // let obj = {};
  // let pLength = p.length;
  // let ans = [];

  // let pObj = {};

  // if (s.length < p.length) {
  //   return [];
  // }

  // for (let i of p) {
  //   pObj[i] = pObj[i] + 1 || 1;
  // }

  // for (let i = 0, j = 0; i <= s.length; i++) {
  //   if (i - j < pLength) {
  //     obj[s[i]] = obj[s[i]] + 1 || 1;
  //   } else {
  //     if (isAnagrams(obj, pObj)) {
  //       ans.push(j);
  //     }

  //     if (obj[s[j]] > 1) {
  //       obj[s[j]]--;
  //     } else {
  //       delete obj[s[j]];
  //     }
  //     obj[s[i]] = obj[s[i]] + 1 || 1;
  //     j++;
  //   }
  // }

  // return ans;

  let res = [];
  let slow = 0,
    fast = 0;
  let hashTable = {};

  if (!s || s.length < p.length) return [];

  for (let c of p) {
    hashTable[c] = hashTable[c] + 1 || 1;
  }

  let count = Object.keys(hashTable).length;

  while (fast < s.length) {
    let fastChar = s[fast++];
    if (fastChar in hashTable) hashTable[fastChar]--;
    if (hashTable[fastChar] === 0) count--;

    if (!count) res.push(slow);

    if (fast - slow === p.length) {
      let slowChar = s[slow++];
      if (slowChar in hashTable) hashTable[slowChar]++;
      if (hashTable[slowChar] === 1) count++;
    }
  }

  return res;
};

// const isAnagrams = (obj, pObj) => {
//   for (let k in pObj) {
//     if (obj[k] !== pObj[k]) return false;
//   }

//   return true;
// };
