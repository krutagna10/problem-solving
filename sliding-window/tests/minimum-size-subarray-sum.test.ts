import { test, expect } from "@jest/globals";
import minSubArrayLen from "../src/minimum-size-subarray-sum";

test("should return the length of smallest subarray whose sum is greater than or equal to target sum", () => {
  expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
  expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
});

test("should return 0 when subarray whose sum is greater than equal to target sum does not exist", () => {
  expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
});
