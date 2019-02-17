// 169. Majority Element
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  //     let obj={};
  //     let ans;

  //     for(let i of nums){
  //         obj[i] = obj[i]+1 || 1;
  //     }

  //     let majorityElmCount = Math.max(...Object.values(obj))

  //     for(let i in obj){
  //         if(majorityElmCount === obj[i]) return i
  //     }

  //O(nlogn) approach
  nums.sort((a, b) => a - b);
  return nums[(nums.length / 2) >> 0];
};
