// Description

// Write a function called moveZeroes which accepts an array and moves all 0's to the end of it while maintaining the relative order of the non-zero elements. The function should return the array.

// Examples

// moveZeroes([0,1,0,3,12]) // [1,3,12,0,0]

// moveZeroes([1,3,10,2]) // [1,3,10,2]

// moveZeroes([4,1,2,0,0,1,2,1,0]) // [4,1,2,1,2,1,0,0,0]

// moveZeroes([6,1,2,3,5,1,0]) // [6,1,2,3,5,1,0]

// moveZeroes([0,6,1,2,3,5,1,0]) // [6,1,2,3,5,1,0,0]

// moveZeroes([12,2,0,0,2,1]) // [12,2,2,1,0,0]

// Constraints

// Time Complexity: O(n)
// Space Complexity: O(1) - this should be in-place, modifying the original input array

function moveZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!

  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (!arr[i] && arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else if (!arr[i] && !arr[j]) {
      j++;
      continue;
    }

    i++;
    j++;
  }
  return arr;
}
