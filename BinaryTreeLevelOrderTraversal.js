// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  //solution #1
  let ans = [];
  helper(root, 0);
  return ans;

  function helper(root, level) {
    if (!root) return;
    ans[level] = ans[level] || [];
    ans[level].push(root.val);
    helper(root.left, level + 1);
    helper(root.right, level + 1);
  }

  // solution #2:
  //     if(!root) return [];
  //     let result = [];
  //     let queue = [root];

  //     while(queue.length){

  //         let current = [];
  //         let size = queue.length;

  //         for(let i =0; i< size; i++){
  //             let head = queue.shift();
  //             current.push(head.val);
  //             if(head.left) queue.push(head.left)
  //             if(head.right) queue.push(head.right)
  //         }
  //         result.push(current);
  //     }

  //     return result;

  //solution #3;
  // const arr = [root, 's'];
  // const ans =[];

  // if(!root) return [];

  // while(arr.length > 1){
  //     const node = arr.shift();

  //     if(node==="s"){
  //         arr.push('s');
  //         ans.push([]);
  //     } else{
  //         if(node.left)arr.push(node.left);
  //         if(node.right)arr.push(node.right);
  //         if(ans.length<1){
  //             ans[0] = [];
  //         }

  //         ans[ans.length-1].push(node.val);
  //     }
  // }

  // return ans;
};
