/**
 * Given an integer array nums, find the contiguous subarray
 * (containing at least one number) which has the largest sum and return its sum.
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let prev = 0
  let max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i])
    max = Math.max(max, prev)
  }
  return max
}

module.exports = maxSubArray
