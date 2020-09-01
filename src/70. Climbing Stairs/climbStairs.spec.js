const climbStairs = require('./climbStairs')

describe('climbStairs', () => {
  test('will be define', () => {
    expect(climbStairs).toBeDefined()
  })
  test('do return something.', () => {
    expect(climbStairs(2)).toBeDefined()
  })
  test('simple test 1', () => {
    expect(climbStairs(2)).toStrictEqual(2)
  })
  test('simple test 2', () => {
    expect(climbStairs(3)).toStrictEqual(3)
  })
})
