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
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  let newInt = [];
  let i = 0;

  if (!intervals || intervals.length <= 0) return [newInterval];

  //insert the new interval and keep the order
  while (i < intervals.length) {
    if (intervals[i].start > newInterval.start) {
      newInt.push(newInterval);
    }
    newInt.push(intervals[i]);

    if (i === intervals.length - 1 && intervals[i].start <= newInterval.start) {
      newInt.push(newInterval);
    }

    i++;
  }

  return merge(newInt);
};

var merge = function(intervals) {
  //   if(!intervals || intervals.length<=0) return intervals;

  //     intervals.sort((a,b) => a.start-b.start);

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
