import { describe, it } from 'node:test'
import assert from 'node:assert'
import merge from './merge.js'

describe('merge', () => {
  it('will be define', () => {
    assert.ok(merge !== undefined)
  })
  it('do not return anything, modify in-place instead.', () => {
    assert.strictEqual(merge([], 0, [], 0), undefined)
  })
  it('simple test 1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const m = 3
    const nums2 = [2, 5, 6]
    const n = 3

    merge(nums1, m, nums2, n)
    assert.deepStrictEqual(nums1, [1, 2, 2, 3, 5, 6])
  })
})
