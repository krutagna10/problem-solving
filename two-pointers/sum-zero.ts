/**
 * @param {number[]} nums
 * @returns {number[]}
 * @time O(n)
 * @space O(1)
 */
function sumZero(nums: number[]): number[] {
  if (nums.length < 2) {
    return [-1, -1];
  }
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum === 0) {
      return [start, end];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }

  return [-1, -1];
}
