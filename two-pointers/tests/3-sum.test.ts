import { test, expect } from "@jest/globals";
import threeSum from "../src/3-sum";

test("should return triplets which sum to zero", () => {
  expect(threeSum([-1, 0, 1, 2, -1, 4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
  expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
});

test("should return empty array when no triplets sum to zero", () => {
  expect(threeSum([0, 1, 1])).toEqual([]);
});
