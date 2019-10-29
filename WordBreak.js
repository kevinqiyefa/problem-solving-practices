// 139. Word Break

// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  //     let set = new Set(wordDict);
  //     let checked= new Map();

  //     function helper(str){
  //         if(checked.has(str)){
  //             return checked.get(str)
  //         }

  //         if(set.has(str)){
  //             checked.set(str, true)
  //             return true;
  //         }

  //         for(let i = 1 ; i < str.length; i++){
  //             let left = str.substring(0, i);
  //             let right = str.substring(i);
  //             if(helper(left) && set.has(right)){
  //                 checked.set(str, true)
  //                 return true;
  //             }
  //         }
  //         checked.set(str, false)
  //         return false;
  //     }

  //     return helper(s)

  //dp

  let arr = Array(s.length + 1).fill(false);
  arr[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const word = s.slice(j, i);
      if (arr[j] && wordDict.includes(word)) {
        arr[i] = true;
        break;
      }
    }
  }

  return arr[s.length];
};
