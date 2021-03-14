// 212. Word Search II
// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Example 1:

// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]
// Example 2:

// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 12
// board[i][j] is a lowercase English letter.
// 1 <= words.length <= 3 * 104
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// All the strings of words are unique.

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

let directions = [
	[-1, 0],
	[0, 1],
	[1, 0],
	[0, -1]
];

class Trie {
	constructor() {
		this.words = {};
	}
	addWord(str) {
		let node = this.words;
		let temp = '';
		for (let key of str) {
			if (!(key in node)) {
				node[key] = {};
			}
			temp += key;
			node = node[key];
		}
		node['end'] = temp;
	}
}

var findWords = function (board, words) {
	let rows = board.length;
	let cols = board[0].length;
	let copyWords = words;
	let res = [];
	let wordTrie = new Trie();
	for (let word of words) {
		wordTrie.addWord(word);
	}
	let root = wordTrie.words;

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (board[i][j] in root) {
				dfs(board, root, i, j, res);
			}
		}
	}

	return res;
};

function dfs(board, node, row, col, res) {
	let curChar = board[row][col];
	if (!(curChar in node)) {
		return;
	}

	if (node[curChar]['end']) {
		res.push(node[curChar]['end']);
		node[curChar]['end'] = null;
	}

	board[row][col] = ' ';
	for (let dir of directions) {
		let nextRow = row + dir[0];
		let nextCol = col + dir[1];

		if (checkBoundaries(nextRow, nextCol, board)) {
			dfs(board, node[curChar], nextRow, nextCol, res);
		}
	}
	board[row][col] = curChar;
}

function checkBoundaries(curRow, curCol, board) {
	return (
		curRow >= 0 && curRow < board.length && curCol >= 0 && curCol < board[0].length
	);
}
