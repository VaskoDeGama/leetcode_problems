const {runningSum}  = require('./runningSum')

describe('runningSum',  () => {
  test('will be define', () => {
    expect(runningSum).toBeDefined()
  })
  test('do return array', () => {
    expect(runningSum([1])).toBeDefined()
    expect(runningSum([1])).toBeInstanceOf(Array)
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