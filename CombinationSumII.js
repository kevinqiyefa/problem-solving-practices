// 40. Combination Sum II

// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates.sort((a, b) => a - b);

  function helper(c, t, i, cur) {
    if (t === 0) {
      res.push(cur);
      return;
    }

    for (let j = i; j < c.length; j++) {
      if (c[j] > t) break;
      if (j !== i && c[j] === c[j - 1]) continue;
      helper(c, t - c[j], j + 1, [...cur, c[j]]);
    }
  }

  helper(candidates, target, 0, []);

  return res;
};
