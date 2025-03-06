import { test, expect } from "@jest/globals";
import merge from "../src/merge-sorted-array";


test("should merge nums1 and nums2 into a sorted array", () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});

test("should handle merging when nums1 is empty", () => {
  const nums1 = [0];
  const m = 0;
  const nums2 = [1];
  const n = 1;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1]);
});

test("should handle merging when nums2 is empty", () => {
  const nums1 = [1];
  const m = 1;
  const nums2 = [0];
  const n = 0;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1]);
});

test("should handle merging when both nums1 and nums2 are empty", () => {
  const nums1: number[] = [];
  const m = 0;
  const nums2: number[] = [];
  const n = 0;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([]);
});


