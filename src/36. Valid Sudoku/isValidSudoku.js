/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * @param {string[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  for (let i = 0; i < board?.length; i += 1) {
    const row = new Set()
    const column = new Set()
    const sqr = new Set()
    for (let j = 0; j < board?.length; j += 1) {
      const rowN = board[i][j]
      const columnN = board[j][i]
      const sqrN = board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + j % 3]

      if (row.has(rowN) || column.has(columnN) || sqr.has(sqrN)) {
        return false
      }

      if (rowN !== '.') {
        row.add(rowN)
      }

      if (columnN !== '.') {
        column.add(columnN)
      }

      if (sqrN !== '.') {
        sqr.add(sqrN)
      }

    }
  }

  return true
}



module.exports = isValidSudoku
