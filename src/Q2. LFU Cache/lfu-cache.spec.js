import { describe, it } from 'node:test'
import assert from 'node:assert'
import LFUCache from './lfu-cache.js'

describe('LFUCache', () => {
  it('will be define', () => {
    assert.ok(LFUCache !== undefined)
  })
})
