import { describe, it } from 'node:test'
import assert from 'node:assert'
import removeDuplicates from './removeDuplicates.js'

describe('removeDuplicates', () => {
  it('will be define', () => {
    assert.ok(removeDuplicates !== undefined)
  })
  it('do  return Number', () => {
    assert.ok(removeDuplicates([1, 1, 2]) !== undefined)
  })
  it('simple test 1', () => {
    assert.strictEqual(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5)
  })
  it('simple test 2', () => {
    assert.strictEqual(removeDuplicates([1, 1, 2]), 2)
  })
})
