import { describe, it } from 'node:test'
import assert from 'node:assert'
import romanToInt from './romanToInt.js'

describe('romanToInt', () => {
  it('will be define', () => {
    assert.ok(romanToInt !== undefined)
  })
  it('do  return Number', () => {
    assert.ok(romanToInt('III') !== undefined)
  })
  it('simple test 1', () => {
    assert.strictEqual(romanToInt('IV'), 4)
  })
  it('simple test 2', () => {
    assert.strictEqual(romanToInt('IX'), 9)
  })
  it('simple test 3', () => {
    assert.strictEqual(romanToInt('LVIII'), 58)
  })
  it('simple test 4', () => {
    assert.strictEqual(romanToInt('MCMXCIV'), 1994)
  })
})
