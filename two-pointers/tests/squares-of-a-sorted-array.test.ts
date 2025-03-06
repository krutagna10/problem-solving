import { test, expect } from "@jest/globals";
import sortedSquares from "../src/squares-of-a-sorted-array";

test("should return an array of squares of each number sorted in non-decreasing order", () => {
  expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
});
