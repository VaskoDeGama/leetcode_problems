import { describe, it } from 'node:test'
import assert from 'node:assert'
import { generate, getRow } from './generate.js'

describe('getRow', () => {
  it('will be define', () => {
    assert.ok(getRow !== undefined)
  })
  it('do return array', () => {
    assert.ok(getRow(1) !== undefined)
    assert.ok(Array.isArray(getRow(1)))
  })
  it('simple test 1', () => {
    const numRows = 3
    const result = getRow(numRows)

    assert.deepStrictEqual(result, [1, 3, 3, 1])
  })
})

describe('generate', () => {
  it('will be define', () => {
    assert.ok(generate !== undefined)
  })
  it('do return array', () => {
    assert.ok(generate(1) !== undefined)
    assert.ok(Array.isArray(generate(1)))
  })
  it('simple test 1', () => {
    const numRows = 5
    const result = generate(numRows)

    assert.deepStrictEqual(result, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
  })
})
