// 18. 4Sum

// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Notice that the solution set must not contain duplicate quadruplets.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [], target = 0
// Output: []

// Constraints:

// 0 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	nums.sort((a, b) => a - b);
	return kSum(nums, 4, target);
};

function kSum(nums, k, target) {
	let res = [];

	if (
		!nums.length ||
		nums.length < k ||
		nums[0] * k > target ||
		target > nums[nums.length - 1] * k
	)
		return res;

	if (k === 2) return twoSum(nums, target);

	for (let i = 0; i < nums.length - k + 1; i++) {
		if (i === 0 || nums[i] !== nums[i - 1]) {
			let n = nums.slice(i + 1);
			let t = target - nums[i];

			let set = kSum(n, k - 1, t);

			for (s of set) {
				s = [nums[i], ...s];
				res.push(s);
			}
		}
	}

	return res;
}

function twoSum(nums, target) {
	let lo = 0,
		hi = nums.length - 1;
	let res = [];
	while (lo < hi) {
		let sum = nums[lo] + nums[hi];

		if (sum === target) {
			res.push([nums[lo], nums[hi]]);
			while (lo < hi && nums[lo] === nums[lo + 1]) {
				lo++;
			}

			while (lo < hi && nums[hi] === nums[hi - 1]) {
				hi--;
			}
			lo++;
			hi--;
		} else if (sum < target) {
			lo++;
		} else {
			hi--;
		}
	}

	return res;
}
