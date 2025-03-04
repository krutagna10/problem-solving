/**
 * @param {number[]} nums
 * @param {number} target
 * @retuns {number[]}
 * @time O(n)
 * @space O(1)
 */
function pairWithTargetSum(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const currSum = nums[left] + nums[right];
    if (currSum === target) {
      return [left, right];
    } else if (currSum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
}

export default pairWithTargetSum;