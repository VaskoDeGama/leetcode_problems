import { describe, it } from 'node:test'
import assert from 'node:assert'
import LRUCache from './lru-cache.js'

describe('LRUCache', () => {
  it('will be define', () => {
    assert.ok(LRUCache !== undefined)
  })

  it('case1', () => {
    const lru = new LRUCache(2)

    lru.put(1, 1)
    lru.put(2, 2)

    const res1 = lru.get(1)

    assert.equal(res1, 1)

    lru.put(3, 3)

    const res2 = lru.get(2)

    assert.equal(res2, -1)

    lru.put(4, 4)

    const res3 = lru.get(1)

    assert.equal(res3, -1)

    const res4 = lru.get(3)

    assert.equal(res4, 3)

    const res5 = lru.get(4)

    assert.equal(res5, 4)
  })

  it('case2', () => {
    const lru = new LRUCache(2)

    const res1 = lru.get(2)

    assert.equal(res1, -1)

    lru.put(2, 6)

    const res2 = lru.get(1)

    assert.equal(res2, -1)

    lru.put(1, 5)
    lru.put(1, 2)

    const res3 = lru.get(1)

    assert.equal(res3, 2)

    const res4 = lru.get(2)

    assert.equal(res4, 6)
  })

  it('case3', () => {
    const lru = new LRUCache(2)

    const res1 = lru.get(3)

    assert.equal(res1, -1)

    lru.put(1, 1)
    lru.put(2, 2)
    lru.put(4, 4)

    const res2 = lru.get(1)

    assert.equal(res2, -1)
  })
})

describe('LRUCache (double-linked list)', () => {
  it('evicts least recently used when over capacity', () => {
    const lru = new LRUCache(2)

    lru.put(1, 10)
    lru.put(2, 20)

    assert.strictEqual(lru.get(1), 10)
    assert.strictEqual(lru.get(2), 20)

    lru.put(3, 30)

    assert.strictEqual(lru.get(1), -1)
    assert.strictEqual(lru.get(2), 20)
    assert.strictEqual(lru.get(3), 30)
  })

  it('get promotes key to most recently used', () => {
    const lru = new LRUCache(3)

    lru.put(1, 1)
    lru.put(2, 2)
    lru.put(3, 3)

    assert.strictEqual(lru.get(1), 1)

    lru.put(4, 4)

    assert.strictEqual(lru.get(2), -1)
    assert.strictEqual(lru.get(1), 1)
    assert.strictEqual(lru.get(3), 3)
    assert.strictEqual(lru.get(4), 4)
  })

  it('put updates existing key value', () => {
    const lru = new LRUCache(2)

    lru.put(1, 1)
    lru.put(2, 2)
    lru.put(1, 10)

    assert.strictEqual(lru.get(1), 10)
    assert.strictEqual(lru.get(2), 2)
  })

  it('put existing key promotes to MRU so it is evicted last', () => {
    const lru = new LRUCache(2)

    lru.put(1, 1)
    lru.put(2, 2)
    lru.get(1)

    lru.put(3, 3)

    assert.strictEqual(lru.get(2), -1)
    assert.strictEqual(lru.get(1), 1)
    assert.strictEqual(lru.get(3), 3)
  })

  it('capacity 1: only one key is kept', () => {
    const lru = new LRUCache(1)

    assert.strictEqual(lru.get(1), -1)

    lru.put(1, 100)
    assert.strictEqual(lru.get(1), 100)

    lru.put(2, 200)
    assert.strictEqual(lru.get(1), -1)
    assert.strictEqual(lru.get(2), 200)

    lru.put(2, 201)
    assert.strictEqual(lru.get(2), 201)
  })

  it('capacity 0: put does nothing, get always returns -1', () => {
    const lru = new LRUCache(0)

    lru.put(1, 1)
    assert.strictEqual(lru.get(1), -1)
  })

  it('multiple get on same key does not change eviction order', () => {
    const lru = new LRUCache(3)

    lru.put(1, 1)
    lru.put(2, 2)
    lru.put(3, 3)

    lru.get(2)
    lru.get(2)
    lru.put(4, 4)

    assert.strictEqual(lru.get(1), -1)
    assert.strictEqual(lru.get(2), 2)
    assert.strictEqual(lru.get(3), 3)
    assert.strictEqual(lru.get(4), 4)
  })
})
