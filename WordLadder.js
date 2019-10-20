// // 127. Word Ladder

// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.
// Example 2:

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let list = new Set(wordList);
  let letters = 'abcdefghijklmnopqrstuvwxyz';

  let queue = [beginWord];

  let len = 0;

  if (!list.has(endWord)) return 0;

  if (beginWord.length === 1) return 2;

  while (queue.length > 0) {
    let curWord = queue.pop();

    for (let i = 0; i < curWord.length; i++) {
      if (curWord[i] === endWord[i]) continue;

      for (let j = 0; j < letters.length; j++) {
        let newWord =
          curWord.substring(0, i) + letters[j] + curWord.substring(i + 1);

        if (list.has(newWord)) {
          queue.push(newWord);
          list.delete(newWord);
          len++;
        }

        if (newWord === endWord) return len;
      }
    }
  }

  return 0;
};
