const {runningSum, getSum}  = require('./runningSum')

describe('getSum',  () => {
  test('will be define', () => {
    expect(getSum).toBeDefined()
  })
  test('do return array', () => {
    expect(getSum([1, 2])).toBeDefined()
    expect(typeof getSum([1, 2])).toBe('number')
  })
  test('simple test 1', () => {
    const nums1 = [1, 2, 3]
    expect(getSum(nums1)).toStrictEqual(6)
  })
  test('simple test 2', () => {
    const nums1 = [1]
    expect(getSum(nums1)).toStrictEqual(1)
  })
})

describe('runningSum',  () => {
  test('will be define', () => {
    expect(runningSum).toBeDefined()
  })
  test('do return array', () => {
    expect(runningSum([])).toBeDefined()
    expect(runningSum([])).toBeInstanceOf(Array)
  })
  test('simple test 1', () => {
    const nums1 = [1,2,3,4]
    expect(runningSum(nums1)).toStrictEqual([1,3,6,10])
  })
  test('simple test 2', () => {
    const nums1 = [1,1,1,1,1]
    expect(runningSum(nums1)).toStrictEqual([1,2,3,4,5])
  })
  test('simple test 3', () => {
    const nums1 = [3,1,2,10,1]
    expect(runningSum(nums1)).toStrictEqual([3,4,6,16,17])
  })


})