// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

//         _______6______
//        /              \
//     ___2__          ___8__
//    /      \        /      \
//    0      _4       7       9
//          /  \
//          3   5
// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
// Recursive Approach
        if(root.val > Math.max(p.val, q.val)) return lowestCommonAncestor(root.left, p, q);
    
        else if(root.val < Math.min(p.val, q.val)) return lowestCommonAncestor(root.right, p, q);
    
        return root;
  
//------------------------------------------------------------------------------------------------- 
//
// Iterative Approach
//        // Value of p
//         let pVal = p.val;

//         // Value of q;
//         let qVal = q.val;



//         // Traverse the tree
//         while (root != null) {

//             // Value of ancestor/parent node.
//             let parentVal = root.val;

//             if (pVal > parentVal && qVal > parentVal) {
//                 // If both p and q are greater than parent
//                 root = root.right;
//             } else if (pVal < parentVal && qVal < parentVal) {
//                 // If both p and q are lesser than parent
//                 root = root.left;
//             } else {
//                 // We have found the split point, i.e. the LCA node.
//                 return root;
//             }
//         }
//         return null;
    

};
