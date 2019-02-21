// 104. Maximum Depth of Binary Tree

// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  //     if(!root) return root;

  //     let arr = [root,'s'];
  //     let count = 1;

  //     while(arr.length >1){
  //         let cur = arr.shift();

  //         if(cur === 's'){
  //             count++;
  //             arr.push('s');
  //         }
  //         else{
  //             if(cur.left) arr.push(cur.left);
  //             if(cur.right) arr.push(cur.right);

  //         }

  //     }

  //     return count;

  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
