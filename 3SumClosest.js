// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example:

// Given array nums = [-1, 2, 1, -4], and target = 1.

// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let lastIdx = nums.length - 1;
  let ans = nums[0] + nums[1] + nums[lastIdx];

  for (let i = 0; i < lastIdx - 1; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum < target) {
        j++;
      } else {
        k--;
      }
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum;
      }
    }
  }

  return ans;
};
