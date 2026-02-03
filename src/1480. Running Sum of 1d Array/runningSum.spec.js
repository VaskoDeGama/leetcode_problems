import { describe, it } from 'node:test'
import assert from 'node:assert'
import { runningSum } from './runningSum.js'

describe('runningSum', () => {
  it('will be define', () => {
    assert.ok(runningSum !== undefined)
  })
  it('do return array', () => {
    assert.ok(runningSum([1]) !== undefined)
    assert.ok(Array.isArray(runningSum([1])))
  })
  it('simple test 1', () => {
    const nums1 = [1, 2, 3, 4]

    assert.deepStrictEqual(runningSum(nums1), [1, 3, 6, 10])
  })
  it('simple test 2', () => {
    const nums1 = [1, 1, 1, 1, 1]

    assert.deepStrictEqual(runningSum(nums1), [1, 2, 3, 4, 5])
  })
  it('simple test 3', () => {
    const nums1 = [3, 1, 2, 10, 1]

    assert.deepStrictEqual(runningSum(nums1), [3, 4, 6, 16, 17])
  })
})
