import { describe, it } from 'node:test'
import assert from 'node:assert'
import reverse from './reverse.js'

describe('reverse', () => {
  it('will be define', () => {
    assert.ok(reverse !== undefined)
  })
  it('do  return Number', () => {
    assert.ok(reverse(123) !== undefined)
  })
  it('simple test 1', () => {
    assert.strictEqual(reverse(123), 321)
  })
  it('simple test 2', () => {
    assert.strictEqual(reverse(-123), -321)
  })
  it('simple test 3', () => {
    assert.strictEqual(reverse(120), 21)
  })
})
