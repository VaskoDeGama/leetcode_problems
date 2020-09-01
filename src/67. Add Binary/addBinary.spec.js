const addBinary = require('./addBinary')

describe('addBinary', () => {
  test('will be define', () => {
    expect(addBinary).toBeDefined()
  })
  test('do return something.', () => {
    expect(addBinary('11', '1')).toBeDefined()
  })
  test('simple test 1', () => {
    expect(addBinary('11', '1')).toStrictEqual('100')
  })
  test('simple test 2', () => {
    expect(addBinary('1010', '1011')).toStrictEqual('10101')
  })
})
