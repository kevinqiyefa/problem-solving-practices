// 347. Top K Frequent Elements

// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let numsCount = {};
  let res = [];

  let freqArr = Array(nums.length + 1).fill(0);

  for (let n of nums) {
    numsCount[n] = numsCount[n] + 1 || 1;
  }

  for (let key in numsCount) {
    let idx = numsCount[key];
    if (freqArr[idx]) {
      freqArr[idx].push(key);
    } else {
      freqArr[idx] = [key];
    }
  }

  while (res.length < k) {
    let lastItem = freqArr.pop();
    if (lastItem) {
      while (lastItem.length > 0) {
        res.push(lastItem.pop());
        if (res.length === k) return res;
      }
    }
  }

  return res;
};
