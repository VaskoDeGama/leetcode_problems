import { describe, it } from 'node:test'
import assert from 'node:assert'
import removeElement from './removeElement.js'

describe('removeElement', () => {
  it('will be define', () => {
    assert.ok(removeElement !== undefined)
  })
  it('do not return anything, modify in-place instead.', () => {
    assert.ok(removeElement([], 0) !== undefined)
  })
  it('simple test 1', () => {
    const nums1 = [3, 2, 2, 3]
    const val = 3

    removeElement(nums1, val)
    assert.deepStrictEqual(nums1, [2, 2])
  })
  it('simple test 2', () => {
    const nums2 = [0, 1, 2, 2, 3, 0, 4, 2]
    const val = 2

    removeElement(nums2, val)
    assert.deepStrictEqual(nums2, [0, 1, 3, 0, 4])
  })
})
