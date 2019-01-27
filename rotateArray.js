// 189. Rotate Array

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
// Note:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  //handle edge cases
  if (k > nums.length) k = k % nums.length;

  //ex:  [1,2,3,4,5,6,7] and k = 3

  //reverse the whole array: [7,6,5,4,3,2,1]
  nums.reverse();

  //reverse the 0 to k elements: [5,6,7,4,3,2,1];
  for (let i = 0, j = k - 1; i < j; i++, j--) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  //reverse the k to the end of the array: [5,6,7,1,2,3,4]
  for (let i = k, j = nums.length - 1; i < j; i++, j--) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
};
