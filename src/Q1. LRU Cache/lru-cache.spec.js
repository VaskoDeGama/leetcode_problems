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
