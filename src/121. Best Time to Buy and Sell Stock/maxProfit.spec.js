const maxProfit = require('./maxProfit')

describe('maxProfit', () => {
  test('will be define', () => {
    expect(maxProfit).toBeDefined()
  })
  test('do return something.', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBeDefined()
  })
  test('simple test 1', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(5)
  })
  test('simple test 2', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0)
  })
  test('simple test 3', () => {
    expect(maxProfit([2, 4, 1])).toStrictEqual(2)
  })
})
