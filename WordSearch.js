// 79. Word Search

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Note: There will be some test cases with a board or a word larger than constraints to test if your solution is using pruning.

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

let directions = [
	[-1, 0],
	[0, 1],
	[1, 0],
	[0, -1]
];

var exist = function (board, word) {
	let rows = board.length;
	let cols = board[0].length;

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (board[i][j] === word[0] && dfs(board, word, i, j, 0)) {
				return true;
			}
		}
	}

	return false;
};

function dfs(board, word, row, col, count) {
	if (board[row][col] !== word[count]) {
		return false;
	}

	if (count === word.length - 1) {
		return true;
	}

	board[row][col] = ' ';
	for (let dir of directions) {
		let nextRow = row + dir[0];
		let nextCol = col + dir[1];

		if (checkBoundaries(nextRow, nextCol, board)) {
			if (dfs(board, word, nextRow, nextCol, count + 1)) return true;
		}
	}
	board[row][col] = word[count];

	return false;
}

function checkBoundaries(curRow, curCol, board) {
	return (
		curRow >= 0 && curRow < board.length && curCol >= 0 && curCol < board[0].length
	);
}
