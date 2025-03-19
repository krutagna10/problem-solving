/**
 * Finds the subarray of lengh k that has maximum average value
 * @param {number[]} nums - Array of integers
 * @param {number} k - The length of subarray
 * @returns {number} - The maximum average value
 * @time O(n)
 * @space O(1)
 */
function findMaxAverage(nums: number[], k: number): number {
  debugger;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxAverage = sum / k;
  for (let i = k; i < nums.length; i++) {
    sum -= nums[i - k];
    sum += nums[i];
    maxAverage = Math.max(maxAverage, sum / k);
  }
  return maxAverage;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

export default findMaxAverage;
