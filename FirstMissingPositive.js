// 41. First Missing Positive

// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    let cur = nums[i];
    if (cur > 0 && cur <= n && nums[cur - 1] !== cur) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    } else {
      i++;
    }
  }

  for (let j = 0; j < n; j++) {
    if (nums[j] !== j + 1) return j + 1;
  }

  return i + 1;
};
