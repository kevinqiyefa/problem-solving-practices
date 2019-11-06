// 244. Shortest Word Distance II

// Design a class which receives a list of words in the constructor, and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list. Your method will be called repeatedly many times with different parameters.

// Example:
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Input: word1 = “coding”, word2 = “practice”
// Output: 3
// Input: word1 = "makes", word2 = "coding"
// Output: 1
// Note:
// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

function WordDistance(words) {
  this.maps = {};

  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (w in this.maps) {
      this.maps[w].push(i);
    } else {
      this.maps[w] = [i];
    }
  }
}

WordDistance.prototype.shortest = function(w1, w2) {
  let w1Idxs = this.maps[w1];
  let w2Idxs = this.maps[w2];
  let i = (j = 0);
  let res = Infinity;

  while (i < w1Idxs.length && j < w2Idxs.length) {
    res = Math.min(res, Math.abs(w1Idxs[i] - w2Idxs[j]));
    if (w1Idxs[i] < w2Idxs[j]) i++;
    else j++;
  }

  return res;
};

const words = ['practice', 'makes', 'perfect', 'coding', 'makes'];
const word1 = 'coding',
  word2 = 'practice'; //3
// const word1 = "makes", word2 = "coding";  //1

let wd = new WordDistance(words);
wd.shortest(word1, word2);
