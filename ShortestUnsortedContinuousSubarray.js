// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

// You need to find the shortest such subarray and output its length.

// Example 1:
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Note:
// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order here means <=.

/**
 * @param {number[]} nums
 * @return {number}
 */

var findUnsortedSubarray = function(nums) {
  if (nums.length < 1) return 0;

  let min = nums[nums.length - 1];
  let max = nums[0];
  let start, end;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < max) {
      end = i;
    }

    max = Math.max(max, nums[i]);
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] > min) {
      start = j;
    }

    min = Math.min(min, nums[j]);
  }

  return start !== end ? end - start + 1 : 0;
};
