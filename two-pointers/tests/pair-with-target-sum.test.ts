import { expect, test } from "@jest/globals";
import pairWithTargetSum from "../src/pair-with-target-sum";

test("should return indices which sum up to target", () => {
  expect(pairWithTargetSum([1, 2, 3, 4, 6], 6)).toEqual([1, 3]);
  expect(pairWithTargetSum([2, 5, 9, 11], 11)).toEqual([0, 2]);
});

test("should return [-1, -1] when no pairs sum up to target", () => {
  expect(pairWithTargetSum([1, 2, 3], 0)).toEqual([-1, -1]);
});
