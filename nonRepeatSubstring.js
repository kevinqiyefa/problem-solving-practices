// Write a function called nonRepeatSubstring which accepts a string and returns the longest substring where the characters in the substring do not repeat.

// Non-repeating characters means there are no two consecutive letters that are the same.

// You can assume the input string only has lowercase letters.

// Constraints:
// Time Complexity: O(N)
// Space Complexity: O(N)

// Examples

// nonRepeatSubstring('abb') // 'ab'

// nonRepeatSubstring('abccde') // 'abc'
// // 'abc' and 'cde' are equally as long, however 'abc' is leftmost

// nonRepeatSubstring('aaaabbbb') // 'ab'
// // 'ab' is the longest substring without repeating characters

function nonRepeatSubstring(str) {
  if (str.length <= 1) {
    return str;
  }

  let sub = '';
  let current = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === current) {
      current = str[i];
    } else {
      current += str[i];
      if (current.length > sub.length) {
        sub = current;
      }
    }
  }

  return sub;
}
console.log(nonRepeatSubstring('bb'));
console.log(nonRepeatSubstring('a'));
console.log(nonRepeatSubstring('abb'));
console.log(nonRepeatSubstring('abccde'));
console.log(nonRepeatSubstring('aaaabbbb'));
