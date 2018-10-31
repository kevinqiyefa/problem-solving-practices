// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:

// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  //solution #1 O(n^2)
  //     let count = 0;

  //     //iterate over the nums
  //     for (let start = 0; start < nums.length; start++) {
  //             let sum=0;
  //             for (let end = start; end < nums.length; end++) {
  //                 sum+=nums[end];
  //                 if (sum == k)
  //                     count++;
  //             }
  //         }

  //solution #2 O(n)
  //     return count;

  let sum = 0;
  let result = 0;
  let preSum = { 0: 1 };

  nums.forEach(n => {
    sum += n;
    if (preSum[sum - k]) {
      result += preSum[sum - k];
    }
    preSum[sum] = preSum[sum] + 1 || 1;
  });

  return result;
};
