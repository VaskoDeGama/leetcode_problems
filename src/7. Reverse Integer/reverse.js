/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * Assume we are dealing with an environment which could only store
 * integers within the 32-bit signed integer range: [−231,  231 − 1].
 * For the purpose of this problem, assume that your function returns
 * 0 when the reversed integer overflows.
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
 const absReversed = Math.abs(x).toString().split('').reverse().join('')
  if(absReversed > 2 ** 31) return 0
  return absReversed * Math.sign(x)
}

module.exports = reverse