/**
 * Given two integer arrays nums1 and nums2, return an array of their
 * intersection. Each element in the result must appear as many times
 * as it shows in both arrays and you may return the result in any order.
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersectionOfTwoArrays2(nums1, nums2) {
  const result = []
  const sortedNums1 = nums1.sort()
  const sortedNums2 = nums2.sort()
  const [long, short] = nums1.length > nums2.length ? [sortedNums1, sortedNums2] : [sortedNums2, sortedNums1]

  for (let i = 0; i < long.length; i += 1) {
    const indexInShort = short.indexOf(long[i])
    if (indexInShort !== -1) {
      short.splice(indexInShort, 1)
      result.push(long[i])
    }
  }

  return result
}

module.exports = intersectionOfTwoArrays2
