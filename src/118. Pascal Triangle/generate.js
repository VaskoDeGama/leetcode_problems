
const getRow = (row) => {
  const line = [1]
  for (let i = 0; i < row; i += 1) {
    line.push(line[i] * ((row - i) / (i + 1)))
  }
  return line
}

/**
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 * @param {number} numRows
 * @return {number[][]}
 */


function generate(numRows) {
  const result = []
  for (let i = 0; i < numRows; i++) {
    result.push(getRow(i))
  }
  return result
}



module.exports = {
  generate,
  getRow
}