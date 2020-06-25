function firstMissingNumInSortedArr(arr) {
  let i = 0,
    j = arr.length - 1;
  let mid = 0;
  while (i <= j) {
    mid = ((i + j) / 2) >> 0;

    if (arr[mid] - arr[mid - 1] > 1) {
      return arr[mid - 1] + 1;
    } else if (arr[mid] - mid > 1) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  if (arr[0] !== 1) return 1;
  return arr[mid] + 1;
}

firstMissingNumInSortedArr([2, 3, 4, 5, 6]); // 1
firstMissingNumInSortedArr([1, 2, 3, 4, 5, 6]); // 7
firstMissingNumInSortedArr([1, 3, 4, 5, 6]); // 2
