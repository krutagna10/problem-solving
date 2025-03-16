/**
 * Calculates the number of triplets that can form triangles
 * @param {number[]} nums - Array of integers
 * @returns {number} - The number of triplets that can form triangles
 * @time O(n^2)
 * @space O(n)
 */
function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let triplets = 0;

  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0;
    let right = i - 1;
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        triplets += right - left;
        right--;
      } else {
        left++;
      }
    }
  }

  return triplets;
};

export default triangleNumber;