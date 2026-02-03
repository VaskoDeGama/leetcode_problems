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
 * @returns {ListNode}
 */
export default function deleteDuplicates(head) {
  if (!head || !head.next) {
    return head
  }
  let current = head

  while (current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head
}
