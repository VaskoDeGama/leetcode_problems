/**
 * Write a function to find the longest common prefix
 * string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 *
 * @param {string[]} strs
 * @return {string}
 */

function longestCommonPrefix(strs) {
  if (!strs.length) return ''
  let prefix = ''
  for (let i = 0; i < Math.min(...strs.map((item) => item.length)); i++) {
    if (strs.every((str) => str[i] === strs[0][i])) {
      prefix += strs[0][i]
    } else {
      break
    }
  }
  return prefix
}

module.exports = longestCommonPrefix
