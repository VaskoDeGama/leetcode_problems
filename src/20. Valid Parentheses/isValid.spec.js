import { describe, it } from 'node:test'
import assert from 'node:assert'
import isValid from './isValid.js'

describe('longestCommonPrefix', () => {
  it('will be define', () => {
    assert.ok(isValid !== undefined)
  })
  it('do  return Number', () => {
    assert.ok(isValid('()') !== undefined)
  })
  it('simple test 1', () => {
    assert.ok(isValid('()[]{}'))
  })
  it('simple test 2', () => {
    assert.ok(isValid('{[]}'))
  })
  it('simple test 3', () => {
    assert.ok(!isValid('([)]'))
  })
})
