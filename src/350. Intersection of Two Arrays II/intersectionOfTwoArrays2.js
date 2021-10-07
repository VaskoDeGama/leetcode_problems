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
  const map  = new Map()
  const result = []

  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1)
    } else {
      map.set(n, 1)
    }
  }

  for (const n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      result.push(n)
      map.set(n, map.get(n) - 1)
    }
  }

  return result
}

module.exports = intersectionOfTwoArrays2
