import { describe, it } from 'node:test'
import assert from 'node:assert'
import rotate from './rotate.js'

describe('rotate', () => {
  it('will be define', () => {
    assert.ok(rotate !== undefined)
  })
  it('do not return anything, modify nums in-place instead.', () => {
    assert.strictEqual(rotate([1, 2, 3, 4, 5, 6, 7], 3), undefined)
  })
  it('simple test 1', () => {
    const nums1 = [1, 2, 3, 4, 5, 6, 7]
    const k = 3

    rotate(nums1, k)
    assert.deepStrictEqual(nums1, [5, 6, 7, 1, 2, 3, 4])
  })
  it('simple test 2', () => {
    const nums2 = [-1, -100, 3, 99]
    const k = 2

    rotate(nums2, k)
    assert.deepStrictEqual(nums2, [3, 99, -1, -100])
  })
  it('simple test 3', () => {
    const nums3 = [-1, -100]
    const k = 3

    rotate(nums3, k)
    assert.deepStrictEqual(nums3, [-100, -1])
  })
})
