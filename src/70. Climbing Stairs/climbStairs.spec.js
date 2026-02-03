import { describe, it } from 'node:test'
import assert from 'node:assert'
import climbStairs from './climbStairs.js'

describe('climbStairs', () => {
  it('will be define', () => {
    assert.ok(climbStairs !== undefined)
  })
  it('do return something.', () => {
    assert.ok(climbStairs(2) !== undefined)
  })
  it('simple test 1', () => {
    assert.deepStrictEqual(climbStairs(2), 2)
  })
  it('simple test 2', () => {
    assert.deepStrictEqual(climbStairs(3), 3)
  })
})
