import { test, expect } from "@jest/globals";
import maxProfit from "../src/best-time-to-buy-and-sell-stock-II-";

test("should return maximum profit we can achieve", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
})

test("should return 0 when we cannot make a profit", () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
})

