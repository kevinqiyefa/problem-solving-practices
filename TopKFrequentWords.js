// 692. Top K Frequent Words

// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.
// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Input words contain only lowercase letters.
// Follow up:
// Try to solve it in O(n log k) time and O(n) extra space.

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let wordsCount = {};
  let freqArr = Array(words.length + 1).fill(0);
  let res = [];

  for (let w of words) {
    wordsCount[w] = wordsCount[w] + 1 || 1;
  }

  //     for(let key in wordsCount){
  //         let idx = wordsCount[key];
  //         if(freqArr[idx]){
  //             freqArr[idx].push(key);
  //         } else{
  //             freqArr[idx] = [key];
  //         }
  //     }

  //     //freqArr  -> [ 0, [ 'leetcode', 'coding' ], [ 'i', 'love' ], 0, 0, 0, 0 ]

  //     while(res.length<k){
  //         let lastItem = freqArr.pop();
  //         if(lastItem){
  //             lastItem = lastItem.length>1 ? lastItem.sort(): lastItem
  //             res = [...res, ...lastItem]
  //         }
  //     }

  //     res.length = k;
  // return res;

  let sortedWords = Object.keys(wordsCount).sort((a, b) => {
    if (wordsCount[a] === wordsCount[b]) {
      return a > b ? 1 : -1;
    } else {
      return wordsCount[b] - wordsCount[a];
    }
  });

  sortedWords.length = k;

  return sortedWords;
};
