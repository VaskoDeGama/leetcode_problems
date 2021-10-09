const rotate = require('./rotate')

describe('rotate', () => {
  test('will be define', () => {
    expect(rotate).toBeDefined()
  })
  test('do not return anything, modify nums in-place instead.', () => {
    const matrix = [[1,2,3],[4,5,6],[7,8,9]]
    expect(rotate(matrix)).not.toBeDefined()
  })
  test('simple test 1', () => {
    const matrix = [[1,2,3],[4,5,6],[7,8,9]]
    rotate(matrix)
    expect(matrix).toStrictEqual([[7,4,1],[8,5,2],[9,6,3]])
  })
  test('simple test 2', () => {
    const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
    rotate(matrix)
    expect(matrix).toStrictEqual([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]])
  })
  test('simple test 3', () => {
    const matrix = [[1]]
    rotate(matrix)
    expect(matrix).toStrictEqual([[1]])
  })
  test('simple test 4', () => {
    const matrix = [[1,2],[3,4]]
    rotate(matrix)
    expect(matrix).toStrictEqual([[3,1],[4,2]])
  })
})
