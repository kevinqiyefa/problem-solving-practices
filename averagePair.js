// Description

// Write a function called averagePair that accepts a sorted array of integers and a target average number. Determine if there is a pair of values in the array whose average equals the target.

// There may be more than one pair that matches the average target, but you simply have to return true if there is a match and false otherwise.

// Bonus Constraints

// Time Complexity: O(N)
// Space Complexity: O(1)

// Examples

// averagePair([1, 2, 3], 2.5); // true, because (2 + 3)/2 === 2.5

// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true

// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false

// averagePair([], 4); // false

function averagePair(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let sumOfPair = num * 2;
  let i = 0,
    j = arr.length - 1;

  if (arr.length < 1) return false;

  while (i !== j) {
    if (arr[i] + arr[j] === sumOfPair) return true;
    else if (arr[i] + arr[j] < sumOfPair) {
      i++;
    } else if (arr[i] + arr[j] > sumOfPair) {
      j--;
    }
  }

  return false;
}
