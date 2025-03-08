/**
 * Finds the number of contiguous subarrays whose product is less than `k`
 * @param {number[]} nums - Array of integers
 * @param {number} k - Target integer
 * @returns {number} - Number of countiguous subarray whose product is less than `k`
 * @time O(n)
 * @space O(1)
 */
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let count = 0;
  let product = 1;
  let left = 0;
    
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (left <= right && product >= k) {
      product /= nums[left];
      left++;
    }
    count += (right - left + 1);
  }

  return count;
}

export default numSubarrayProductLessThanK;