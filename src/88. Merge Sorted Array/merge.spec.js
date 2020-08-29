const merge = require('./merge')


describe('merge',  () => {
  test('will be define', () => {
    expect(merge).toBeDefined()
  })
  test('do not return anything, modify in-place instead.', () => {
    expect(merge([], 0, [], 0)).not.toBeDefined()
  })
  test('simple test 1', () => {
    const nums1 = [1,2,3,0,0,0]
    const m = 3
    const nums2 = [2,5,6]
    const n = 3
    merge(nums1, m, nums2, n)
    expect(nums1).toStrictEqual([1,2,2,3,5,6])
  })


})