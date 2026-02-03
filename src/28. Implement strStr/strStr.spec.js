import { describe, it } from 'node:test'
import assert from 'node:assert'
import strStr from './strStr.js'

describe('strStr', () => {
  it('will be define', () => {
    assert.ok(strStr !== undefined)
  })
  it('do not return something', () => {
    assert.ok(strStr('', '') !== undefined)
  })
  it('simple test 1', () => {
    assert.deepStrictEqual(strStr('hello', 'll'), 2)
  })
  it('simple test 2', () => {
    assert.deepStrictEqual(strStr('aaaaa', 'bba'), -1)
  })
})
