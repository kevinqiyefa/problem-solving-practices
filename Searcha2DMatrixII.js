240. Search a 2D Matrix II

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  //     for(let r of matrix){
  //         if(r[0] <= target && r[r.length-1] >= target && binarySearch(r, target)){
  //             return true;  
  //         }
  //     }
      
  //     return false
      
      let row = 0;
      
      if(!matrix.length) return false;
      let col = matrix[0].length-1;
      
      while(row<=matrix.length-1 && col>=0){
          let cur = matrix[row][col];
          if(cur === target){
              return true;
          } else if(cur>target){
              col--
          } else {row++}
      }
      
      return false
  };
  
  // function binarySearch(arr, target){
  //     let s = 0, e = arr.length-1;
      
  //     while(s<=e){
  //         let mid = (s+e) /2 >> 0;
  //         if(arr[mid] > target){
  //             e = mid-1;
  //         } else if (arr[mid] < target){
  //             s = mid+1
  //         } else{
  //             return true;
  //         }
  //     }
  //     return false
  // }