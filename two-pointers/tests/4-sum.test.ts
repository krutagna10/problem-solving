import { test, expect } from "@jest/globals";
import fourSum from "../src/4-sum";

test("should return unique quadruplets which sum to target", () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ]);
  expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([2, 2, 2, 2]);
});
