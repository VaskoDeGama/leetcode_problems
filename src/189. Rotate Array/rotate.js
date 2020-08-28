/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  if(!nums || nums.length < 1) return
  nums.unshift(...nums.splice(nums.length  - k, nums.length - 1))
}

module.exports = rotate