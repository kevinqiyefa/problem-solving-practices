// 337. House Robber III

// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

// Determine the maximum amount of money the thief can rob tonight without alerting the police.

// Example 1:

// Input: [3,2,3,null,3,null,1]

//      3
//     / \
//    2   3
//     \   \
//      3   1

// Output: 7
// Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
// Example 2:

// Input: [3,4,5,1,3,null,1]

//      3
//     / \
//    4   5
//   / \   \
//  1   3   1

// Output: 9
// Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.

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
// var rob = function(root) {
//         let money = helper(root);

//         return Math.max(money[0], money[1]);
// };

// var helper = function(root) {

//     if (!root) { return [0, 0]; }

//     let left = helper(root.left);
//     let right = helper(root.right);
//     let res = [0, 0];

//     res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
//     res[1] = root.val + left[0] + right[0];

//     return res;
// };

//second approch: super slow dfs
var rob = function(root) {
  return root
    ? Math.max(
        root.val +
          (root.left ? rob(root.left.left) + rob(root.left.right) : 0) +
          (root.right ? rob(root.right.left) + rob(root.right.right) : 0),
        rob(root.left) + rob(root.right)
      )
    : 0;
};
