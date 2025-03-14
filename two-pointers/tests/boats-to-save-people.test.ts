import { test, expect } from "@jest/globals";
import numRescueBoats from "../src/boats-to-save-people";

test("should return the minimum number of boats to carry every given person", () => {
  expect(numRescueBoats([1, 2], 3)).toBe(1);
  expect(numRescueBoats([3, 2, 2, 1], 3)).toBe(3);
  expect(numRescueBoats([3, 5, 3, 4], 5)).toBe(4);
})