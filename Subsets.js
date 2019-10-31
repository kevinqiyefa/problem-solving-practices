// 78. Subsets

// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = [];

  function helper(n, idx, cur) {
    if (idx === n.length) {
      res.push(cur);
      return;
    }

    helper(n, idx + 1, cur);

    helper(n, idx + 1, [...cur, n[idx]]);
  }

  helper(nums, 0, []);

  return res;
};
