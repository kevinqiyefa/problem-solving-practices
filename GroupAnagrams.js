// 49. Group Anagrams

// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
//   //sorting
//   //      let hash = {};

//   //     for(var i = 0; i < strs.length; i++) {
//   //         let str = strs[i];
//   //         let key = Array.from(str).sort().join('')

//   //         hash[key] = hash[key] || [];
//   //         hash[key].push(str);
//   //     }

//   //     return Object.values(hash);

//   //counting
//   let hash = {};
//   let base = 'a'.charCodeAt(0);

//   for (let i = 0; i < strs.length; i++) {
//     let arr = Array(26).fill(0);
//     for (let j = 0; j < strs[i].length; j++) {
//       var code = strs[i][j].charCodeAt(0) - base;
//       arr[code]++;
//     }

//     let key = arr.join('');
//     hash[key] = hash[key] || [];
//     hash[key].push(strs[i]);
//   }

//   return Object.values(hash);
// };

var groupAnagrams = function(strs) {
  const hashTable = {};
  for (let s of strs) {
    let hashKey = createHash(s);
    if (hashTable[hashKey]) {
      hashTable[hashKey].push(s);
    } else {
      hashTable[hashKey] = [s];
    }
  }

  return Object.values(hashTable);
};

function createHash(str) {
  const hash = Array(26).fill(0);
  for (let i of str) {
    const idx = i.charCodeAt(0) - 97;
    hash[idx]++;
  }

  return hash.join('');
}
