import { test, expect } from "@jest/globals";
import maxArea from "../src/container-with-most-water";

test("should return the maximum amount of water that the container can store", () => {
  expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49);
  expect(maxArea([1, 1])).toEqual(1);
})
