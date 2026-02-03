/**
 * @param {string} s
 * @param {string} p
 * @returns {boolean}
 */
export default function isMatch(s, p) {
  const memo = new Array(s.length).fill(0).map(() => new Array(p.length).fill(null))

  const inner = (i, j) => {
    if (i >= s.length && j >= p.length) {
      return true
    }

    if (i === s.length) {
      return p[j + 1] === '*' ? inner(i, j + 2) : false
    }

    if (j >= p.length || i >= s.length) {
      return false
    }

    if (memo[i][j] !== null) {
      return memo[i][j]
    }

    if (p[j + 1] === '*') {
      const zero = inner(i, j + 2)
      const oneOrMore = s[i] === p[j] || p[j] === '.' ? inner(i + 1, j) : false

      return (memo[i][j] = zero || oneOrMore)
    }

    if (p[j] === '.') {
      return (memo[i][j] = inner(i + 1, j + 1))
    }

    if (s[i] === p[j]) {
      return (memo[i][j] = inner(i + 1, j + 1))
    }

    return (memo[i][j] = false)
  }

  return inner(0, 0)
}
