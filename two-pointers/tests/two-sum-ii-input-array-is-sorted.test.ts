import { expect, test } from "@jest/globals";
import twoSum from "../src/two-sum-ii-input-array-is-sorted";

test("should return indices which sum up to target", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
});

