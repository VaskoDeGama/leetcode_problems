const isValid = require('./isValid')

describe('longestCommonPrefix', () => {
  test('will be define', () => {
    expect(isValid).toBeDefined()
  })
  test('do  return Number', () => {
    expect(isValid("()")).toBeDefined()
  })
  test('simple test 1', () => {
    expect( isValid("()[]{}")).toBeTruthy()
  })
  test('simple test 2', () => {
    expect( isValid("{[]}")).toBeTruthy()
  })
  test('simple test 3', () => {
    expect( isValid("([)]")).toBeFalsy()
  })
})

