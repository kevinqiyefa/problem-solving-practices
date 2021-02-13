// 844. Backspace String Compare

// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space?

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
	let p1 = S.length - 1;
	let p2 = T.length - 1;

	while (p1 >= 0 || p2 >= 0) {
		if (S[p1] === '#' || T[p2] === '#') {
			if (S[p1] === '#') {
				let backCounter = 2;
				while (backCounter > 0) {
					backCounter--;
					p1--;

					if (S[p1] === '#') {
						backCounter += 2;
					}
				}
			}

			if (T[p2] === '#') {
				let backCounter = 2;
				while (backCounter > 0) {
					backCounter--;
					p2--;

					if (T[p2] === '#') {
						backCounter += 2;
					}
				}
			}
		} else {
			if (S[p1] !== T[p2]) {
				return false;
			} else {
				p1--;
				p2--;
			}
		}
	}

	return true;
};
