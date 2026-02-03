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

export default class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity | 0
    this.cache = new Map()
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1
    }

    const v = this.cache.get(key)

    this.cache.delete(key)
    this.cache.set(key, v)
    return v
  }

  put(key, value) {
    if (this.capacity <= 0) {
      return
    }

    if (this.cache.has(key)) {
      this.cache.delete(key)
      this.cache.set(key, value)
      return
    }

    if (this.cache.size >= this.capacity) {
      const lruKey = this.cache.keys().next().value

      this.cache.delete(lruKey)
    }

    this.cache.set(key, value)
  }
}
