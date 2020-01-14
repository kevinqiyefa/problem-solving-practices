// 46. Permutations

// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  if (!nums || nums.length == 0) return res;

  function helper(curArr, visited) {
    if (curArr.length === nums.length) {
      res.push([...curArr]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        // if(!visited.has(nums[i])){
        //   helper([...curArr, nums[i]], new Set([...visited,nums[i]]))
        // }

        //or

        let n = nums[i];

        if (!visited.has(n)) {
          visited.add(n);
          curArr.push(n);

          helper(curArr, visited);

          visited.delete(n);
          curArr.pop(n);
        }
      }
    }
  }

  helper([], new Set());

  return res;

  //solution #3:
  // const res =[];
  // if (!nums || nums.length == 0) return res;
  // let used = Array(nums.length).fill(false);

  // function helper(curNums){
  //     if(curNums.length === nums.length){
  //         res.push([...curNums]);

  //     } else{

  //     for(let i = 0; i< nums.length; i++){

  //         let n = nums[i]
  //         if(used[i]) continue;

  //         used[i] = true;

  //         helper([...curNums, n]);

  //         used[i] = false;
  //         }
  //     }

  // }

  // helper([])

  // return res;
};
