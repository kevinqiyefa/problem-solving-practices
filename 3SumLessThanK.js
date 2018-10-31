function countThreeSum(arr, sum) {
  // Sort input array
  arr.sort((a, b) => a - b);

  let count = 0;

  // Loop through the arr from 0 index to the last index-1
  for (let i = 0; i < arr.length - 2; i++) {
    // Initialize other two elements as left/ right corner elements
    //arr[i+1..n-1], i.e., j = i+1 and k = arr.length-1
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      // If sum of current triplet < sum
      // move left end to look for bigger values
      if (arr[i] + arr[j] + arr[k] < sum) {
        // For current i and j, there can be total k-j third elements.
        count += k - j;
        j++;
      }
      // Else move right end to left for smaller values
      else {
        k--;
      }
    }
  }
  return count;
}
