/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  let sum = 0
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])

  for (let i = 0; i < s.length; i++) {
    const current = map.get(s[i])
    const next = map.get(s[i+1])
    if (next > current) {
      sum += next - current
      i++
    } else {
      sum += current
    }
  }

  return sum
}

module.exports = romanToInt