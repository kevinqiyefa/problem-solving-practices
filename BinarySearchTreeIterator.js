// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

// Calling next() will return the next smallest number in the BST.

// Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.

// Credits:
// Special thanks to @ts for adding this problem and creating all test cases.

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
// var BSTIterator = function(root) {
//   this.data = [];
//   this.find(root);
// };

// /**
//  * @this BSTIterator
//  * @param {TreeNode} root
//  */
// BSTIterator.prototype.find = function(root) {
//   if (root) {
//     this.find(root.left);
//     this.data.push(root.val);
//     this.find(root.right);
//   }
// };

// /**
//  * @this BSTIterator
//  * @returns {boolean} - whether we have a next smallest number
//  */
// BSTIterator.prototype.hasNext = function() {
//   return this.data.length > 0;
// };

// /**
//  * @this BSTIterator
//  * @returns {number} - the next smallest number
//  */
// BSTIterator.prototype.next = function() {
//   return this.data.shift();
// };

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.data = [];
  this.leftmost_inorder(root);
};

BSTIterator.prototype.leftmost_inorder = function(root) {
  while (root) {
    this.data.push(root);
    root = root.left;
  }
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.data.length > 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  let topmost_node = this.data.pop();
  let right = topmost_node.right;

  if (right) {
    this.leftmost_inorder(right);
  }

  return topmost_node.val;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
