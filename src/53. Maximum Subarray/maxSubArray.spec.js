const maxSubArray = require('./maxSubArray')

describe('maxSubArray', () => {
  test('will be define', () => {
    expect(maxSubArray).toBeDefined()
  })
  test('do return something.', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBeDefined()
  })
  test('simple test 1', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6)
  })
})
