// 42. Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:

// n == height.length
// 0 <= n <= 3 * 104
// 0 <= height[i] <= 105

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	//     let left = [], right = [];
	//     let temp1 = 0, temp2 =0;
	//     let count = 0;

	//     for(let i of height){
	//         if(temp1<i) temp1 = i;
	//         left.push(temp1);
	//     }

	//     for(let i = height.length-1; i>=0; i--){
	//         if(temp2<height[i]) temp2 = height[i];
	//         right.push(temp2);
	//     }

	//     right = right.reverse();

	//     for(let j = 0; j < left.length-1; j++){
	//         let t = Math.min(left[j], right[j]);
	//         if (t > height[j]) count += t-height[j];
	//     }

	//     return count;

	let totalWater = 0;

	let maxLeft = 0,
		maxRight = 0,
		left = 0,
		right = height.length - 1;

	while (left < right) {
		if (height[left] <= height[right]) {
			if (height[left] > maxLeft) {
				maxLeft = height[left];
			} else {
				totalWater += maxLeft - height[left];
			}
			left++;
		} else {
			if (height[right] > maxRight) {
				maxRight = height[right];
			} else {
				totalWater += maxRight - height[right];
			}
			right--;
		}
	}

	return totalWater;
};
