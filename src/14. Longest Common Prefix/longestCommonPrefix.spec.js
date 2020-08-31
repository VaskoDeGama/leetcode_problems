const longestCommonPrefix = require('./longestCommonPrefix')

describe('longestCommonPrefix', () => {
  test('will be define', () => {
    expect(longestCommonPrefix).toBeDefined()
  })
  test('do  return Number', () => {
    expect(longestCommonPrefix(['flower','flow','flight'])).toBeDefined()
  })
  test('simple test 1', () => {
    expect( longestCommonPrefix(['flower','flow','flight'])).toBe('fl')
  })
  test('simple test 2', () => {
    expect( longestCommonPrefix(['dog','racecar','car'])).toBe('')
  })
})

