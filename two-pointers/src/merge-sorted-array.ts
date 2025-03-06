/**
 * Merges arrays into a single array sorted in non-decreasing order
 * @param {number[]} nums1 - Sorted array of numbers
 * @param {number} m - Number of elements in `nums1` that should be merged
 * @param {number[]} nums2 - Sorted array of number
 * @param {number} n - Number of elements in `num2` that should be merged
 * @retuns {void}
 * @time O(m + n)
 * @space O(m + n)
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const mergedNums = new Array(m + n);
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      mergedNums[k++] = nums1[i++];
    } else {
      mergedNums[k++] = nums2[j++];
    }
  }

  while (i < m) {
    mergedNums[k++] = nums1[i++];
  }

  while (j < n) {
    mergedNums[k++] = nums2[j++];
  }

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = mergedNums[i];
  }
}

export default merge; 