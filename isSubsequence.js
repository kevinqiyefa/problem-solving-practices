// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('notasubstring', 'banana'); // false
// isSubsequence('almost', 'almossssss'); // false
// isSubsequence('abc', 'acb'); // false (order matters)

// Your solution MUST have the following complexities:

// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.

  let j = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str1[j] === str2[i] && ++j === str1.length) return true;
  }

  return false;
}
