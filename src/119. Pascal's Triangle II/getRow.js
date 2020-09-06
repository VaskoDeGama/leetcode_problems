/**
 *
 * Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.
 * Notice that the row index starts from 0.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * @param {number} rowIndex
 * @return {number[]}
 *
 */
function getRow(rowIndex) {
  const line = [1]
  for (let i = 0; i < rowIndex; i += 1) {
    line.push(line[i] * ((rowIndex - i) / (i + 1)))
  }
  return line
}
module.exports = getRow
