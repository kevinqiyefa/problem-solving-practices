// 56. Merge Intervals
// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	//corner cases:
	if (!intervals || !intervals.length) return intervals;

	//sort the intervals by the first value
	intervals.sort((a, b) => a[0] - b[0]);

	let prev = intervals[0];
	let res = [];

	for (let i = 1; i < intervals.length; i++) {
		let cur = intervals[i];
		if (prev[1] >= cur[0]) {
			prev = [prev[0], Math.max(prev[1], cur[1])];
		} else {
			res.push(prev);
			prev = cur;
		}
	}

	res.push(prev);

	return res;
};
