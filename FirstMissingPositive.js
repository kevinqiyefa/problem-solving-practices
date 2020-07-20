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
var firstMissingPositive = function (nums) {
  // let i = 0;
  // let n = nums.length;
  // while (i < n) {
  //   let cur = nums[i];
  //   if (cur > 0 && cur <= n && nums[cur - 1] !== cur) {
  //     [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
  //   } else {
  //     i++;
  //   }
  // }

  // for (let j = 0; j < n; j++) {
  //   if (nums[j] !== j + 1) return j + 1;
  // }

  // return i + 1;

  if (!nums || !nums.length) return 1;

  let hasOne = false;
  // convert all numbers thats > nums.length and <=0 to 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      hasOne = true;
    }

    if (nums[i] > nums.length || nums[i] <= 0) {
      nums[i] = 1;
    }
  }

  if (!hasOne) return 1;

  //visit all the index val
  for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]) - 1;
    if (nums[idx] > 0) {
      nums[idx] = -nums[idx];
    }
  }

  //last, check if there's a non-negative number in arr
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return i + 1;
  }

  //else, return the length+1
  return nums.length + 1;
};
