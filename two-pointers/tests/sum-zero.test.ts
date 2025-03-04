import { expect, test } from "@jest/globals";
import sumZero from "../src/sum-zero";

test("should return [-1, -1] when length of input array is less than 2", () => {
  expect(sumZero([])).toEqual([-1, -1]);
  expect(sumZero([1])).toEqual([-1, -1]);
});

test("should return indices which sum up to 0", () => {
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([0, 6]);
});

test("should return [-1, 1] when no pairs sum up to 0", () => {
  expect(sumZero([-2, 0, 1, 3])).toEqual([-1, -1]);
});
