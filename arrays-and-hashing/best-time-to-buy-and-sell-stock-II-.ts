/**
 * @param {number[]} prices
 * @returns {number}
 * @time O(n)
 * @space O(1)
 */
function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}
