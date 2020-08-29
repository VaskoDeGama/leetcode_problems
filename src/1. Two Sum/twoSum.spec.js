const twoSum = require('./twoSum')


describe('twoSum',  () => {
  test('will be define', () => {
    expect(twoSum).toBeDefined()
  })
  test('do return array', () => {
    expect(twoSum([], 0)).toBeDefined()
    expect(twoSum([], 0)).toBeInstanceOf(Array)
  })
  test('simple test 1', () => {
    const nums1 = [2,7,11,15]
    const target = 9
    expect(twoSum(nums1, target)).toStrictEqual([0,1])
  })
  test('simple test 2', () => {
    const nums1 = [3,2,4]
    const target = 6
    expect(twoSum(nums1, target)).toStrictEqual([1,2])
  })
  test('simple test 3', () => {
    const nums1 = [3,3]
    const target = 6
    expect(twoSum(nums1, target)).toStrictEqual([0,1])
  })


})