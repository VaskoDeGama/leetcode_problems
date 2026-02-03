/**
 * Given a string s consists of upper/lower-case alphabets and empty space characters
 * ' ', return the length of last word (last word means the last appearing word if
 * we loop from left to right) in the string.
 *
 * If the last word does not exist, return 0.
 * Note: A word is defined as a maximal substring consisting of non-space characters only.
 * @param {string} s
 * @returns {number}
 */
export default function lengthOfLastWord(s) {
  const arr = s.split(' ')

  for (let r = arr.length - 1; r >= 0; r--) {
    if (arr[r] !== '') {
      return arr[r].length
    }
  }
  return 0
}
