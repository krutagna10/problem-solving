import { test, expect } from "@jest/globals";
import findMiddleIndex from "../src/find-the-middle-index-in-array";

test("should return the leftmost middleIndex with sum on both its sides equal", () => {
  expect(findMiddleIndex([2,3,-1,8,4])).toBe(3);
  expect(findMiddleIndex([1, -1, 4])).toBe(2);
});

test("should return -1 when there is no valid middleIndex", () => {
  expect(findMiddleIndex([2, 5]));
})

