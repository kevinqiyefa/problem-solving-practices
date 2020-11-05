// 74. Search a 2D Matrix

// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
// Output: false
// Example 3:

// Input: matrix = [], target = 0
// Output: false

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	if (!matrix || !matrix.length || matrix[0][0] > target) return false;
	let row = matrix.length;
	let col = matrix[0].length;

	let left = 0,
		right = row * col - 1;

	while (left <= right) {
		let mid = ((left + right) / 2) >> 0;

		let r = (mid / col) >> 0;
		let c = mid % col;

		let curVal = matrix[r][c];

		if (curVal === target) {
			return true;
		} else if (curVal < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return false;
};
