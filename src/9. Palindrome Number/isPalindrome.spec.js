import { describe, it } from 'node:test'
import assert from 'node:assert'
import isPalindrome from './isPalindrome.js'

describe('isPalindrome', () => {
  it('will be define', () => {
    assert.ok(isPalindrome !== undefined)
  })
  it('do  return Number', () => {
    assert.ok(isPalindrome(121) !== undefined)
  })
  it('simple test 1', () => {
    assert.ok(!isPalindrome(-121))
  })
  it('simple test 2', () => {
    assert.ok(isPalindrome(121))
  })
  it('simple test 3', () => {
    assert.ok(!isPalindrome(10))
  })
})
