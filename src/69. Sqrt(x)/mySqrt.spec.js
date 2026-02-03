import { describe, it } from 'node:test'
import assert from 'node:assert'
import mySqrt from './mySqrt.js'

describe('mySqrt', () => {
  it('will be define', () => {
    assert.ok(mySqrt !== undefined)
  })
  it('do return something.', () => {
    assert.ok(mySqrt(2) !== undefined)
  })
  it('simple test 1', () => {
    assert.deepStrictEqual(mySqrt(2), 1)
  })
  it('simple test 2', () => {
    assert.deepStrictEqual(mySqrt(8), 2)
  })
})
