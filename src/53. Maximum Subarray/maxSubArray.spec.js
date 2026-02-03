import { describe, it } from 'node:test'
import assert from 'node:assert'
import maxSubArray from './maxSubArray.js'

describe('maxSubArray', () => {
  it('will be define', () => {
    assert.ok(maxSubArray !== undefined)
  })
  it('do return something.', () => {
    assert.ok(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) !== undefined)
  })
  it('simple test 1', () => {
    assert.deepStrictEqual(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
  })
})
