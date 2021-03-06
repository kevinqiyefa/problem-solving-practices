// 213. House Robber II

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
//              because they are adjacent houses.
// Example 2:

// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // let robF = 0;
  // let notRobF = 0;

  // let robNotF = 0;
  // let notRobNotF = 0;

  // if (nums.length === 1) return nums[0];

  // for (let i = 0; i < nums.length; i++) {
  //   let prevMaxF = Math.max(robF, notRobF);
  //   let prevMaxNotF = Math.max(robNotF, notRobNotF);

  //   robF = notRobF + nums[i];
  //   notRobF = prevMaxF;

  //   if (i) {
  //     robNotF = notRobNotF + nums[i];
  //     notRobNotF = prevMaxNotF;
  //   }
  // }

  // return Math.max(notRobF, robNotF);

  //second approach
  function robHouses(nums) {
    let odd = 0;
    let even = 0;

    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (i % 2 === 0) {
        even = Math.max(even + num, odd);
      } else {
        odd = Math.max(odd + num, even);
      }
    }

    return Math.max(even, odd);
  }

  if (nums.length === 1) return nums[0];

  const robExceptFirst = robHouses(nums.slice(1));
  nums.pop();
  const robExceptLast = robHouses(nums);

  return Math.max(robExceptFirst, robExceptLast);
};
