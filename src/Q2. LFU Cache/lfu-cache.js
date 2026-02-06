/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/*
Q2. LFU Cache

Implement the LFUCache class:

LFUCache(int capacity) Initializes the object with the capacity of the data structure.
int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
void put(int key, int value) Update the value of the key if present, or inserts the key if not already present. When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.
To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.

When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it.

The functions get and put must each run in O(1) average time complexity.
 */

import DoubleLinkedList from '../707. Design Linked List/double-linked-list.js'

export default class LFUCache {
  constructor(capacity) {
    /** @type {Map<number, DoubleLinkedList>}*/
    this.lru = new Map()
    /** @type {Map<number, Node>}*/
    this.map = new Map()

    this.capacity = capacity
    this.size = 0
  }

  get(key) {
    const node = this.map.get(key)

    if (node) {
      this.freqUP(node)

      return node.value
    }

    return -1
  }

  freqUP(node) {
    const prevList = this.lru.get(node.freq)

    prevList.unlink(node)

    node.freq++

    if (!this.lru.has(node.freq)) {
      this.lru.set(node.freq, new DoubleLinkedList())
    }

    const nextList = this.lru.get(node.freq)

    nextList.insertBeforeTail(node)
  }

  checkCapacity() {
    if (this.size >= this.capacity) {
      let lru = null
      const lruList = this.lru.values()

      while (!lru) {
        const next = lruList.next().value

        if (next.size) {
          lru = next
        }
      }

      const node = lru.head.next

      this.map.delete(node.key)
      lru.delete(node)
      this.size--
    }
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key)

      node.value = value

      this.freqUP(node)
      return
    }

    this.checkCapacity()

    if (!this.lru.has(1)) {
      this.lru.set(1, new DoubleLinkedList())
    }

    const list = this.lru.get(1)
    const node = list.getNode()

    node.freq = 1
    node.key = key
    node.value = value

    list.insertBeforeTail(node)
    this.map.set(key, node)
    this.size++
  }
}
