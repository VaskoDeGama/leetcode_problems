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
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if(i !== j && nums[i] + nums[j] === target) {
        return [i,j]
      }
    }
  }
  return []
}

module.exports = twoSum