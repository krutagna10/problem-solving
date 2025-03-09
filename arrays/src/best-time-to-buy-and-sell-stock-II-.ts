/**
 * Calculates the maximum profit that can be achieved 
 * @param {number[]} prices - Array of prices of given stock
 * @returns {number} - Maximum profit that can be achieved
 * @time O(n)
 * @space O(1)
 */
function maxProfit(prices: number[]): number {
  let totalProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      const currProfit = prices[i] - prices[i - 1];
      totalProfit += currProfit;
    }
  }
  return totalProfit;
}

export default maxProfit;
