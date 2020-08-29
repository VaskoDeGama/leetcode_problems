const {generate, getRow} = require('./generate')


describe('getRow',  () => {
  test('will be define', () => {
    expect(getRow).toBeDefined()
  })
  test('do return array', () => {
    expect(getRow(1)).toBeDefined()
    expect(getRow(1)).toBeInstanceOf(Array)
  })
  test('simple test 1', () => {
    const numRows = 3
    const result = getRow(numRows)
    expect(result).toStrictEqual([1, 3, 3, 1])
  })
})

describe('generate',  () => {
  test('will be define', () => {
    expect(generate).toBeDefined()
  })
  test('do return array', () => {
    expect(generate(1)).toBeDefined()
    expect(generate(1)).toBeInstanceOf(Array)
  })
  test('simple test 1', () => {
    const numRows = 5
    const result = generate(numRows)
    expect(result).toStrictEqual([
      [1],
      [1,1],
      [1,2,1],
      [1,3,3,1],
      [1,4,6,4,1]
    ])
  })
})

