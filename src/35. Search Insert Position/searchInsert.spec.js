const searchInsert = require('./searchInsert')


describe('searchInsert',  () => {
  test('will be define', () => {
    expect(searchInsert).toBeDefined()
  })
  test('do return something.', () => {
    expect(searchInsert([],0)).toBeDefined()
  })
  test('simple test 1', () => {
    expect(searchInsert([1,3,5,6], 5)).toStrictEqual(2)
  })
  test('simple test 2', () => {
    expect(searchInsert([1,3,5,6], 2)).toStrictEqual(1)
  })
  test('simple test 3', () => {
    expect(searchInsert([1,3,5,6], 7)).toStrictEqual(4)
  })
  test('simple test 4', () => {
    expect(searchInsert([1,3,5,6], 0)).toStrictEqual(0)
  })
})