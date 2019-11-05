// Shortest Word Distance I

// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// For example, Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = "coding", word2 = "practice", return 3. Given word1 = "makes", word2 = "coding", return 1.

// Note

// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

// Analysis

// We can scan the list and use two pointers to record the most recent indexes of the two words. Then we update the distance and the global minimum distance.

function swd(words, w1, w2) {
  let recIdxA = -1;
  let recIdxB = -1;
  let res = words.length;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === w1) {
      recIdxA = i;
    } else if (words[i] === w2) {
      recIdxB = i;
    }

    if (recIdxA >= 0 && recIdxB >= 0) {
      res = Math.min(res, Math.abs(recIdxA - recIdxB));
    }
  }

  return res;
}

const words = ['practice', 'makes', 'perfect', 'coding', 'makes'];
const word1 = 'coding',
  word2 = 'practice'; //3
// const word1 = "makes", word2 = "coding";  //1

swd(words, word1, word2);
