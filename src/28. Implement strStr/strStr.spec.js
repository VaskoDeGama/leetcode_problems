const strStr = require('./strStr')


describe('strStr',  () => {
  test('will be define', () => {
    expect(strStr).toBeDefined()
  })
  test('do not return anything, modify in-place instead.', () => {
    expect(strStr('','')).toBeDefined()
  })
  test('simple test 1', () => {
    expect(strStr('hello','ll')).toStrictEqual(2)
  })
  test('simple test 2', () => {
    expect(strStr('aaaaa','bba')).toStrictEqual(-1)
  })


})