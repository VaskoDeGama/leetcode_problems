import { describe, it } from 'node:test'
import assert from 'node:assert'
import plusOne from './plusOne.js'

describe('plusOne', () => {
  it('will be define', () => {
    assert.ok(plusOne !== undefined)
  })
  it('do return something.', () => {
    assert.ok(plusOne([1, 2, 3]) !== undefined)
  })
  it('simple test 1', () => {
    assert.deepStrictEqual(plusOne([1, 2, 3]), [1, 2, 4])
  })
  it('simple test 2', () => {
    assert.deepStrictEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2])
  })
  it('simple test 3', () => {
    assert.deepStrictEqual(plusOne([0]), [1])
  })

  it('simple test 3', () => {
    assert.deepStrictEqual(plusOne([9]), [1, 0])
  })
})
