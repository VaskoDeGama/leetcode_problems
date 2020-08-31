/**
 * Determine whether an integer is a palindrome. An integer is a
 * palindrome when it reads the same backward as forward.
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  return x.toString() === x.toString().split('').reverse().join('')
}

module.exports = isPalindrome