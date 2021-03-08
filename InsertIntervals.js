// 57. Insert Interval

// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function (intervals, newInterval) {
	let res = [];

	if (!intervals || !intervals.length) return [newInterval];

	let i = 0;
	let n = intervals.length;
	console.log(newInterval);

	while (i < n && intervals[i][1] < newInterval[0]) {
		res.push(intervals[i]);
		i++;
	}
	//overlap
	while (i < n && intervals[i][0] <= newInterval[1]) {
		newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
		newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
		i++;
	}
	res.push(newInterval);

	while (i < n) {
		res.push(intervals[i]);
		i++;
	}

	return res;
};
