/**
 * Given a non-empty array of digits representing a non-negative integer,
 * increment one to the integer.
 * The digits are stored such that the most significant digit is
 * at the head of the list, and each element in the array contains a single digit.
 * You may assume the integer does not contain any
 * leading zero, except the number 0 itself.
 * @param {number[]} digits
 * @returns {number[]}
 */
export default function plusOne(digits) {
  let remainder = 0

  for (let i = digits.length - 1; i >= 0; i -= 1) {
    let number = digits[i]

    if (i === digits.length - 1) {
      number += 1
    }

    if (remainder > 0) {
      number += remainder
    }

    if (number > 9) {
      remainder = 1
    } else {
      remainder = 0
    }

    digits[i] = number % 10
  }

  if (remainder > 0) {
    digits.unshift(1)
  }

  return digits
}
