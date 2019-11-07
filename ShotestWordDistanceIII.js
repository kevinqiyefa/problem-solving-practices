// 245. Shortest Word Distance III

// This is a follow-up problem of Shortest Word Distance. The only difference is now word1 could be the same as word2.

// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.
// word1 and word2 may be the same and they represent two individual words in the list.

// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
// Given word1 = “makes”, word2 = “coding”, return 1.
// Given word1 = "makes", word2 = "makes", return 3.

function wordDistance(words, w1, w2) {
  let i1 = (i2 = -1);
  let res = words.length;

  for (let i = 0; i < words.length; i++) {
    if (w1 === words[i]) {
      i1 = i;

      if (i1 >= 0 && i2 >= 0) {
        //if i1===i2 then that meants 2 words are the same and we will return the previous 'res'
        res = i1 === i2 ? res : Math.min(res, Math.abs(i1 - i2));
      }
    }

    if (w2 === words[i]) {
      i2 = i;

      if (i1 >= 0 && i2 >= 0) {
        //if i1===i2 then that meants 2 words are the same and we will return the previous 'res'
        res = i1 === i2 ? res : Math.min(res, Math.abs(i1 - i2));
      }
    }
  }

  return res;
}

const words = ['practice', 'makes', 'perfect', 'coding', 'makes'];
// const word1 = "makes", word2 = "makes"; //3
const word1 = 'makes',
  word2 = 'coding'; //1

wordDistance(words, word1, word2);
