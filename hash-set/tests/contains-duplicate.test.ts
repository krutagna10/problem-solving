import { test, expect } from "@jest/globals";
import containsDuplicate from "../src/contains-duplicate";

test("should return true when any value appears twice in array", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});

test("should return false when every value is distinct", () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
})
  