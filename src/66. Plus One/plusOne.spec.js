const plusOne = require('./plusOne')

describe('plusOne', () => {
  test('will be define', () => {
    expect(plusOne).toBeDefined()
  })
  test('do return something.', () => {
    expect(plusOne([1, 2, 3])).toBeDefined()
  })
  test('simple test 1', () => {
    expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4])
  })
  test('simple test 2', () => {
    expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2])
  })
  test('simple test 3', () => {
    expect(plusOne([0])).toStrictEqual([1])
  })

  test('simple test 3', () => {
    expect(plusOne([9])).toStrictEqual([1,0])
  })
})
