/**
 * Determine whether an integer is a palindrome. An integer is a
 * palindrome when it reads the same backward as forward.
 * @param {number} x
 * @returns {boolean}
 */
export default function isPalindrome(x) {
  if (x < 0) {
    return false
  }

  let rev = 0

  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    rev = rev * 10 + (i % 10)
  }
  return rev === x
}
