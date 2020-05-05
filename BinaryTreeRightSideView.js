// 199. Binary Tree Right Side View

// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  //    let res = [];
  //    if(!root) return res;
  //     let queue = [root];

  //     while(queue.length>0){
  //         let size = queue.length;
  //         for(let i = 0; i < size; i++){

  //             let node = queue.shift();

  //             if(i === size-1){
  //                 res.push(node.val)
  //             }

  //             if(node.left){
  //                 queue.push(node.left)
  //             }

  //             if(node.right){
  //                  queue.push(node.right)
  //             }
  //         }
  //     }

  //     return res

  let res = [];

  function dfs(rt, lv) {
    if (!rt) return;

    if (!res[lv]) {
      res.push(rt.val);
    }

    dfs(rt.right, lv + 1);
    dfs(rt.left, lv + 1);
  }

  dfs(root, 0);

  return res;
};
