/**
 * Calculates all triplets which sum to zero
 * @param {number[]} nums - Array of integers
 * @returns {number[][]} -  Array of triplets
 * @time O(n^2)
 * @space O(n)
 */
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0)  {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return triplets;
}


export default threeSum;