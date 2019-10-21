// 23. Merge k Sorted Lists

// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Example:

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let arr = [];
  let newList = new ListNode(null);
  let res = newList;

  for (let i = 0; i < lists.length; i++) {
    while (lists[i]) {
      arr.push(lists[i].val);
      lists[i] = lists[i].next;
    }
  }
  arr.sort((a, b) => a - b);
  for (let a of arr) {
    newList.next = new ListNode(a);
    newList = newList.next;
  }
  return res.next;
};
