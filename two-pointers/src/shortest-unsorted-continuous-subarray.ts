/**
 * Finds one contiguous subarray if sorted in non-decreasing order, then the whole array will be sorted in non-decreasing-order
 * @param {number[]} nums - Array of integers
 * @returns {number} - Length of the subarray
 * @time O(n)
 * @space O(1)
 */
function findUnsortedSubarray(nums: number[]): number {
  let left = 0;
  while (left < nums.length - 1 && nums[left] <= nums[left + 1]) {
    left++;
  }

  if (left === nums.length - 1) {
    return 0;
  }

  let right = nums.length - 1;
  while (right > 0 && nums[right] >= nums[right - 1]) {
    right--;
  }

  let minElement = Infinity;
  let maxElement = -Infinity;
  for (let i = left; i <= right; i++) {
    minElement = Math.min(minElement, nums[i]);
    maxElement = Math.max(maxElement, nums[i]);
  }

  while (left > 0 && minElement < nums[left - 1]) {
    left--;
  }

  while (right < nums.length - 1 && maxElement > nums[right + 1]) {
    right++;
  }

  return right - left + 1;
};

export default findUnsortedSubarray;
