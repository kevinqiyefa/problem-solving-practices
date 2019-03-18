171. Excel Sheet Column Number

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let n = s.length;
  let sum = 0;
  
  
  /* 
   * Think of it as base 26. For example,
   * Column number of "AB" = 1 * 26^1 + 2 * 26^0 
   */
  
  for(let i = 0; i < n; i++){
      let base = (s.charCodeAt(i) - 'A'.charCodeAt(0)) % 26+1;
      sum += base * Math.pow(26, n-i-1)    
  }
  
  return sum;
};