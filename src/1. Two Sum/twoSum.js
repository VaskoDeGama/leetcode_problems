/**
 * Given an array of integers nums and and integer target, return
 * the indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i]
    if(map.has(needed)) {
      return [map.get(needed), i]
    }
    map.set(nums[i], i)

  }
  return []
}

module.exports = twoSum