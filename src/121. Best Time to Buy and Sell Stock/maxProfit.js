/**
 * Say you have an array for which the ith element is the price
 * of a given stock on day i.
 * If you were only permitted to complete at most one transaction
 * (i.e., buy one and sell one share of the stock), design an algorithm
 * to find the maximum profit.
 * Note that you cannot sell a stock before you buy one.
 *
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maxProfit = 0
  let minPrice = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - minPrice)
  }
  return maxProfit
}

module.exports = maxProfit
