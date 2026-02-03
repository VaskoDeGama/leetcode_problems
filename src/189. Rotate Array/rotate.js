/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Follow up:
 * Try to come up as many solutions as you can, there are at least 3
 * different ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 * Constraints:
 * 1 <= nums.length <= 2 * 10^4
 * It's guaranteed that nums[i] fits in a 32 bit-signed integer.
 * k >= 0
 * @param {number[]} nums
 * @param {number} k
 * @returns {void} Do not return anything, modify nums in-place instead.
 */
export default function rotate(nums, k) {
  /**
   * @param {number} i
   * @param {number} j
   */
  function swap(i, j) {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  /**
   * @param {number} i
   * @param {number} j
   */
  function reverse(i, j) {
    while (i < j) {
      swap(i++, j--)
    }
  }

  const arrLength = nums.length

  k %= arrLength
  reverse(0, arrLength - k - 1)
  reverse(arrLength - k, arrLength - 1)
  reverse(0, arrLength - 1)
}
