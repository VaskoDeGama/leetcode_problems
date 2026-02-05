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

import DoubleLinkedList from '../707. Design Linked List/double-linked-list.js'

export default class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.dl = new DoubleLinkedList()
  }

  get(key) {
    const node = this.cache.get(key)

    if (node) {
      this.dl.insertBeforeTail(node)

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

      this.dl.insertBeforeTail(node)
      return
    }

    if (this.cache.size >= this.capacity) {
      const lru = this.dl.head.next

      if (lru === this.dl.tail) {
        return
      }

      this.cache.delete(lru.key)
      this.dl.delete(lru)
    }

    const newNode = this.dl.getNode()

    newNode.key = key
    newNode.value = value
    this.cache.set(key, newNode)
    this.dl.insertBeforeTail(newNode)
  }
}
