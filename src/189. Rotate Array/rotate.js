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
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  if(!nums || nums.length < 1) return
  nums.unshift(...nums.splice(nums.length  - k, nums.length - 1))
}

module.exports = rotate