import { describe, it } from 'node:test'
import assert from 'node:assert'
import LFUCache from './lfu-cache.js'

describe('LFUCache', () => {
  it('will be define', () => {
    assert.ok(LFUCache !== undefined)
  })

  it('put one key', () => {
    const lfu = new LFUCache(2)

    lfu.put(1, 1)

    assert.equal(lfu.size, 1, 'Size mismatch')
    assert.equal(lfu.lru.size, 1, 'LRU size mismatch')

    const lruDLL = lfu.lru.get(1)

    assert.equal(lruDLL.size, 1, 'DLL size mismatch')

    const node = lruDLL.head.next

    assert.equal(node.freq, 1, 'Node freq mismatch')
    assert.equal(node.key, 1, 'Node key mismatch')
    assert.equal(node.value, 1, 'Node value mismatch')
  })

  it('put tow key', () => {
    const lfu = new LFUCache(2)

    lfu.put(1, 1)
    lfu.put(2, 2)

    assert.equal(lfu.size, 2, 'Size mismatch')
    assert.equal(lfu.lru.size, 1, 'LRU size mismatch')

    const lruDLL = lfu.lru.get(1)

    assert.equal(lruDLL.size, 2, 'DLL size mismatch')

    const nodeOne = lruDLL.head.next
    const nodeTwo = lruDLL.head.next.next

    assert.equal(nodeOne.freq, 1, 'nodeOne freq mismatch')
    assert.equal(nodeOne.key, 1, 'nodeOne key mismatch')
    assert.equal(nodeOne.value, 1, 'nodeOne value mismatch')

    assert.equal(nodeTwo.freq, 1, 'nodeTwo freq mismatch')
    assert.equal(nodeTwo.key, 2, 'nodeTwo key mismatch')
    assert.equal(nodeTwo.value, 2, 'nodeTwo value mismatch')
  })

  it('put tow key and get', () => {
    const lfu = new LFUCache(2)

    lfu.put(1, 1)
    lfu.put(2, 2)
    lfu.get(2)

    assert.equal(lfu.size, 2, 'Size mismatch')
    assert.equal(lfu.lru.size, 2, 'LRU size mismatch')

    const lruOneDLL = lfu.lru.get(1)
    const lruTwoDLL = lfu.lru.get(2)

    assert.equal(lruOneDLL.size, 1, 'DLL size mismatch')
    assert.equal(lruTwoDLL.size, 1, 'DLL size mismatch')

    const nodeOne = lruOneDLL.head.next
    const nodeTwo = lruTwoDLL.head.next

    assert.equal(nodeOne.freq, 1, 'nodeOne freq mismatch')
    assert.equal(nodeOne.key, 1, 'nodeOne key mismatch')
    assert.equal(nodeOne.value, 1, 'nodeOne value mismatch')

    assert.equal(nodeTwo.freq, 2, 'nodeTwo freq mismatch')
    assert.equal(nodeTwo.key, 2, 'nodeTwo key mismatch')
    assert.equal(nodeTwo.value, 2, 'nodeTwo value mismatch')
  })

  it('put tow key and update', () => {
    const lfu = new LFUCache(2)

    lfu.put(1, 1)
    lfu.put(2, 2)
    lfu.put(2, 3)

    assert.equal(lfu.size, 2, 'Size mismatch')
    assert.equal(lfu.lru.size, 2, 'LRU size mismatch')

    const lruOneDLL = lfu.lru.get(1)
    const lruTwoDLL = lfu.lru.get(2)

    assert.equal(lruOneDLL.size, 1, 'DLL size mismatch')
    assert.equal(lruTwoDLL.size, 1, 'DLL size mismatch')

    const nodeOne = lruOneDLL.head.next
    const nodeTwo = lruTwoDLL.head.next

    assert.equal(nodeOne.freq, 1, 'nodeOne freq mismatch')
    assert.equal(nodeOne.key, 1, 'nodeOne key mismatch')
    assert.equal(nodeOne.value, 1, 'nodeOne value mismatch')

    assert.equal(nodeTwo.freq, 2, 'nodeTwo freq mismatch')
    assert.equal(nodeTwo.key, 2, 'nodeTwo key mismatch')
    assert.equal(nodeTwo.value, 3, 'nodeTwo value mismatch')
  })

  it('put three key, lfu cap 2', () => {
    const lfu = new LFUCache(2)

    lfu.put(1, 1)
    lfu.put(2, 2)
    lfu.put(3, 3)

    assert.equal(lfu.size, 2, 'Size mismatch')
    assert.equal(lfu.lru.size, 1, 'LRU size mismatch')

    const lruOneDLL = lfu.lru.get(1)

    assert.equal(lruOneDLL.size, 2, 'DLL size mismatch')

    assert.equal(lruOneDLL.head.next.key, 2, 'node key mismatch')
    assert.equal(lruOneDLL.head.next.next.key, 3, 'node key mismatch')
  })

  it('case1', () => {
    const lfu = new LFUCache(2)

    lfu.put(1, 1)
    lfu.put(2, 2)

    const res1 = lfu.get(1)

    assert.equal(res1, 1, 'Result 1 mismatch')

    lfu.put(3, 3)

    const res2 = lfu.get(2)

    assert.equal(res2, -1, 'Result 2 mismatch')

    const res3 = lfu.get(3)

    assert.equal(res3, 3, 'Result 3 mismatch')

    lfu.put(4, 4)
    const res4 = lfu.get(1)

    assert.equal(res4, -1, 'Result 4 mismatch')

    const res5 = lfu.get(3)

    assert.equal(res5, 3, 'Result 5 mismatch')

    const res6 = lfu.get(4)

    assert.equal(res6, 4, 'Result 6 mismatch')
  })
})
