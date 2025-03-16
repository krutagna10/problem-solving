import { test, expect } from "@jest/globals";
import maximumSubarraySum from "../src/maximum-sum-subarray-of-size-k";

test("should return the maximum sum of k consecutive elements", () => {
  expect(maximumSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
  expect(maximumSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
  expect(maximumSubarraySum([4, 2, 1, 6], 1)).toBe(6);
  expect(maximumSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13);
})

