// 31. Next Permutation
// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function nextPermutation(nums) {
  let i = nums.length - 2;

  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }

  //if we didn't reach the start of nums array
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }
  //arrange ascendingly/reverse the descending order
  let begin = i + 1;
  reverse(nums, begin);
}

function reverse(nums, start) {
  let i = start,
    j = nums.length - 1;
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
