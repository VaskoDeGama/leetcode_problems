/**
 * @param {string} s
 * @returns {number}
 */
function count(s) {
  const char = s.charAt(0)
  let cnt = 1

  while (cnt < s.length) {
    if (s.charAt(cnt) === char) {
      cnt++
    } else {
      break
    }
  }
  return cnt
}

/**
 * The count-and-say sequence is the sequence of integers with the first five terms as following:
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
 * You can do so recursively, in other words from the previous member read off the digits,
 * counting the number of digits in groups of the same digit.
 * Note: Each term of the sequence of integers will be represented as a string.
 * @param {number} n
 * @returns {string}
 */
export default function countAndSay(n) {
  let s = '1'
  let cnt

  for (let i = 2; i <= n; i++) {
    let output = ''

    while (s.length) {
      cnt = count(s)
      output = output + cnt + s.charAt(0)
      s = s.substring(cnt)
    }
    s = output
  }

  return s
}
