/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/*
Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.
 */

class Node {
  constructor() {
    this.key = null
    this.value = null
    this.prev = null
    this.next = null
  }

  clear() {
    this.key = null
    this.value = null
    this.next = null
    this.prev = null
  }
}

class DoubleList {
  /** @type {Node} */
  head = new Node()
  /** @type {Node} */
  tail = new Node()
  /** @type {Node} */
  pool = new Node()

  constructor() {
    this.head.next = this.tail
    this.head.key = 'head'
    this.tail.prev = this.head
    this.tail.key = 'tail'
  }

  /**
   * @returns {Node}
   */
  getNode() {
    if (this.pool) {
      const node = this.pool

      this.pool = null

      return node
    }

    return new Node()
  }

  unlink(node) {
    const next = node.next
    const prev = node.prev

    if (prev) {
      prev.next = next
    }

    if (next) {
      next.prev = prev
    }

    node.prev = null
    node.next = null
  }

  remove(node) {
    this.unlink(node)
    node.clear()

    this.pool = node
  }

  insertAfter(node, newNode) {
    newNode.next = node.next
    newNode.prev = node

    node.next.prev = newNode
    node.next = newNode
  }

  insertAfterHead(newNode) {
    const node = this.head

    newNode.next = node.next
    newNode.prev = node

    node.next.prev = newNode
    node.next = newNode
  }

  insertBefore(node, newNode) {
    newNode.prev = node.prev
    newNode.next = node

    node.prev.next = newNode
    node.prev = newNode
  }

  insertBeforeTail(newNode) {
    const node = this.tail

    newNode.prev = node.prev
    newNode.next = node

    node.prev.next = newNode
    node.prev = newNode
  }

  moveToTail(node) {
    this.unlink(node)
    this.insertBeforeTail(node)
  }
}

export default class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.dl = new DoubleList()
  }

  get(key) {
    const node = this.cache.get(key)

    if (node) {
      this.dl.moveToTail(node)

      return node.value
    }

    return -1
  }

  put(key, value) {
    if (this.capacity <= 0) {
      return
    }

    const node = this.cache.get(key)

    if (node) {
      node.key = key
      node.value = value

      this.dl.moveToTail(node)
      return
    }

    if (this.cache.size >= this.capacity) {
      const lru = this.dl.head.next

      if (lru === this.dl.tail) {
        return
      }

      this.cache.delete(lru.key)
      this.dl.remove(lru)
    }

    const newNode = this.dl.getNode()

    newNode.key = key
    newNode.value = value
    this.cache.set(key, newNode)
    this.dl.insertBeforeTail(newNode)
  }
}
