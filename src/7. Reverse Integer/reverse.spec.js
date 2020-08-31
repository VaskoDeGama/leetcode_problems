const reverse = require('./reverse')

describe('reverse',  () => {
  test('will be define', () => {
    expect(reverse).toBeDefined()
  })
  test('do  return Number', () => {
    expect(reverse(123)).toBeDefined()
  })
  test('simple test 1', () => {
    expect( reverse(123)).toBe(321)
  })
  test('simple test 2', () => {
    expect( reverse(-123)).toBe(-321)
  })
  test('simple test 3', () => {
    expect( reverse(120)).toBe(21)
  })
})