// Write a function findPair that takes an unsorted array and a number n.

// Find if there exists a pair of elements in the array whose difference is n.

// This function should return true if the pair exists or false if it does not.

// Examples
// findPair([6, 1, 4, 10, 2, 4], 2) // true

// findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1) // true

// findPair([4, -2, 3, 10], -6) // true

// findPair([6, 1, 4, 10, 2, 4], 22) // false

// findPair([], 0) // false

// findPair([5, 5], 0) // true

// findPair([1, 3, 4, 6], -2) // true

// findPair([0, 1, 3, 4, 6], -2) // true

// /**

// the following two are the same numbers with different ordering:
//  4 - -4 = 8
//  -4 - 4 = -8

// **/

// findPair([-4, 4], -8) // true

// findPair([-4, 4], 8) // true

// Time & Space Requirements
// Don't submit the brute force O(n^2) solution!

// You have two options to solve the problem:

// Option 1:

// Time Complexity - O(n)
// Space Complexity - O(n)

// Option 2:

// Time Complexity - O(n lg n)
// Space Complexity - O(1)

function findPair(arr, n) {
  // add whatever parameters are necessary

  let s = new Set();
  for (let i of arr) {
    if (s.has(i)) {
      return true;
    } else {
      s.add(n + i);
      s.add(i - n);
      s.add(n - i);
    }
  }

  return false;
}
