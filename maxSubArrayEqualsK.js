// Maximum Size Subarray Sum Equals k

// Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

// Example 1:

// Given nums = [1, -1, 5, -2, 3], k = 3,
// return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)
// Example 2:

// Given nums = [-2, -1, 2, 1], k = 1,
// return 2. (because the subarray [-1, 2] sums to 1 and is the longest)
// Follow Up:

// Can you do it in O(n) time?

function maxSubArrayLen(nums, k) {
  let sum = 0;
  let max = 0;
  let preSum = { 0: -1 };

  nums.forEach((num, i) => {
    sum += num;

    if (preSum.hasOwnProperty(sum - k)) {
      max = Math.max(max, i - preSum[sum - k]);
    }
    if (!preSum[sum]) preSum[sum] = i;
  });

  return max;
}
