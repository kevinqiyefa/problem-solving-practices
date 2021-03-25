// 227. Basic Calculator II

// Given a string s which represents an expression, evaluate this expression and return its value.

// The integer division should truncate toward zero.

// Example 1:

// Input: s = "3+2*2"
// Output: 7
// Example 2:

// Input: s = " 3/2 "
// Output: 1
// Example 3:

// Input: s = " 3+5 / 2 "
// Output: 5

// Constraints:

// 1 <= s.length <= 3 * 105
// s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
// s represents a valid expression.
// All the integers in the expression are non-negative integers in the range [0, 231 - 1].
// The answer is guaranteed to fit in a 32-bit integer.

//https://www.youtube.com/watch?v=2EErQ25kKE8

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
	let nums = [];
	let operator = '+';
	let numStr = '';
	let operators = new Set(['+', '-', '*', '/']);

	for (let i = 0; i < s.length; i++) {
		let e = s[i];

		if (!isNaN(e)) {
			numStr += e;
		}

		// for operators and last index
		if (operators.has(e) || i === s.length - 1) {
			if (operator === '+') {
				nums.push(+numStr);
			} else if (operator === '-') {
				nums.push(-numStr);
			} else if (operator === '*') {
				nums[nums.length - 1] *= numStr;
			} else if (operator === '/') {
				nums[nums.length - 1] = (nums[nums.length - 1] / numStr) >> 0;
			}
			operator = e;
			numStr = '';
		}
	}

	return nums.reduce((total, curVal) => total + curVal, 0);
};
