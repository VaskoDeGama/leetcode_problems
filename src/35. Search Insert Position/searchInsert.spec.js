import { describe, it } from 'node:test'
import assert from 'node:assert'
import searchInsert from './searchInsert.js'

describe('searchInsert', () => {
  it('will be define', () => {
    assert.ok(searchInsert !== undefined)
  })
  it('do return something.', () => {
    assert.ok(searchInsert([], 0) !== undefined)
  })
  it('simple test 1', () => {
    assert.deepStrictEqual(searchInsert([1, 3, 5, 6], 5), 2)
  })
  it('simple test 2', () => {
    assert.deepStrictEqual(searchInsert([1, 3, 5, 6], 2), 1)
  })
  it('simple test 3', () => {
    assert.deepStrictEqual(searchInsert([1, 3, 5, 6], 7), 4)
  })
  it('simple test 4', () => {
    assert.deepStrictEqual(searchInsert([1, 3, 5, 6], 0), 0)
  })
})
