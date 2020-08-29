const containsDuplicate = require('./containsDuplicate')

expect.extend({
  toBeBoolean(received) {
    return typeof received === 'boolean'
        ? {
          message: () => `expected ${received} to be boolean`,
          pass: true,
        }
        : {
          message: () => `expected ${received} to be boolean`,
          pass: false,
        }
  },
})

describe('containsDuplicate',  () => {
  test('will be define', () => {
    expect(containsDuplicate).toBeDefined()
  })
  test('do return boolean', () => {
    expect(containsDuplicate([])).toBeBoolean()
  })
  test('simple test 1', () => {
    const nums1 = [1,2,3,1]
    expect(containsDuplicate(nums1)).toBeTruthy()
  })
  test('simple test 2', () => {
    const nums1 = [1,2,3,4]
    expect(containsDuplicate(nums1)).toBeFalsy()
  })
  test('simple test 3', () => {
    const nums1 = [1,1,1,3,3,4,3,2,4,2]
    expect(containsDuplicate(nums1)).toBeTruthy()
  })
})