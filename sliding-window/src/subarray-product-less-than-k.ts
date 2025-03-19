/**
 * Finds the number of contiguous subarrays whose product is less than `k`
 * @param {number[]} nums - Array of integers
 * @param {number} k - Target integer
 * @returns {number} - Number of contiguous subarray whose product is less than `k`
 * @time O(n)
 * @space O(1)
 */
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) {
    return 0;
  }

  let subarrays = 0;
  let product = 1;
  let left = 0;
    
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    subarrays += (right - left + 1);
  }

  return subarrays;
};

export default numSubarrayProductLessThanK;