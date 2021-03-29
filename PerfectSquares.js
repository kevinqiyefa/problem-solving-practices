// 279. Perfect Squares

// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

// Example 1:

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

// Constraints:

// 1 <= n <= 104

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
	//dp[i] = i if i <= 3
	//dp[4] = 1, all perfect square number will be 1
	//dp[5]: there are only [1,4] less than or equal to 5 and are perfect square numbers
	//.      so we need the find the minimum count of each perfect square
	//.      dp[5-1] => dp[4] = 1, from the last calculation
	//       dp[5-4] => dp[1] = 1.
	//.      so the minimum is 1 + the current element, which is 1+1 = 2.
	//.      so dp[5] = 2

	// edge case, check if it's perfect square number
	let a = Math.sqrt(n) >> 0;

	if (a * a === n) return 1;

	let dp = Array(n + 1).fill(n);
	dp[0] = 0;

	for (let i = 1; i <= n; i++) {
		//we need the find the minimum count of each perfect square
		for (let j = 1; j * j <= i; j++) {
			dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
		}
	}
	return dp[n];
};
