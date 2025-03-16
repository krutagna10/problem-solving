/**
 * Computes how can water the array can trap
 * @param {number[]} height - Array of non-negative integers
 * @returns {number} - The water that the array can trap
 * @time O(n)
 * @space O(1)
 */
function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];
  let trappedWater = 0;

  while (left < right) {
    if (maxLeft < maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      trappedWater += maxLeft - height[left];
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      trappedWater += maxRight - height[right];
    }
  }
  return trappedWater;
}

export default trap;
