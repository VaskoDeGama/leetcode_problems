import { describe, it } from 'node:test'
import assert from 'node:assert'
import longestCommonPrefix from './longestCommonPrefix.js'

describe('longestCommonPrefix', () => {
  it('will be define', () => {
    assert.ok(longestCommonPrefix !== undefined)
  })
  it('do  return Number', () => {
    assert.ok(longestCommonPrefix(['flower', 'flow', 'flight']) !== undefined)
  })
  it('simple test 1', () => {
    assert.strictEqual(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl')
  })
  it('simple test 2', () => {
    assert.strictEqual(longestCommonPrefix(['dog', 'racecar', 'car']), '')
  })
})
