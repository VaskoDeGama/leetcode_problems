const rotate = require('./rotate')

describe('rotate', () => {
  test('will be define', () => {
    expect(rotate).toBeDefined()
  })
  test('do not return anything, modify nums in-place instead.', () => {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).not.toBeDefined()
  })
  test('simple test 1', () => {
    const nums1 = [1, 2, 3, 4, 5, 6, 7]
    const k = 3
    rotate(nums1, k)
    expect(nums1).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
  })
  test('simple test 2', () => {
    const nums2 = [-1, -100, 3, 99]
    const k = 2
    rotate(nums2, k)
    expect(nums2).toStrictEqual([3, 99, -1, -100])
  })
  test('simple test 3', () => {
    const nums3 = [-1, -100]
    const k = 3
    rotate(nums3, k)
    expect(nums3).toStrictEqual([-100, -1])
  })
})
