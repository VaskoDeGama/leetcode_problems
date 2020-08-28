const rotate = require('./rotate')


describe('rotate',  () => {
  test('will be define', () => {
    expect(rotate).toBeDefined()
  })
  test('do not return anything, modify nums in-place instead.', () => {
    expect(rotate()).not.toBeDefined()
  })
  test('simple test 1', () => {
    const nums = [1,2,3,4,5,6,7]
    const k = 3
    rotate(nums, k)
    expect(nums).toStrictEqual([5,6,7,1,2,3,4])
  })
  test('simple test 2', () => {
    const nums2 = [-1,-100,3,99]
    const k = 2
    rotate(nums2, k)
    expect(nums2).toStrictEqual([5,6,7,1,2,3,4])
  })

})