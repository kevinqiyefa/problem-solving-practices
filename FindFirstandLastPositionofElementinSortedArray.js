// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let res = [-1, -1];
  if (!nums.length) return res;

  let leftIdx = bsLeft(nums, 0, nums.length - 1, target);
  let rightIdx;

  if (leftIdx === -1) {
    return res;
  }

  rightIdx = bsRight(nums, 0, nums.length - 1, target);

  return [leftIdx, rightIdx];
};

function bsLeft(nums, start, end, target) {
  let idx = -1;

  while (start <= end) {
    let mid = ((start + end) / 2) >> 0;

    if (nums[mid] >= target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    if (nums[mid] === target) {
      idx = mid;
    }
  }

  return idx;
}

function bsRight(nums, start, end, target) {
  let idx = -1;
  while (start <= end) {
    let mid = ((start + end) / 2) >> 0;

    if (nums[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    if (nums[mid] === target) idx = mid;
  }

  return idx;
}
