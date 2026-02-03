import { describe, it } from 'node:test'
import assert from 'node:assert'
import maxProfit from './maxProfit.js'

describe('maxProfit', () => {
  it('will be define', () => {
    assert.ok(maxProfit !== undefined)
  })
  it('do return something.', () => {
    assert.ok(maxProfit([7, 1, 5, 3, 6, 4]) !== undefined)
  })
  it('simple test 1', () => {
    assert.deepStrictEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5)
  })
  it('simple test 2', () => {
    assert.deepStrictEqual(maxProfit([7, 6, 4, 3, 1]), 0)
  })
  it('simple test 3', () => {
    assert.deepStrictEqual(maxProfit([2, 4, 1]), 2)
  })
})
