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
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (!intervals || intervals.length <= 0) return intervals;

  intervals.sort((a, b) => a.start - b.start);

  let prev = intervals[0];
  const ans = [];

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];

    if (prev.end >= cur.start) {
      //merge intervals and update prev
      let merge = new Interval(prev.start, Math.max(prev.end, cur.end));
      prev = merge;
    } else {
      ans.push(prev);
      prev = cur;
    }
  }
  ans.push(prev);

  return ans;
};
