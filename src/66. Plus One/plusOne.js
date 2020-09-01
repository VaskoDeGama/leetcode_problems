/**
 * Given a non-empty array of digits representing a non-negative integer,
 * increment one to the integer.
 * The digits are stored such that the most significant digit is
 * at the head of the list, and each element in the array contains a single digit.
 * You may assume the integer does not contain any
 * leading zero, except the number 0 itself.
 *
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  const resArr = []
  let carry = 1

  for (let i = digits.length - 1; i >= 0; i--) {
    let res = digits[i] + carry
    carry = Math.floor(res / 10)
    if (res >= 10) res = 0
    resArr.unshift(res)
  }
  if (carry > 0) {
    resArr.unshift(1)
  }

  return resArr
}

module.exports = plusOne
