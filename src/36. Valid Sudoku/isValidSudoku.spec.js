import { describe, it } from 'node:test'
import assert from 'node:assert'
import isValidSudoku from './isValidSudoku.js'

describe('isValidSudoku', () => {
  it('will be define', () => {
    assert.ok(isValidSudoku !== undefined)
  })
  it('return Boolean', () => {
    const result = isValidSudoku([])

    assert.ok(result !== undefined)
    assert.strictEqual(typeof result === 'boolean', true)
  })

  it('simple test 0', () => {
    const board = [
      ['5', '3', '5'],
      ['.', '.', '.'],
      ['.', '9', '8']
    ]

    assert.ok(!isValidSudoku(board))
  })

  it('simple test 1', () => {
    const board = [
      ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9']
    ]

    assert.ok(isValidSudoku(board))
  })

  it('simple test 2', () => {
    const board = [
      ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9']
    ]
    const result = isValidSudoku(board)

    assert.ok(!result)
  })
})
