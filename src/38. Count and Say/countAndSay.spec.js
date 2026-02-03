import { describe, it } from 'node:test'
import assert from 'node:assert'
import countAndSay from './countAndSay.js'

describe('countAndSay', () => {
  it('will be define', () => {
    assert.ok(countAndSay !== undefined)
  })
  it('do return something.', () => {
    assert.ok(countAndSay(4) !== undefined)
  })
  it('simple test 1', () => {
    assert.deepStrictEqual(countAndSay(1), '1')
  })
  it('simple test 2', () => {
    assert.deepStrictEqual(countAndSay(4), '1211')
  })
})
