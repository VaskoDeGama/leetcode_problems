/**
 * Say you have an array prices for which the ith element is the price
 * of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as
 * many transactions as you like (i.e., buy one and sell
 * one share of the stock multiple times).
 * Note: You may not engage in multiple transactions
 * at the same time (i.e., you must sell the stock before you buy again).
 * @param {number[]} prices
 * @returns {number}
 */
export default function maxProfit(prices) {
  return prices.reduce((profit, sell, index, array) => {
    return index > 0 && sell > array[index - 1] ? profit + sell - array[index - 1] : profit
  }, 0)
}
