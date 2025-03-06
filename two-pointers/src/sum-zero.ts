/**
 * Finds two indices in a sorted array whose elements sum to zero.
 * @param {number[]} nums - Sorted array of numbers
 * @returns {number[]} - Indices whose elements sum to zero.
 * @time O(n)
 * @space O(1)
 */
function sumZero(nums: number[]): number[] {
  if (nums.length < 2) {
    return [-1, -1];
  }
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === 0) {
      return [left, right];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
}

export default sumZero;
