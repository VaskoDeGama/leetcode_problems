import { describe, it } from 'node:test'
import assert from 'node:assert'
import twoSum from './twoSum.js'

describe('twoSum', () => {
  it('will be define', () => {
    assert.ok(twoSum !== undefined)
  })
  it('do return array', () => {
    assert.ok(twoSum([], 0) !== undefined)
    assert.ok(Array.isArray(twoSum([], 0)))
  })
  it('simple test 1', () => {
    const nums1 = [2, 7, 11, 15]
    const target = 9

    assert.deepStrictEqual(twoSum(nums1, target), [0, 1])
  })
  it('simple test 2', () => {
    const nums1 = [3, 2, 4]
    const target = 6

    assert.deepStrictEqual(twoSum(nums1, target), [1, 2])
  })
  it('simple test 3', () => {
    const nums1 = [3, 3]
    const target = 6

    assert.deepStrictEqual(twoSum(nums1, target), [0, 1])
  })
})
