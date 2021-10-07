const intersectionOfTwoArrays2 = require('./intersectionOfTwoArrays2')

describe('intersectionOfTwoArrays2', () => {
  test('will be define', () => {
    expect(intersectionOfTwoArrays2).toBeDefined()
  })
  test('return Array', () => {
    const result = intersectionOfTwoArrays2([1,2,2,1], [2,2])
    expect(result).toBeDefined()
    expect(Array.isArray(result)).toBeTruthy()
  })
  test('simple test 1', () => {
    expect( intersectionOfTwoArrays2([1,2,2,1], [2,2])).toStrictEqual([2,2])
  })
  test('simple test 2', () => {
    const result = intersectionOfTwoArrays2([4,9,5], [9,4,9,8,4])
    expect( result.includes(9) && result.includes(4) && result.length === 2).toBeTruthy()
  })
})

