import { describe, it } from 'node:test'
import assert from 'node:assert'
import lengthOfLastWord from './lengthOfLastWord.js'

describe('lengthOfLastWord', () => {
  it('will be define', () => {
    assert.ok(lengthOfLastWord !== undefined)
  })
  it('do return something.', () => {
    assert.ok(lengthOfLastWord('Hello World') !== undefined)
  })
  it('simple test 1', () => {
    assert.deepStrictEqual(lengthOfLastWord('Hello World'), 5)
  })
})
