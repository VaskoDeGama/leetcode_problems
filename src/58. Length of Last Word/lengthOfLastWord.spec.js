const lengthOfLastWord = require('./lengthOfLastWord')

describe('lengthOfLastWord', () => {
  test('will be define', () => {
    expect(lengthOfLastWord).toBeDefined()
  })
  test('do return something.', () => {
    expect(lengthOfLastWord('Hello World')).toBeDefined()
  })
  test('simple test 1', () => {
    expect(lengthOfLastWord('Hello World')).toStrictEqual(5)
  })
})
