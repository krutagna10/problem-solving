/**
 * Calcualates the maximum amount of water that the container can store
 * @param {number[]} height - Array of integers
 * @returns {number} - The maximum amount of water the container can store
 * @time O(n)
 * @space O(1)
 */
function maxArea(height: number[]): number {
  let maxWater = -Infinity;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currWater = (right - left) * Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, currWater);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};

export default maxArea;
