import { test, expect } from "@jest/globals";
import countUniqueValues from "../src/count-unique-values";

test("should return unique values in the input array", () => {
  expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
});

test("should return 1 when length of input array is 1", () => {
  expect(countUniqueValues([1])).toBe(1);
});

test("should return 0 when length of input array is 0", () => {
  expect(countUniqueValues([])).toBe(0);
});
