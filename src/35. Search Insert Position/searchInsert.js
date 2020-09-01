/**
 * Given a sorted array and a target value, return
 * the index if the target is found. If not, return
 * the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchInsert(nums, target) {
  return nums.filter(n => n < target).length
}

module.exports = searchInsert