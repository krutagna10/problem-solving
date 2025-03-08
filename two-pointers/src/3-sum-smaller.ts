/**
 * Finds number of triplets whose sum is less then `target`
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target integer
 * @returns {number} - Number of triplets whose sum is less than `target`
 * @time O(n^2)
 * @space O(n)
 */
function threeSumSmaller(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let tripletsCount = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < target) {
        tripletsCount += right - left;
        left++;
      } else {
        right--;
      }
    }
  }

  return tripletsCount;
}

export default threeSumSmaller;
