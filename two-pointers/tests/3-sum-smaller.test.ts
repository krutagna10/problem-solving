import { test, expect } from "@jest/globals";
import threeSumSmaller from "../src/3-sum-smaller";

test("should return count of triplets whose sum is less than target", () => {
  expect(threeSumSmaller([-1, 0, 2, 3], 3)).toBe(2);
  expect(threeSumSmaller([-1, 4, 2, 1, 3], 5)).toBe(4);
});
