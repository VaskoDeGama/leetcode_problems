/**
 * Given a string s consists of upper/lower-case alphabets and empty space characters
 * ' ', return the length of last word (last word means the last appearing word if
 * we loop from left to right) in the string.
 *
 * If the last word does not exist, return 0.
 * Note: A word is defined as a maximal substring consisting of non-space characters only.
 *
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(s) {
  const result = s
    .split(' ')
    .filter((i) => i !== ' ' && i !== '')
    .pop()
  return result ? result.length : 0
}

module.exports = lengthOfLastWord
