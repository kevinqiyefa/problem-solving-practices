// 4. Median of Two Sorted Arrays

// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
  //make sure nums1 has the minimun length
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let x = nums1.length;
  let y = nums2.length;

  let low = 0;
  let high = nums1.length;

  // use binary search
  while (low <= high) {
    let posX = ((low + high) / 2) >> 0;
    // to handle both odd and even length of median,we need to + 1
    let posY = ((x + y + 1) / 2 - posX) >> 0;

    //find the 4 points
    let maxLeftX = posX === 0 ? -Infinity : nums1[posX - 1];
    let minRightX = posX === x ? Infinity : nums1[posX];

    let maxLeftY = posY === 0 ? -Infinity : nums2[posY - 1];
    let minRightY = posY === y ? Infinity : nums2[posY];

    // check the 4 points
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      //found the correct cuts.
      let res;
      if ((x + y) % 2 === 0) {
        res =
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        res = Math.max(maxLeftX, maxLeftY);
      }

      return res;
    } else if (maxLeftX > minRightY) {
      high = posX - 1;
    } else {
      low = posX + 1;
    }
  }
};
