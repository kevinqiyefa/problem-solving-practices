// 433. Minimum Genetic Mutation
// A gene string can be represented by an 8-character long string, with choices from "A", "C", "G", "T".

// Suppose we need to investigate about a mutation (mutation from "start" to "end"), where ONE mutation is defined as ONE single character changed in the gene string.

// For example, "AACCGGTT" -> "AACCGGTA" is 1 mutation.

// Also, there is a given gene "bank", which records all the valid gene mutations. A gene must be in the bank to make it a valid gene string.

// Now, given 3 things - start, end, bank, your task is to determine what is the minimum number of mutations needed to mutate from "start" to "end". If there is no such a mutation, return -1.

// Note:

// Starting point is assumed to be valid, so it might not be included in the bank.
// If multiple mutations are needed, all mutations during in the sequence must be valid.
// You may assume start and end string is not the same.

// Example 1:

// start: "AACCGGTT"
// end:   "AACCGGTA"
// bank: ["AACCGGTA"]

// return: 1

// Example 2:

// start: "AACCGGTT"
// end:   "AAACGGTA"
// bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]

// return: 2

// Example 3:

// start: "AAAAACCC"
// end:   "AACCCCCC"
// bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]

// return: 3

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
	let bankSet = new Set(bank);
	if (!bankSet.has(end)) return -1;

	let queue = [start];
	let count = 1;
	let visited = new Set(queue);

	while (queue.length > 0) {
		let size = queue.length;

		for (let i = 0; i < size; i++) {
			let cur = queue.shift();

			if (isOneMutation(cur, end)) return count;
			//check thru the bank set
			bankSet.forEach((s) => {
				if (!visited.has(s) && isOneMutation(s, cur)) {
					queue.push(s);
					visited.add(s);
				}
			});
		}

		count++;
	}

	return -1;
};

function isOneMutation(a, b) {
	let diff = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) diff++;
	}

	return diff === 1;
}
