import { test, expect } from "@jest/globals";
import numSubarrayProductLessThanK from "../../sliding-window/src/subarray-product-less-than-k";


test("should return number of contiguous subarrays whose product is less than k", () => {
  expect(numSubarrayProductLessThanK([10, 5, 2, 6], 100)).toBe(8);
});

test("should return 0 when subarrays whose product is less than k does not exist", () => {
  expect(numSubarrayProductLessThanK([1, 2, 3], 0)).toBe(0);
})