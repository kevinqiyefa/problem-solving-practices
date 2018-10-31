// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let lastIdx = nums.length - 1;
  nums.sort((a, b) => a - b);

  let ans = [];

  for (let i = 0; i < lastIdx - 1; i++) {
    if (i >= 1 && nums[i - 1] === nums[i]) continue;
    let j = i + 1;
    let k = lastIdx;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1] && j < k) {
          j++;
        }
        while (nums[k] === nums[k - 1] && j < k) {
          k--;
        }
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return ans;
};
