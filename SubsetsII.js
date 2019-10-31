// 90. Subsets II

// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = [];

  function helper(n, i, arr, taken) {
    if (i === n.length) {
      res.push(arr);
      return;
    }

    helper(n, i + 1, arr);
    if (taken || n[i] !== n[i - 1]) {
      helper(n, i + 1, [...arr, n[i]], true);
    }
  }
  nums.sort((a, b) => a - b);
  helper(nums, 0, [], false);

  return res;
};
