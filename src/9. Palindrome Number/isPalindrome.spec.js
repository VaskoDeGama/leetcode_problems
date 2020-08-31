const isPalindrome = require('./isPalindrome')

describe('isPalindrome',  () => {
  test('will be define', () => {
    expect(isPalindrome).toBeDefined()
  })
  test('do  return Number', () => {
    expect(isPalindrome(121)).toBeDefined()
  })
  test('simple test 1', () => {
    expect( isPalindrome(-121)).toBeFalsy()
  })
  test('simple test 2', () => {
    expect( isPalindrome(121)).toBeTruthy()
  })
  test('simple test 3', () => {
    expect( isPalindrome(10)).toBeFalsy()
  })
})