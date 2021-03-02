// 611. Valid Triangle Number

// Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
// Example 1:
// Input: [2,2,3,4]
// Output: 3
// Explanation:
// Valid combinations are:
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3
// Note:
// The length of the given array won't exceed 1000.
// The integers in the given array are in the range of [0, 1000].

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
	if (nums.length < 3) return 0;

	nums.sort((a, b) => a - b);
	let count = 0;

	for (let k = nums.length - 1; k > 1; k--) {
		let j = k - 1,
			i = 0;
		while (i < j) {
			if (nums[i] + nums[j] > nums[k]) {
				count += j - i;
				j--;
			} else {
				i++;
			}
		}
	}

	return count;
};
