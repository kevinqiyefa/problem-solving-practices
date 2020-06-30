// 448. Find All Numbers Disappeared in an Array

// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let N = nums.length;
  let result = [];
  // for (let i = 0; i < N; i++) {
  //   nums[(nums[i] - 1) % N] += N;
  // }

  // for (let i = 0; i < N; i++) {
  //   if (nums[i] <= N) result.push(i + 1);
  // }

  for (let i = 0; i < N; i++) {
    //flip the num to negative
    let num = Math.abs(nums[i]) - 1;
    if (nums[num] > 0) nums[num] = -1 * nums[num];
  }

  for (let i = 0; i < N; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }

  return result;
};
