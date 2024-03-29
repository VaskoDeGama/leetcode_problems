/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
 * DO NOT allocate another 2D matrix and do the rotation.
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(matrix, ) {
  const {length} = matrix

  // transpose
  for (let i=0;i<length;i++) {
    for (let j=i;j<length;j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  // reflect
  for (let i=0;i<length;i++) {
    for (let j=0;j<length/2;j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[i][length-j-1]
      matrix[i][length-j-1] = temp
    }
  }
}

module.exports = rotate
