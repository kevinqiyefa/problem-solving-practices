//  206. Reverse Linked List

//  Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // iterative solution:

  //     let prev = null;
  //     let cur = head;

  //     while(cur){
  //         let temp = cur.next;
  //         cur.next = prev;
  //         prev = cur;
  //         cur = temp;
  //     }
  //     return prev;

  //recursive solution:

  if (!head || !head.next) {
    return head;
  }

  let reverseLinklist = reverseList(head.next);

  let temp = head.next;
  temp.next = head;
  head.next = null;
  return reverseLinklist;
};
