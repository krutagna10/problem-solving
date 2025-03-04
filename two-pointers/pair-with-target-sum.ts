/**
 * @param {number[]} nums
 * @param {number} target
 * @retuns {number[]}
 * @time O(n)
 * @space O(1)
 */
function pairWithTargetSum(nums: number[], target: number): number[] {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum === target) {
      return [start, end];
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
  return [-1, -1];
}

