import { test, expect } from "@jest/globals";
import sortColors from "../src/sort-colors";

test("should sort the array in-place such that objects of same color are adjacent", () => {
  const nums1 = [2, 0, 2, 1, 1, 0];
  sortColors(nums1);
  expect(nums1).toEqual([0, 0, 1, 1, 2, 2]);

  const nums2 = [2, 0, 1];
  sortColors(nums2);
  expect(nums2).toEqual([0, 1, 2]);
});
