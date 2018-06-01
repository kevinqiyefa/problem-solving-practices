// Description

// Write a function called constructNote that accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M + N)
// Space Complexity: O(N)

// Examples

// constructNote('aa', 'abc') // false

// constructNote('abc', 'dcba') // true

// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(m, n) {
  // add whatever parameters you deem necessary - good luck!
  let obj1 = {},
    obj2 = {};

  for (let k1 of m) {
    obj1[k1] = obj1[k1] + 1 || 1;
  }

  for (let k2 of n) {
    obj2[k2] = obj2[k2] + 1 || 1;
  }

  for (let k in obj1) {
    if (obj1[k] > obj2[k] || obj2[k] === undefined) return false;
  }

  return true;
}
