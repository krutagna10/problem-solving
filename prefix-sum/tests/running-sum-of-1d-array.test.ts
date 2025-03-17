import { test, expect } from "@jest/globals";
import runningSum from "../src/running-sum-of-1d-array";

test("should return the running sum of the array", () => {
  expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
  expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
});
