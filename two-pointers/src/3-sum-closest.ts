/**
 * Finds three integers whose sum is closest to target
 * @param {number[]} nums - Array of integers
 * @param {target} target - Target Integer
 * @returns {number} - Sum closest to target
 * @time O(n^2)
 * @space O(n)
 */
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const currSum = nums[i] + nums[left] + nums[right];
      if (currSum === target) {
        return currSum;
      } else if (currSum > target) {
        right--;
      } else {
        left++;
      }
      
      if (Math.abs(target - currSum) < Math.abs(target - closestSum)) {
        closestSum = currSum;
      }
    }
  }

  return closestSum;
}

export default threeSumClosest;