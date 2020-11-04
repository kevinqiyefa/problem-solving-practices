// 19. Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let clone = new ListNode(0);
	clone.next = head;

	let slow = clone,
		fast = clone;

	while (fast.next) {
		fast = fast.next;
		if (n-- <= 0) {
			slow = slow.next;
		}
	}

	slow.next = slow.next.next;

	return clone.next;
};
