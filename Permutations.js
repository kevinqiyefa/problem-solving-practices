// 46. Permutations

// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	let res = [];

	function helper(arr, l, r) {
		if (l === r) {
			res.push(arr);
			return;
		}

		for (let i = l; i <= r; i++) {
			[arr[l], arr[i]] = [arr[i], arr[l]];
			helper([...arr], l + 1, r);
		}
	}

	helper(nums, 0, nums.length - 1);

	return res;
};
