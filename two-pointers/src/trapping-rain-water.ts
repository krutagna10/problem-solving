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
  let maxLeft = 0;
  let maxRight = 0;
  let trappedWater = 0;

  while (left <= right) {
    if (maxLeft <= maxRight) {
      const currTrappedWater = Math.max(0, maxLeft - height[left]);
      trappedWater += currTrappedWater;
      maxLeft = Math.max(maxLeft, height[left]);
      left++;
    } else {
      const currTrappedWater = Math.max(0, maxRight - height[right]);
      trappedWater += currTrappedWater;
      maxRight = Math.max(maxRight, height[right]);
      right--;
    }
  }
  return trappedWater;
}

export default trap;
