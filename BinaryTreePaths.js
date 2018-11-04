// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let arr = [];

  function helper(r, str) {
    if (!r) return;

    if (r.left === null && r.right === null) {
      return arr.push(str + r.val);
    }

    if (r.left) helper(r.left, str + r.val + '->');
    if (r.right) helper(r.right, str + r.val + '->');
  }
  helper(root, '');

  return arr;
};
