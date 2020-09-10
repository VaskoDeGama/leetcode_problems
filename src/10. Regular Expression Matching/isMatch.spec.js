const isMatch = require('./isMatch')

describe('isMatch', () => {
  test('will be define', () => {
    expect(isMatch).toBeDefined()
  })
  test('do return something.', () => {
    expect(isMatch('aa', 'a')).toBeDefined()
  })
  test('simple test 1.1', () => {
    expect(isMatch('aa', 'a')).toStrictEqual(false)
  })
  test('simple test 1.2', () => {
    expect(isMatch('aa', 'aa')).toStrictEqual(true)
  })
  test('simple test 2', () => {
    expect(isMatch('aa', 'a*')).toStrictEqual(true)
  })
  test('simple test 3', () => {
    expect(isMatch('ab', '.*')).toStrictEqual(true)
  })
  test('simple test 4', () => {
    expect(isMatch('aab', 'c*a*b')).toStrictEqual(true)
  })
  test('simple test 5', () => {
    expect(isMatch('mississippi', 'mis*is*p*.')).toStrictEqual(false)
  })
})
