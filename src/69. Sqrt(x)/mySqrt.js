/**
 * Implement int sqrt(int x).
 * Compute and return the square root of x, where x
 * is guaranteed to be a non-negative integer.
 * Since the return type is an integer, the decimal digits are
 * truncated and only the integer part of the result is returned.
 *
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  let left = 1
  let right = Math.floor(x / 2) + 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid < x) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return right
}

module.exports = mySqrt
