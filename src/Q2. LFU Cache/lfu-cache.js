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
    this.minFreq = 0
  }

  getList(freq) {
    let list = this.lru.get(freq)

    if (!list) {
      list = new DoubleLinkedList()
      this.lru.set(freq, list)
    }

    return list
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
    const prevFreq = node.freq
    const prevList = this.getList(prevFreq)

    prevList.unlink(node)

    if (prevList.size === 0) {
      this.lru.delete(prevFreq)

      if (this.minFreq === prevFreq) {
        this.minFreq++

        while (this.size > 0 && !this.lru.has(this.minFreq)) {
          this.minFreq++
        }
      }
    }

    node.freq++

    const nextList = this.getList(node.freq)

    nextList.insertBeforeTail(node)
  }

  checkCapacity() {
    if (this.size >= this.capacity) {
      const lru = this.lru.get(this.minFreq)

      if (!lru) {
        return
      }

      const node = lru.head.next

      this.map.delete(node.key)
      lru.delete(node)
      this.size--

      if (lru.size === 0) {
        this.lru.delete(this.minFreq)
      }

      if (this.size === 0) {
        this.minFreq = 0
      }
    }
  }

  put(key, value) {
    if (this.capacity === 0) {
      return
    }

    const node = this.map.get(key)

    if (node) {
      node.value = value

      this.freqUP(node)
      return
    }

    this.checkCapacity()

    if (!this.lru.has(1)) {
      this.lru.set(1, new DoubleLinkedList())
    }

    const list = this.getList(1)
    const newNode = list.getNode()

    newNode.freq = 1
    newNode.key = key
    newNode.value = value

    this.minFreq = 1

    list.insertBeforeTail(newNode)
    this.map.set(key, newNode)
    this.size++
  }
}
