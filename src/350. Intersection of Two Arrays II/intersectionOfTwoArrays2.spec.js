import { describe, it } from 'node:test'
import assert from 'node:assert'
import intersectionOfTwoArrays2 from './intersectionOfTwoArrays2.js'

describe('intersectionOfTwoArrays2', () => {
  it('will be define', () => {
    assert.ok(intersectionOfTwoArrays2 !== undefined)
  })
  it('return Array', () => {
    const result = intersectionOfTwoArrays2([1, 2, 2, 1], [2, 2])

    assert.ok(result !== undefined)
    assert.ok(Array.isArray(result))
  })
  it('simple test 1', () => {
    assert.deepStrictEqual(intersectionOfTwoArrays2([1, 2, 2, 1], [2, 2]), [2, 2])
  })
  it('simple test 2', () => {
    const result = intersectionOfTwoArrays2([4, 9, 5], [9, 4, 9, 8, 4])

    assert.ok(result.includes(9) && result.includes(4) && result.length === 2)
  })
})
