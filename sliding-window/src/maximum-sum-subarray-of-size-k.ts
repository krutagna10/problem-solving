/**
 * Calculates the maximum sum of `k` consecutive elements in the array
 * @param {number[]} nums - Array of integers
 * @param {number} k - Integer k
 * @returns {number} - maximum sum of `k` consecutive elements
 * @time O()
 * @space O()
 */
function maximumSubarraySum(nums: number[], k: number): number {
  let maxSum = -Infinity;
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    
  }

  return maxSum;
}

export default maximumSubarraySum;