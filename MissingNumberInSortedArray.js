// Leecode 1060 Missing Element in Sorted Array

// Description
// Given a sorted array A of unique numbers, find the K-th missing number starting from the leftmost number of the array.

// Example 1: Input: A = [4,7,9,10], K = 1 Output: 5 Explanation: The first missing number is 5.

// Example 2: Input: A = [4,7,9,10], K = 3 Output: 8 Explanation: The missing numbers are [5,6,8,…], hence the third missing number is 8. Example 3:

// Input: A = [1,2,4], K = 3 Output: 6 Explanation: The missing numbers are [3,5,6,7,…], hence the third missing number is 6.

// Note: 1 <= A.length <= 50000 1 <= A[i] <= 1e7 1 <= K <= 1e8

function missingNumInSortedArr(arr, k) {
  let i = 0,
    j = arr.length - 1;
  let mid = 0;

  // calculate the missing count from index 0 - i
  function missingNums(i) {
    return arr[i] - arr[0] - i;
  }

  while (i + 1 < j) {
    mid = ((i + j) / 2) >> 0;

    if (missingNums(mid) < k) {
      i = mid;
    } else {
      j = mid;
    }
  }

  // once we find the number of the biggest missing count in the array that is  < k,
  // which will be either i or j => idx
  // the kth missing num will be the arr[idx]+k - missingNums(idx)

  if (missingNums(j) < k) {
    return arr[j] + k - missingNums(j);
  }
  return arr[i] + k - missingNums(i);
}

missingNumInSortedArr([4, 7, 9, 10], (k = 1)); // 5
missingNumInSortedArr([4, 7, 9, 11], (k = 3)); // 8
missingNumInSortedArr([1, 2, 4], (k = 1)); // 3
missingNumInSortedArr([1, 2, 4], (k = 3)); // 6
