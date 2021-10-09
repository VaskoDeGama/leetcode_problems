/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * @param {string[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {

  // check rows
  let rowMap = {}
  let columnMap = {}
  const squareMap = Array.from({length: 9}, () => [])


  for (let i = 0; i < board?.length; i += 1) {
    rowMap = {}
    columnMap = {}
    for (let j = 0; j < board?.length; j += 1) {
      const charForRowCheck = board[i][j]
      const charForColumnCheck = board[j][i]

      if (charForRowCheck !== '.') {
        if (!rowMap[charForRowCheck]) {
          rowMap[charForRowCheck] = true
        } else {
          return false
        }

        if (i < 3 && j < 3) {
          squareMap[0].push(charForRowCheck)
        } else if ( i < 3 && j < 6 && j >= 3) {
          squareMap[1].push(charForRowCheck)
        } else if (i < 3 && j >= 6 && j < 9) {
          squareMap[2].push(charForRowCheck)
        } else if (i >= 3 && i < 6 && j < 3) {
          squareMap[3].push(charForRowCheck)
        } else if (i >= 3 && i < 6 && j < 6 && j >= 3) {
          squareMap[4].push(charForRowCheck)
        } else if (i >= 3 && i < 6 && j >= 6 && j < 9) {
          squareMap[5].push(charForRowCheck)
        } else if (i >= 6 && i < 9 && j < 3) {
          squareMap[6].push(charForRowCheck)
        }  else if (i >= 6 && i < 9 && j < 6 && j >= 3) {
          squareMap[7].push(charForRowCheck)
        } else if (i >= 6 && i < 9 && j >= 6 && j < 9) {
          squareMap[8].push(charForRowCheck)
        }
      }

      if (charForColumnCheck !== '.') {
        if (!columnMap[charForColumnCheck]) {
          columnMap[charForColumnCheck] = true
        } else {
          return false
        }
      }
    }
  }

  return squareMap.every((line) =>  line?.length === new Set(line)?.size)
}



module.exports = isValidSudoku
