// 567. Permutation in String
// Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

// Example 1:

// Input: s1 = "ab" s2 = "eidbaooo"
// Output: True
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input:s1= "ab" s2 = "eidboaoo"
// Output: False

// Constraints:

// The input strings only contain lower case letters.
// The length of both given strings is in range [1, 10,000].

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	if (s1.length > s2.length) return false;
	let map = {};

	//count the char in s1
	for (let i of s1) {
		map[i] = map[i] + 1 || 1;
	}

	let count = Object.keys(map).length;

	let start = 0;

	let i = 0;
	while (i < s2.length) {
		let c = s2[i++];
		if (c in map) {
			map[c]--;
			if (!map[c]) count--;
		}
		if (!count) return true;

		// check if range between start and i bigger than s1
		if (i >= s1.length) {
			let curStart = s2[start++];
			if (curStart in map) {
				if (!map[curStart]) count++;
				map[curStart]++;
			}
		}
	}
	return false;
};
