import { test, expect } from "@jest/globals";
import findMaxAverage from "../src/maximum-average-subarray-i";

test("should return the maximum average value of subarray whose length is k", () => {
  expect(findMaxAverage([1, 12, - 5, -6, 50, 3], 4)).toBe(12.75);
  expect(findMaxAverage([5], 1)).toBe(5);
});
