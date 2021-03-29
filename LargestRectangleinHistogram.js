// 84. Largest Rectangle in Histogram
// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

// Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

// The largest rectangle is shown in the shaded area, which has area = 10 unit.

// Example:

// Input: [2,1,5,6,2,3]
// Output: 10

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  //corner cases
  if (!heights || !heights.length) {
    return 0;
  }

  let stack = [];
  let maxArea = 0;
  heights = [0, ...heights, 0];

  let n = heights.length;

  for (let i = 0; i < n; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      let lastEl = stack.pop();
      let h = heights[lastEl];
      let w = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }

  return maxArea;
};
