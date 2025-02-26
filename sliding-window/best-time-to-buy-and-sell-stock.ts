function maxProfit(prices: number[]): number {
  let maximumProfit = 0; 
  let l = 0;

  for (let r = 1; r < prices.length; r++) {
    if (prices[l] > prices[r]) {
      l = r;
    } else {
      const currentProfit = prices[r] - prices[l];
      maximumProfit = Math.max(maximumProfit, currentProfit);
    }
  }
  return maximumProfit; 
};