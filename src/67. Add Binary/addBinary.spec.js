import { describe, it } from 'node:test'
import assert from 'node:assert'
import addBinary from './addBinary.js'

describe('addBinary', () => {
  it('will be define', () => {
    assert.ok(addBinary !== undefined)
  })
  it('do return something.', () => {
    assert.ok(addBinary('11', '1') !== undefined)
  })
  it('simple test 1', () => {
    assert.deepStrictEqual(addBinary('11', '1'), '100')
  })
  it('simple test 2', () => {
    assert.deepStrictEqual(addBinary('1010', '1011'), '10101')
  })
})
