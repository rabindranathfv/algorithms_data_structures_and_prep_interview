/**
 * LeetCode #121 — Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * Given an array `prices` where prices[i] is the price of a stock on day i,
 * return the maximum profit achievable by buying on one day and selling on a
 * later day. Return 0 if no profit is possible.
 *
 * Time Complexity:  O(n) — single pass tracking the minimum price seen so far
 * Space Complexity: O(1)
 *
 * Example:
 *   maxProfit([7, 1, 5, 3, 6, 4]) // 5  (buy at 1, sell at 6)
 *   maxProfit([7, 6, 4, 3, 1])    // 0  (prices only fall)
 */
export function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfitValue = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfitValue) {
      maxProfitValue = price - minPrice;
    }
  }

  return maxProfitValue;
}
