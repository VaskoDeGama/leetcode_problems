/**
 * Given an array nums. We define a running
 * sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * return the running sum of nums.
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
  nums.reduce((a,c,i,arr) => {
    arr[i] += a
    return arr[i]

  })
  return nums
}



module.exports = {
  runningSum,
}