// 234. Palindrome Linked List.

// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let fast = head;
  let slow = head;

  while (fast) {
    fast = fast.next ? fast.next.next : fast.next;
    slow = slow.next;
  }

  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  while (prev) {
    if (prev.val !== head.val) {
      return false;
    }

    prev = prev.next;
    head = head.next;
  }

  return true;
};
