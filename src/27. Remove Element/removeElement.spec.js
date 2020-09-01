const removeElement = require('./removeElement')


describe('removeElement',  () => {
  test('will be define', () => {
    expect(removeElement).toBeDefined()
  })
  test('do not return anything, modify in-place instead.', () => {
    expect(removeElement([], 0)).toBeDefined()
  })
  test('simple test 1', () => {
    const nums1 = [3,2,2,3]
    const val = 3

    removeElement(nums1, val)
    expect(nums1).toStrictEqual([2,2])
  })
  test('simple test 2', () => {
    const nums2 = [0,1,2,2,3,0,4,2]
    const val = 2
    removeElement(nums2, val)
    expect(nums2).toStrictEqual([0,1,3,0,4])
  })


})