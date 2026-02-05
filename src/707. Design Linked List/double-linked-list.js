/*
Implement the MyLinkedList class:

Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 */

class Node {
  prev = null
  next = null
  key = null
  value = null

  reset() {
    this.prev = null
    this.next = null
    this.key = null
    this.value = null
  }
}

export default class DoubleLinkedList {
  constructor() {
    this.map = new Map()
    this.head = new Node()
    this.tail = new Node()
    this.pool = new Node()

    this.head.next = this.tail
    this.head.key = 'Head'
    this.tail.prev = this.head
    this.tail.key = 'Tail'
  }

  getNode() {
    if (this.pool) {
      const node = this.pool

      this.pool = null
      return node
    }

    return new Node()
  }

  unlink(node) {
    if (node.prev) {
      node.prev.next = node.next
    }

    if (node.next) {
      node.next.prev = node.prev
    }

    node.next = null
    node.prev = null
  }

  delete(node) {
    this.unlink(node)
    node.reset()

    if (!this.pool) {
      this.pool = node
    }
  }

  insertAfter(prevNode, newNode) {
    this.unlink(newNode)

    const next = prevNode.next

    newNode.next = next
    newNode.prev = prevNode

    prevNode.next = newNode
    next.prev = newNode
  }

  insertBefore(nextNode, newNode) {
    this.unlink(newNode)

    const prev = nextNode.prev

    newNode.next = nextNode
    newNode.prev = prev

    nextNode.prev = newNode
    prev.next = newNode
  }

  insertBeforeTail(newNode) {
    this.insertBefore(this.tail, newNode)
  }

  insertAfterHead(newNode) {
    this.insertAfter(this.head, newNode)
  }
}

export class MyLinkedList extends DoubleLinkedList {
  map = new Map()

  get(index) {
    const node = this.map.get(index)

    if (node) {
      return node.value
    }

    return -1
  }

  updateIndex() {
    this.map.clear()

    let root = this.head.next
    let index = 0

    while (root && root !== this.tail) {
      root.key = index
      this.map.set(index, root)
      index++
      root = root.next
    }
  }

  addAtHead(value) {
    const node = this.getNode()

    node.value = value

    this.insertAfterHead(node)
    this.updateIndex()
  }

  addAtTail(value) {
    const node = this.getNode()

    node.value = value

    this.insertBeforeTail(node)
    this.updateIndex()
  }

  addAtIndex(index, value) {
    if (index < 0) {
      return
    }

    if (index > this.map.size) {
      return
    }

    const nextNode = this.map.get(index) || this.tail

    const node = this.getNode()

    node.value = value
    this.insertBefore(nextNode, node)
    this.updateIndex()
  }

  deleteAtIndex(index) {
    const node = this.map.get(index)

    if (node) {
      this.delete(node)
      this.updateIndex()
    }
  }
}
