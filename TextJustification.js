// 68. Text Justification

// Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left justified and no extra space is inserted between words.

// Note:

// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.

// Example 1:

// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]
// Example 2:

// Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
// Note that the second line is also left-justified becase it contains only one word.
// Example 3:

// Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]

// Constraints:

// 1 <= words.length <= 300
// 1 <= words[i].length <= 20
// words[i] consists of only English letters and symbols.
// 1 <= maxWidth <= 100
// words[i].length <= maxWidth

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 * https://www.youtube.com/watch?v=GqXlEbFVTXY
 */
var fullJustify = function (words, maxWidth) {
	let res = [];
	let n = words.length;
	let i = 0;

	while (i < n) {
		let j = i + 1;
		let lineLength = words[i].length;
		while (j < n && lineLength + words[j].length + j - i <= maxWidth) {
			lineLength += words[j].length;
			j++;
		}

		let totalSpaces = maxWidth - lineLength;
		let totalWordNum = j - i;
		let numSpaceSections = j - i - 1;

		if (j >= n || totalWordNum === 1) {
			res.push(leftJustify(words, totalSpaces, i, j, numSpaceSections));
		} else {
			res.push(midJustify(words, totalSpaces, i, j, numSpaceSections));
		}

		i = j;
	}
	return res;
};

function leftJustify(words, totalSpaces, i, j, numSpaceSections) {
	let numSpaceonRight = totalSpaces - numSpaceSections;
	let line = words[i++];
	while (i < j) {
		line += ' ' + words[i];
		i++;
	}
	line += ' '.repeat(numSpaceonRight);
	return line;
}

function midJustify(words, totalSpaces, i, j, numSpaceSections) {
	let numSpacesNeeded = (totalSpaces / numSpaceSections) >> 0;
	let extraSpace = totalSpaces % numSpaceSections;

	let line = words[i++];
	while (i < j) {
		let numOfExtraSpace = extraSpace-- > 0 ? 1 : 0;
		line += ' '.repeat(numSpacesNeeded + numOfExtraSpace) + words[i];
		i++;
	}
	return line;
}
