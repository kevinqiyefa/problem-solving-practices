// 113. Path Sum II

// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let res = [];
  helper(root, sum, [], res);
  return res;
};

const helper = (root, sum, cur, res) => {
  if (!root) return;

  cur.push(root.val);

  if (!root.left && !root.right && root.val === sum) {
    res.push([...cur]);
  }

  helper(root.left, sum - root.val, cur, res);
  helper(root.right, sum - root.val, cur, res);
  cur.pop();
};
