// 994. Rotting Oranges

// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	const ROTTEN = 2;
	const FRESH = 1;

	let queue = [];
	let freshOranges = 0;
	let directions = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1]
	];

	//count the rotten and fresh orange
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			if (grid[row][col] === ROTTEN) {
				queue.push([row, col]);
			}

			if (grid[row][col] === FRESH) {
				freshOranges++;
			}
		}
	}

	let rottenSize = queue.length;

	let minutes = 0;

	// bfs to convert fresh oranges to rotten oranges.
	while (queue.length) {
		if (!rottenSize) {
			minutes++;
			rottenSize = queue.length;
		}

		let curRottenOrange = queue.shift();
		rottenSize--;

		let curRow = curRottenOrange[0];
		let curCol = curRottenOrange[1];

		//rotting 4 directions
		directions.forEach((dir) => {
			let nextDirRow = curRow + dir[0];
			let nextDirCol = curCol + dir[1];

			if (
				nextDirRow >= 0 &&
				nextDirRow < grid.length &&
				nextDirCol >= 0 &&
				nextDirCol < grid[0].length
			) {
				if (grid[nextDirRow][nextDirCol] === FRESH) {
					grid[nextDirRow][nextDirCol] = ROTTEN;
					queue.push([nextDirRow, nextDirCol]);
					freshOranges--;
				}
			}
		});
	}

	return freshOranges > 0 ? -1 : minutes;
};
