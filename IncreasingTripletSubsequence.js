// Increasing Triplet Subsequence

// Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

// Formally the function should:

// Return true if there exists i, j, k
// such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
// Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

// Example 1:

// Input: [1,2,3,4,5]
// Output: true
// Example 2:

// Input: [5,4,3,2,1]
// Output: false

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if (!nums || nums.length < 3) return false;

  let m1 = Infinity;
  let m2 = Infinity;

  for (let n of nums) {
    if (n <= m1) {
      m1 = n;
    } else if (n <= m2) {
      m2 = n;
    } else {
      return true;
    }
  }

  return false;
};
