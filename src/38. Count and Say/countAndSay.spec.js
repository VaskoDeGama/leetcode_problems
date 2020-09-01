const countAndSay = require('./countAndSay')

describe('countAndSay', () => {
  test('will be define', () => {
    expect(countAndSay).toBeDefined()
  })
  test('do return something.', () => {
    expect(countAndSay(4)).toBeDefined()
  })
  test('simple test 1', () => {
    expect(countAndSay(1)).toStrictEqual('1')
  })
  test('simple test 2', () => {
    expect(countAndSay(4)).toStrictEqual('1211')
  })
})
