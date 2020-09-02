/**
 *
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  if (!head || !head.next) return head
  head.next = deleteDuplicates(head.next)
  return head.val === head.next.val ? head.next : head
}

module.exports = deleteDuplicates
