const removeDuplicates = require('./removeDuplicates')

describe('removeDuplicates', () => {
  test('will be define', () => {
    expect(removeDuplicates).toBeDefined()
  })
  test('do  return Number', () => {
    expect(removeDuplicates([1,1,2])).toBeDefined()
  })
  test('simple test 1', () => {
    expect( removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5)
  })
  test('simple test 2', () => {
    expect( removeDuplicates([1,1,2])).toBe(2)
  })
})

