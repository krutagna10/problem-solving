import { test, expect } from "@jest/globals";
import moveZeroes from "../src/move-zeroes";

test("should move all the 0's to the end of the array while maintaining relative order", () => {
  const nums1 = [0, 1, 0, 3, 12];
  moveZeroes(nums1);
  expect(nums1).toEqual([1, 3, 12, 0, 0]);

  const nums2 = [0];
  moveZeroes(nums2);
  expect(nums2).toEqual([0]);
})
