/**
 * Given two sorted integer arrays nums1 and nums2,
 * merge nums2 into nums1 as one sorted array.
 * Note:
 * The number of elements initialized in nums1 and nums2 are m and n respectively.
 * You may assume that nums1 has enough space (size that is equal to m + n) to hold
 * additional elements from nums2.
 * Constraints:
 * -10^9 <= nums1[i], nums2[i] <= 10^9
 * nums1.length == m + n
 * nums2.length == n
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  let position = m + n - 1
  m--
  n--
  while (n >= 0) {
    if(nums1[m] > nums2[n]) {
      nums1[position--] = nums1[m--]
    } else {
      nums1[position--] = nums2[n--]
    }
  }
}

module.exports = merge