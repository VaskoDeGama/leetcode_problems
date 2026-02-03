/**
 * Given two binary strings, return their sum (also a binary string).
 * The input strings are both non-empty and contains only characters 1 or 0.
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
export default function addBinary(a, b) {
  const aBint = `0b${a}`
  const bBint = `0b${b}`
  const sum = BigInt(aBint) + BigInt(bBint)

  return sum.toString(2)
}
