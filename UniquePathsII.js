// 63. Unique Paths II
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and space is marked as 1 and 0 respectively in the grid.

// Example 1:

// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
// Example 2:

// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	let m = obstacleGrid.length;
	let n = obstacleGrid[0].length;
	let arr = obstacleGrid;

	if (arr[0][0] === 1) return 0;

	arr[0][0] = 1;

	for (let i = 1; i < m; i++) {
		arr[i][0] = arr[i][0] === 0 && arr[i - 1][0] === 1 ? 1 : 0;
	}
	for (let j = 1; j < n; j++) {
		arr[0][j] = arr[0][j] === 0 && arr[0][j - 1] === 1 ? 1 : 0;
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			if (arr[i][j] === 1) {
				arr[i][j] = 0;
			} else {
				arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
			}
		}
	}

	return arr[m - 1][n - 1];
};
