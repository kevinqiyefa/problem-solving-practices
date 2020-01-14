// 47. Permutations II

// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// Example:

// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const res = [];
  let used = Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);

  function helper(curNums) {
    if (curNums.length === nums.length) {
      res.push([...curNums]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (used[i]) continue;
        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

        used[i] = true;

        helper([...curNums, n]);

        used[i] = false;
      }
    }
  }

  helper([]);

  return res;
};
