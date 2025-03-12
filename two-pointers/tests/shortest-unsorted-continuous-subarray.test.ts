import { test, expect } from "@jest/globals";
import findUnsortedSubarray from "../src/shortest-unsorted-continuous-subarray";

test("should return the length of subarray to be sorted which will sort the entire array", () => {
  expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).toBe(5);
});

test("should return 0 when the array is already sorted", () => {
  expect(findUnsortedSubarray([1, 2, 3, 4])).toBe(0);
  expect(findUnsortedSubarray([1])).toBe(0);
})

