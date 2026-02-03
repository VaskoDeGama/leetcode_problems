import { describe, it } from 'node:test'
import assert from 'node:assert'
import isMatch from './isMatch.js'

describe('isMatch', () => {
  it('will be define', () => {
    assert.ok(isMatch !== undefined)
  })
  it('do return something.', () => {
    assert.ok(isMatch('aa', 'a') !== undefined)
  })
  it('simple test 1.1', () => {
    assert.strictEqual(isMatch('aa', 'a'), false)
  })
  it('simple test 1.2', () => {
    assert.strictEqual(isMatch('aa', 'aa'), true)
  })
  it('simple test 2', () => {
    assert.strictEqual(isMatch('aa', 'a*'), true)
  })
  it('simple test 3', () => {
    assert.strictEqual(isMatch('ab', '.*'), true)
  })
  it('simple test 4', () => {
    assert.strictEqual(isMatch('aab', 'c*a*b'), true)
  })
  it('simple test 5', () => {
    assert.strictEqual(isMatch('mississippi', 'mis*is*p*.'), false)
  })
})
