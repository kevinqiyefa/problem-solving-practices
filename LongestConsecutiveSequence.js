// 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // if(!nums.length) return 0

  // let hashMap = new Set(nums)
  // let maxLen = 0

  // for(let n of nums){
  //     let seqLen = 0
  //     if(hashMap.has(n)){
  //         seqLen++
  //         hashMap.delete(n)

  //         //check the right
  //         let right = 1
  //         while(hashMap.has(n+right)){
  //             seqLen++
  //             hashMap.delete(n+right)
  //             right++
  //         }

  //         //check the left
  //         let left = 1
  //         while(hashMap.has(n-left)){
  //             seqLen++
  //             hashMap.delete(n-left)
  //             left++
  //         }

  //     }
  //     maxLen = Math.max(maxLen, seqLen)

  // }

  // return maxLen

  let hashMap = new Set(nums);
  let maxLen = 0;
  for (let num of hashMap) {
    // Only start counting if this is the beginning of a sequence
    if (!hashMap.has(num - 1)) {
      let curLen = 1;
      let curNum = num;

      // Count consecutive numbers going up
      while (hashMap.has(curNum + 1)) {
        curNum++;
        curLen++;
      }

      maxLen = Math.max(maxLen, curLen);
    }
  }
  return maxLen;
};
