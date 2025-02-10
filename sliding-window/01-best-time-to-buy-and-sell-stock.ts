function maxProfit(prices: number[]): number {
  let currMin = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    let currProfit = prices[i] - currMin;
    currMin = Math.min(currMin, prices[i]);
    maxProfit = Math.max(maxProfit, currProfit);
  }

  return maxProfit;
};