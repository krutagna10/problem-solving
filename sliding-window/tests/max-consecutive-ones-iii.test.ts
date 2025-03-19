import { test, expect } from "@jest/globals";
import longestOnes from "../src/max-consecutive-ones-iii";

test("return the maximum number of 1's in the array after flipping k 0's", () => {
  expect(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)).toBe(6);
  expect(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)).toBe(10);
});
