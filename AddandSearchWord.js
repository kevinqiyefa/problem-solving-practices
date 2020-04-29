// 211. Add and Search Word - Data structure design

// Design a data structure that supports the following two operations:

// void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

// Example:

// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// Note:
// You may assume that all words are consist of lowercase letters a-z.

/**
 * Initialize your data structure here.
 */

var WordDictionary = function () {
  this.root = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let key of word) {
    if (!(key in node)) {
      node[key] = {};
    }
    node = node[key];
  }
  node.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let node = this.root;

  function dfsFind(n, idx) {
    if (idx === word.length) return !!n.isWord;

    if (word[idx] === '.') {
      for (let k in n) {
        if (dfsFind(n[k], idx + 1)) return true;
      }
    } else if (n[word[idx]] !== undefined) {
      return dfsFind(n[word[idx]], idx + 1);
    }

    return false;
  }

  return dfsFind(node, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
