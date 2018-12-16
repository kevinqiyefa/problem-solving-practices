// Sort Colors II

// Given an array of n objects with k different colors (numbered from 1 to k), sort them so that objects of the same color are adjacent, with the colors in the order 1, 2, ... k.

// Notice

// You are not suppose to use the library's sort function for this problem.
//k <= n

// Example

// Given colors=[3, 2, 2, 1, 4], k=4, your code should sort colors in-place to [1, 2, 2, 3, 4].

function sortColorsII(arr, max) {
  let min = Math.min(...arr);
  let i,
    z = 0,
    count = Array(arr.length).fill(0);

  for (let k of arr) {
    count[k]++;
  }

  for (i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      arr[z++] = i;
    }
  }

  return arr;
}
