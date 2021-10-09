const isValidSudoku = require('./isValidSudoku')

describe('isValidSudoku', () => {
  test('will be define', () => {
    expect(isValidSudoku).toBeDefined()
  })
  test('return Boolean', () => {
    const result = isValidSudoku([])
    expect(result).toBeDefined()
    expect(typeof result === 'boolean').toBeTruthy()
  })

  test('simple test 0', () => {
    const board  =
      [
        ["5","3","5"]
        ,[".",".","."]
        ,[".","9","8"]
      ]
    expect(isValidSudoku(board)).toBeFalsy()
  })

  test('simple test 1', () => {
    const board  =
      [
        ["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]
      ]
    expect( isValidSudoku(board)).toBeTruthy()
  })

  test('simple test 2', () => {
    const board =
      [
        ["8","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]
      ]
    const result = isValidSudoku(board)
    expect(result ).toBeFalsy()
  })
})

