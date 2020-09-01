/**
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 *
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n === 1) return n
  let a = 1
  let b = 2
  for (let i = 3; i <= n; i++) {
    const c = a + b
    a = b
    b = c
  }
  return b
}

module.exports = climbStairs
