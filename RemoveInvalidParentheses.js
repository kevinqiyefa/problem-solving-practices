// 301. Remove Invalid Parentheses

// Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

// Note: The input string may contain letters other than the parentheses ( and ).

// Example 1:

// Input: "()())()"
// Output: ["()()()", "(())()"]
// Example 2:

// Input: "(a)())()"
// Output: ["(a)()()", "(a())()"]
// Example 3:

// Input: ")("
// Output: [""]

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  //normal backtracking

  //     let min = Infinity, res = [], tempSet= new Set();

  //     function helper(i,left_c,right_c, m, cur){
  //         let curChar = s[i]
  //         if(i===s.length){
  //             if(left_c === right_c && m <= min){
  //                 if(m<min){
  //                     res = []
  //                     tempSet.clear()
  //                     min = m
  //                 }
  //                 if(!tempSet.has(cur)){
  //                     res.push(cur)
  //                     tempSet.add(cur)
  //                 }

  //             }
  //         } else{
  //             if(curChar !=='(' && curChar !==')'){
  //                 helper(i+1,left_c,right_c, m, cur+curChar)
  //             } else{
  //                 // ignore the curChar
  //                  helper(i+1,left_c,right_c, m+1, cur)

  //                 if(curChar ==='('){
  //                     helper(i+1,left_c+1,right_c, m, cur+curChar)
  //                 } else if(right_c < left_c){
  //                     helper(i+1,left_c,right_c+1, m, cur+curChar)
  //                 }
  //             }

  //         }

  //     }

  //     helper(0,0, 0, 0, '')

  //     return res

  //limited backtracking

  let [leftRem, rightRem] = findNumOfRemoved(s);
  let res = [];

  function helper(i, lCount, rCount, lRem, rRem, cur) {
    if (i === s.length) {
      if (!lRem && !rRem) {
        res.push(cur);
      }
    } else {
      let curChar = s[i];
      if (curChar !== '(' && curChar !== ')') {
        helper(i + 1, lCount, rCount, lRem, rRem, cur + curChar);
      } else {
        // ignore the curChar
        if ((curChar === '(' && lRem > 0) || (curChar === ')' && rRem > 0)) {
          helper(
            i + 1,
            lCount,
            rCount,
            lRem - (curChar === '(' ? 1 : 0),
            rRem - (curChar === ')' ? 1 : 0),
            cur
          );
        }

        if (curChar === '(') {
          helper(i + 1, lCount + 1, rCount, lRem, rRem, cur + curChar);
        } else if (lCount > rCount) {
          helper(i + 1, lCount, rCount + 1, lRem, rRem, cur + curChar);
        }
      }
    }
  }
  helper(0, 0, 0, leftRem, rightRem, '');

  return [...new Set(res)];
};

function findNumOfRemoved(str) {
  let l = 0,
    r = 0;
  for (let s of str) {
    if (s === '(') {
      l++;
    } else if (s === ')') {
      r = l === 0 ? r + 1 : r;
      l = l > 0 ? l - 1 : l;
    }
  }

  return [l, r];
}
