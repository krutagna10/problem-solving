import { test, expect } from "@jest/globals";
import firstMissingPositive from "../src/first-missing-positive";

test("should return the smallest positive integer that is not present in nums", () => {
  expect([1, 2, 0]).toBe(3);
  expect([3, 4, -1, 1]).toBe(2);
  expect([7, 8, 9, 11, 12]).toBe(1);
});
