import { test, expect } from "@jest/globals";
import rotate from "../src/rotate-array";


test("should rotate the array to the right by k steps", () => {
  const nums1 = [1, 2, 3, 4, 5, 6, 7];
  rotate(nums1, 3);
  expect(nums1).toEqual([5, 6, 7, 1, 2, 3, 4]);

  const nums2 = [3, 99, -1, 100];
  rotate(nums2, 2);
  expect(nums2).toEqual([-1, 100, 3, 99]);
})