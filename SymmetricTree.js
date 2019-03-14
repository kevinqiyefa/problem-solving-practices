// 101. Symmetric Tree

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;

  return isMirrorTree(root.left, root.right);
};

let isMirrorTree = function(l, r) {
  if (!l && !r) return true;

  if (!l || !r || l.val !== r.val) return false;

  return isMirrorTree(l.left, r.right) && isMirrorTree(l.right, r.left);
};

/*

function isMirror(p, q) {
  // Create two stacks
  var s1 = [p], s2 = [q];

  // Perform preorder traversal
  while (s1.length > 0 || s2.length > 0) {
      var n1 = s1.pop(), n2 = s2.pop();

      // Two null nodes, let's continue
      if (!n1 && !n2) continue;

      // Return false as long as there is a mismatch
      if (!n1 || !n2 || n1.val !== n2.val) return false;

      // Scan tree s from left to right
      // and scan tree t from right to left
      s1.push(n1.left); s1.push(n1.right);
      s2.push(n2.right); s2.push(n2.left);
  }

  return true;
}

*/
