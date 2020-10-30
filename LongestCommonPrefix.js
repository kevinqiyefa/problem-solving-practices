// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let prefix = '';
	if (!strs || !strs.length) return prefix;

	for (let i = 0; i < strs[0].length; i++) {
		let curChar = strs[0][i];
		for (let j = 1; j < strs.length; j++) {
			if (i >= strs[j].length || curChar !== strs[j][i]) return prefix;
		}

		prefix += curChar;
	}

	return prefix;
};
