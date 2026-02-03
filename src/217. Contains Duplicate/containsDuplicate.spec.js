import { describe, it } from 'node:test'
import assert from 'node:assert'
import containsDuplicate from './containsDuplicate.js'

describe('containsDuplicate', () => {
  it('will be define', () => {
    assert.ok(containsDuplicate !== undefined)
  })
  it('do return boolean', () => {
    assert.strictEqual(typeof containsDuplicate([]), 'boolean')
  })
  it('simple test 1', () => {
    const nums1 = [1, 2, 3, 1]

    assert.ok(containsDuplicate(nums1))
  })
  it('simple test 2', () => {
    const nums1 = [1, 2, 3, 4]

    assert.ok(!containsDuplicate(nums1))
  })
  it('simple test 3', () => {
    const nums1 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

    assert.ok(containsDuplicate(nums1))
  })
})
