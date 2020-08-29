const getSum = (arr) => {
  return arr.reduce((sum,item) => {
    return sum + item
  },0)
}

/**
 * Given an array nums. We define a running
 * sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * return the running sum of nums.
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
  const result = []
  nums.forEach((item, index, array) => {
    result.push(getSum(array.slice(0,index + 1)))
  })
  return result
}



module.exports = {
  runningSum,
  getSum
}