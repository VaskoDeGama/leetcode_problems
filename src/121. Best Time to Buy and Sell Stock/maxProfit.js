/**
 * Say you have an array for which the ith element is the price
 * of a given stock on day i.
 * If you were only permitted to complete at most one transaction
 * (i.e., buy one and sell one share of the stock), design an algorithm
 * to find the maximum profit.
 * Note that you cannot sell a stock before you buy one.
 * @param {number[]} prices
 * @returns {number}
 */
export default function maxProfit(prices) {
  return prices.reduce(
    (prev, current) => ({
      min: Math.min(prev.min, current),
      max: Math.max(prev.max, current - prev.min)
    }),
    { min: prices[0], max: 0 }
  ).max
}
