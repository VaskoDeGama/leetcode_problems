/**
 * Implement strStr().
 * Return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */
export default function strStr(haystack, needle) {
  if (!needle) {
    return 0
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i
    }
  }
  return -1
}
