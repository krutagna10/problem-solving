/**
 * Calculates all the unique quadruplets which sum to target
 * @param {number[]} nums - Array of integers
 * @param {number} target - The target integer
 * @returns {number[][]} - Array of unique quadruplets which sum to target
 * @time O(n^3)
 * @space O(n)
 */
function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const quadruplets = [];

  for (let a = 0; a < nums.length - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) {
      continue;
    }
    for (let b = a + 1; b < nums.length - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) {
        continue;
      }
      let c = b + 1;
      let d = nums.length - 1;
      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (sum === target) {
          quadruplets.push([nums[a], nums[b], nums[c], nums[d]]);
          c++;
          d--;
          while (c < d && nums[c] === nums[c - 1]) {
            c++;
          }
          while (c < d && nums[d] === nums[d + 1]) {
            d--;
          }
        } else if (sum < target) {
          c++;
        } else {
          d--;
        }
      }
    }
  }
  return quadruplets;
};