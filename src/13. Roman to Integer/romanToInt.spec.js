const romanToInt = require('./romanToInt')

describe('isPalindrome',  () => {
  test('will be define', () => {
    expect(romanToInt).toBeDefined()
  })
  test('do  return Number', () => {
    expect(romanToInt('III')).toBeDefined()
  })
  test('simple test 1', () => {
    expect( romanToInt('IV')).toBe(4)
  })
  test('simple test 2', () => {
    expect( romanToInt('IX')).toBe(9)
  })
  test('simple test 3', () => {
    expect( romanToInt('LVIII')).toBe(58)
  })
  test('simple test 4', () => {
    expect( romanToInt('MCMXCIV')).toBe(1994)
  })
})