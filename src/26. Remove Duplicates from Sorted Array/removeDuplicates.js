/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appear
 * only once and return the new length.
 * Do not allocate extra space for another array,
 * you must do this by modifying the input array in-place with O(1) extra memory.
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  nums = [
    ...nums.reduce((acc, item) => {
      if (acc.indexOf(item) === -1) {
        acc.push(item)
      }
      return acc
    }, []),
  ]
  return nums.length
}

module.exports = removeDuplicates
