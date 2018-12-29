// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree

//           1
//          / \
//         2   3
//        / \
//       4   5
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

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
var diameterOfBinaryTree = function(root) {
  // let sum = 0;

  // function helper(root) {
  //   if (!root) return 0;

  //   let left = helper(root.left);
  //   let right = helper(root.right);
  //   sum = Math.max(left + right, sum);

  //   return Math.max(left, right) + 1;
  // }

  // helper(root);
  // return sum;

  let ans = 0;

  function helper(rt) {
    if (rt === null) return 0;
    let left = rt.left ? 1 + helper(rt.left) : 0;
    let right = rt.right ? 1 + helper(rt.right) : 0;

    ans = Math.max(ans, left + right);

    return Math.max(left, right);
  }
  helper(root);
  return ans;
};
