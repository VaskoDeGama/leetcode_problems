const mySqrt = require('./mySqrt')

describe('mySqrt', () => {
  test('will be define', () => {
    expect(mySqrt).toBeDefined()
  })
  test('do return something.', () => {
    expect(mySqrt(2)).toBeDefined()
  })
  test('simple test 1', () => {
    expect(mySqrt(2)).toStrictEqual(1)
  })
  test('simple test 2', () => {
    expect(mySqrt(8)).toStrictEqual(2)
  })
})
